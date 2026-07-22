import { PublicClientApplication, type AccountInfo, InteractionRequiredAuthError } from '@azure/msal-browser';

// Filled in from your Azure AD (Entra ID) App Registration. Until these are
// set, isMsalConfigured() returns false and the app falls back to the demo
// email/password login - nothing else needs to change for that to work.
const CLIENT_ID = import.meta.env.VITE_AZURE_CLIENT_ID as string | undefined;
const TENANT_ID = import.meta.env.VITE_AZURE_TENANT_ID as string | undefined;
const REDIRECT_URI = (import.meta.env.VITE_AZURE_REDIRECT_URI as string | undefined) || window.location.origin;

// Delegated scopes: User.Read to read the signed-in profile, Mail.Send to
// send partner reports as that same signed-in mailbox. Both require only
// user consent (no admin consent, no client secret) since this is a
// delegated-permission, browser-only flow - nothing server-side to secure.
export const GRAPH_SCOPES = ['User.Read', 'Mail.Send'];

export function isMsalConfigured(): boolean {
  return Boolean(CLIENT_ID && TENANT_ID);
}

let msalInstance: PublicClientApplication | null = null;
let initPromise: Promise<void> | null = null;

function getMsalInstance(): PublicClientApplication {
  if (!msalInstance) {
    msalInstance = new PublicClientApplication({
      auth: {
        clientId: CLIENT_ID!,
        authority: `https://login.microsoftonline.com/${TENANT_ID}`,
        redirectUri: REDIRECT_URI,
      },
      cache: {
        cacheLocation: 'localStorage',
      },
    });
  }
  return msalInstance;
}

async function ensureInitialized(): Promise<PublicClientApplication> {
  const instance = getMsalInstance();
  if (!initPromise) initPromise = instance.initialize();
  await initPromise;
  return instance;
}

export interface MicrosoftLoginResult {
  email: string;
  name?: string;
  account: AccountInfo;
}

// Opens the Microsoft sign-in popup and requests the scopes above up front,
// so a Graph access token is available immediately without a second consent
// prompt later at send-time.
export async function loginWithMicrosoft(): Promise<MicrosoftLoginResult> {
  const instance = await ensureInitialized();
  const result = await instance.loginPopup({ scopes: GRAPH_SCOPES, prompt: 'select_account' });
  instance.setActiveAccount(result.account);
  const email = result.account.username;
  return { email, name: result.account.name, account: result.account };
}

export async function logoutMicrosoft(): Promise<void> {
  if (!isMsalConfigured()) return;
  const instance = await ensureInitialized();
  const account = instance.getActiveAccount();
  if (account) {
    await instance.logoutPopup({ account });
  }
}

// Silently gets a Graph access token for the currently signed-in Microsoft
// account (refreshing via the cached refresh token behind the scenes if
// needed). Falls back to an interactive popup only if silent acquisition
// genuinely requires it (e.g. first-time consent for a scope, or an expired
// session) - this is what the real "Send" action calls right before
// building the Graph API request.
export async function getGraphAccessToken(): Promise<string> {
  const instance = await ensureInitialized();
  const account = instance.getActiveAccount() || instance.getAllAccounts()[0];
  if (!account) {
    throw new Error('No signed-in Microsoft account. Please sign in with Microsoft again.');
  }
  try {
    const result = await instance.acquireTokenSilent({ scopes: GRAPH_SCOPES, account });
    return result.accessToken;
  } catch (err) {
    if (err instanceof InteractionRequiredAuthError) {
      const result = await instance.acquireTokenPopup({ scopes: GRAPH_SCOPES, account });
      return result.accessToken;
    }
    throw err;
  }
}
