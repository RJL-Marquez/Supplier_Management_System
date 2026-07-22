// Sends mail through Microsoft Graph as the currently signed-in user
// (delegated Mail.Send scope - see msalAuth.ts). No backend/secrets
// involved: the access token authorizes the call directly from the browser,
// exactly like any other fetch to a REST API.

export interface GraphMailAttachment {
  name: string;
  base64Content: string; // no "data:...;base64," prefix - raw base64 only
  contentType: string;
}

export interface SendGraphMailParams {
  accessToken: string;
  to: string;
  cc?: string[];
  subject: string;
  htmlBody: string;
  attachment?: GraphMailAttachment;
}

export async function sendGraphMail(params: SendGraphMailParams): Promise<void> {
  const { accessToken, to, cc = [], subject, htmlBody, attachment } = params;

  const message = {
    subject,
    body: { contentType: 'HTML', content: htmlBody },
    toRecipients: [{ emailAddress: { address: to } }],
    ccRecipients: cc.filter(Boolean).map((address) => ({ emailAddress: { address } })),
    attachments: attachment
      ? [
          {
            '@odata.type': '#microsoft.graph.fileAttachment',
            name: attachment.name,
            contentType: attachment.contentType,
            contentBytes: attachment.base64Content,
          },
        ]
      : undefined,
  };

  const response = await fetch('https://graph.microsoft.com/v1.0/me/sendMail', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message, saveToSentItems: true }),
  });

  if (!response.ok) {
    const errorBody = await response.text().catch(() => '');
    throw new Error(`Microsoft Graph sendMail failed (${response.status}): ${errorBody || response.statusText}`);
  }
}

/** Strips the "data:application/pdf;base64," prefix a PDF data URL carries, leaving raw base64 for Graph. */
export function dataUrlToBase64(dataUrl: string): string {
  const idx = dataUrl.indexOf(',');
  return idx >= 0 ? dataUrl.slice(idx + 1) : dataUrl;
}
