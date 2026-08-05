// Content data for the Employee Manual. Kept separate from rendering/styling code.
module.exports = [
  // ===================================================================
  // CHAPTER 1
  // ===================================================================
  {
    title: 'Welcome to the Supplier Management System',
    intro: [
      'This manual is your complete guide to using the Supplier Management System (SMS) as an Employee. Its main purpose, from your side, is simple: it is where you fill out evaluation surveys rating the partner companies (couriers, suppliers, and subcontractors) you work with, and where you can look back at everything you have previously submitted.',
      'You do not need any technical background to use this system or this manual. Every instruction below describes exactly what to click, in the order to click it, using the same words and buttons you will see on your screen.',
    ],
    sections: [
      {
        heading: 'What is the Supplier Management System?',
        blocks: [
          { type: 'p', text: 'The Supplier Management System is Microgenesis’s internal platform for keeping track of the partner companies we work with — Suppliers, Couriers, and Subcontractors — and for measuring how well they are performing. As an employee, your role in this system is to periodically rate the partner companies you interact with, by filling out short evaluation surveys. Those ratings feed into company-wide reports that help management decide which partners are performing well and which need improvement.' },
        ],
      },
      {
        heading: 'What you can do in the system',
        blocks: [
          { type: 'p', text: 'Your account gives you access to a small, focused set of pages:' },
          { type: 'bullets', items: [
            [{ text: 'Dashboard', bold: true }, ' — your home screen, showing your own evaluation progress and general company-wide performance summaries.'],
            [{ text: 'New Evaluation', bold: true }, ' — where you fill out and submit evaluation surveys for partner companies.'],
            [{ text: 'My Submissions', bold: true }, ' — a personal history of every evaluation you have submitted.'],
            [{ text: 'Notifications', bold: true }, ' — reminders about evaluations you still need to complete.'],
            [{ text: 'Profile / Settings', bold: true }, ' — a summary of your account details and personal display preferences.'],
          ] },
          { type: 'note', text: 'You will not see modules like Employees / Users, Reports & Exports, or Settings for the whole system — those are only available to Administrators. If you ever need something outside your usual access, contact your Administrator.' },
        ],
      },
      {
        heading: 'How this manual is organized',
        blocks: [
          { type: 'p', text: 'Each chapter after this one matches an item in your sidebar menu, in the same top-to-bottom order you see them in the app. Every chapter follows the same pattern: a plain-language overview of what the page is for, followed by step-by-step instructions for the main things you will do there, with helpful "Tip", "Note", and "Important" boxes along the way.' },
          { type: 'p', text: 'The very last chapter is a Frequently Asked Questions (FAQ) section that collects the most common "How do I…?" questions in one place.' },
        ],
      },
    ],
  },

  // ===================================================================
  // CHAPTER 2 — SIGNING IN
  // ===================================================================
  {
    title: 'Signing In',
    intro: [
      'You do not create a separate password for the Supplier Management System. Every account uses the same company email and password you already use for Microsoft 365 (Outlook, Teams, and the rest of your Microsoft work apps). If you can sign in to your work email, you already have everything you need to sign in here.',
    ],
    sections: [
      {
        heading: 'Signing in to your account',
        blocks: [
          { type: 'p', text: 'When you open the system, you will land on the Sign In screen, showing the Microgenesis logo and a short "Supplier Management System" title.' },
          { type: 'steps', items: [
            'Open the Supplier Management System in your web browser.',
            'In the "Email address" field, type your full company email address (it must end in @mgenesis.com — the same address you use for your company email).',
            'In the "Password" field, type your usual company account password. Click the small eye icon inside the field if you want to double-check what you typed.',
            'If you are on a device only you use, you can leave "Remember me" checked so you stay signed in next time. On a shared computer, uncheck it.',
            'Click "Sign in". If your organization has Microsoft sign-in enabled, you may instead see a "Sign in with Microsoft" button — clicking that lets you sign in with your Microsoft 365 account directly, without typing your password into this screen at all.',
            'Once your details are verified, you will be taken straight to your Dashboard.',
          ] },
          { type: 'screenshot', caption: 'The Sign In screen, showing the Microgenesis logo, the Email address and Password fields, and the Sign in button.' },
        ],
      },
      {
        heading: 'If you cannot sign in',
        blocks: [
          { type: 'p', text: 'A few messages may appear if something is not quite right:' },
          { type: 'bullets', items: [
            [{ text: '"Please enter both your email and password."', bold: true }, ' — one of the two fields was left empty. Fill in both and try again.'],
            [{ text: '"Access is restricted to verified @mgenesis.com email addresses."', bold: true }, ' — you typed an email address that is not a company address. Double-check you typed your full @mgenesis.com email correctly.'],
            [{ text: 'An incorrect-password message', bold: true }, ' — your password was not recognized. This is the same password as your company email, so if your Microsoft 365 password has recently changed, use the new one.'],
          ] },
          { type: 'note', text: 'Because sign-in uses your existing Microsoft 365 company credentials, there is no separate "forgot my Supplier Management System password" process. If you cannot sign in to your company email or Microsoft 365 account, that needs to be fixed first — the Supplier Management System will work again as soon as you can sign in to your normal work account. Contact your IT department for help with your Microsoft 365 account.' },
          { type: 'p', text: 'If your email and password are both correct but you still cannot get in, it may be that your account has not been set up yet, or that a detail on it needs to be corrected — in that case, contact your Administrator so they can check your account under Employees / Users.' },
        ],
      },
    ],
  },

  // ===================================================================
  // CHAPTER 3 — GETTING AROUND
  // ===================================================================
  {
    title: 'Getting Around the Interface',
    intro: [
      'Every page in the system shares the same layout, so once you understand the basic pieces, you can find your way around anywhere.',
    ],
    sections: [
      {
        heading: 'The top header bar',
        blocks: [
          { type: 'p', text: 'Along the very top of the screen you will always see the Microgenesis logo on the left (click it any time to jump back to your Dashboard), the current page name, and on the right your account menu, the notification bell, and (if enabled) a light/dark mode switch.' },
        ],
      },
      {
        heading: 'The left-hand sidebar menu',
        blocks: [
          { type: 'p', text: 'This is your main way of moving between pages. As an Employee, your sidebar is short and simple:' },
          { type: 'bullets', items: [
            'Dashboard',
            'New Evaluation',
            'My Submissions',
            'Notifications',
            'Profile / Settings',
          ] },
          { type: 'p', text: 'Just click any item to open that page. On smaller screens, this menu collapses into a dropdown you tap to open at the top of the screen instead of a sidebar.' },
          { type: 'screenshot', caption: 'The employee sidebar, showing Dashboard, New Evaluation, My Submissions, Notifications, and Profile / Settings.' },
        ],
      },
      {
        heading: 'The main content area',
        blocks: [
          { type: 'p', text: 'Whatever page you have selected fills the rest of the screen. Most pages follow a similar pattern: summary information near the top, and then a list or form underneath. Clicking a row or a card almost always opens more detail.' },
        ],
      },
    ],
  },

  // ===================================================================
  // CHAPTER 4 — DASHBOARD
  // ===================================================================
  {
    title: 'Dashboard',
    intro: [
      'The Dashboard is your home screen — the first thing you see after signing in. It tells you exactly how many evaluations you still have left to do, plus a general picture of how partner companies are performing overall.',
    ],
    sections: [
      {
        heading: 'Your Evaluation Progress',
        blocks: [
          { type: 'p', text: 'Near the top of your Dashboard, you will see an "Evaluation Progress" section with three gauges — one each for Courier, Supplier, and Subcontractor. Each gauge shows a percentage and a count like "3/8 Companies Evaluated", telling you how many of the companies assigned to you in that category you have already rated, out of the total.' },
          { type: 'p', text: 'If no evaluation survey of a particular type currently applies to you, that gauge will instead show "No Task Yet".' },
          { type: 'screenshot', caption: 'The Evaluation Progress section on the Dashboard, showing three gauges for Courier, Supplier, and Subcontractor with their completion percentages.' },
        ],
      },
      {
        heading: 'Other widgets on your Dashboard',
        blocks: [
          { type: 'p', text: 'Below your personal progress gauges, you will also see some general, read-only widgets about overall company performance — the same kind of information Administrators see, such as:' },
          { type: 'bullets', items: [
            [{ text: 'Top Performing Partner', bold: true }, ' — the current best-rated active partner company.'],
            [{ text: 'Response Statistics Feed', bold: true }, ' — total feedback received and total active partners.'],
            [{ text: 'Stakeholder Group Comparison', bold: true }, ' — average scores compared across Couriers, Suppliers, and Subcontractors.'],
            [{ text: 'Published Survey Forms', bold: true }, ' — currently live surveys and their due dates.'],
            [{ text: 'Recent Evaluations Log', bold: true }, ' — the most recent submissions company-wide.'],
            [{ text: 'Top & Bottom Question Ratings', bold: true }, ' — the highest- and lowest-scoring questions.'],
          ] },
          { type: 'p', text: 'A toggle near the top of the page lets you switch this general information between "Current Period" and "All-Time".' },
        ],
      },
    ],
  },

  // ===================================================================
  // CHAPTER 5 — NEW EVALUATION
  // ===================================================================
  {
    title: 'New Evaluation',
    intro: [
      'This is the most important page for your day-to-day work: it is where you fill out and submit an evaluation survey rating a partner company. The form has three steps: entering your details, answering the survey questions, and a final confirmation.',
    ],
    sections: [
      {
        heading: 'Step 1 — Respondent Info',
        blocks: [
          { type: 'p', text: 'This first step gathers a few basic details before you get to the actual questions.' },
          { type: 'steps', items: [
            'Open "New Evaluation" from the sidebar.',
            'If you have more than one survey form available to you, choose the correct one from the "Survey Form to Answer" dropdown. If you only have one, it will be shown to you automatically.',
            'Check that "Associated Department" and "Designation" are correct — these are usually pre-filled based on your account, but you can adjust them if the survey allows.',
            'Choose the company you are evaluating from "Select Partner Company to Evaluate". This list only shows companies you have not already evaluated for this particular survey.',
            'Optionally fill in the company’s "Address".',
            'For Courier and Supplier surveys, choose the "Period Covered" — 1st Half, 2nd Half, or Annual.',
            'If you have previously evaluated a different company on this same type of survey, you may see a checkbox: "Start from my last evaluation’s ratings". Leaving it checked pre-fills the questions with your previous answers, so you only need to adjust whatever is different for this new company, instead of starting from scratch.',
            'Click "Proceed to Form Questions →" to continue.',
          ] },
          { type: 'screenshot', caption: 'Step 1 of the New Evaluation form (Respondent Info), showing the survey, department, designation, and company selection fields.' },
          { type: 'tip', text: 'If every company in a category has already been evaluated by you, the page will show a green "All Registered Companies Evaluated!" message instead of the form — there is nothing more for you to do for that category right now.' },
        ],
      },
      {
        heading: 'Step 2 — Questions Form',
        blocks: [
          { type: 'p', text: 'This step shows the actual survey questions, grouped under section headers. Depending on the question, you will answer it in one of a few different ways:' },
          { type: 'bullets', items: [
            [{ text: 'Rating scale (most common): ', bold: true }, 'click a numbered button for your score, or click "N/A" if the question does not apply. The lowest, middle, and highest buttons are also labeled Poor, Fair, and Excellent as a guide.'],
            [{ text: 'Typed rating: ', bold: true }, 'type a number within the range shown, or type "N/A".'],
            [{ text: 'Dropdown: ', bold: true }, 'choose one option from the list.'],
            [{ text: 'Free text: ', bold: true }, 'type your own written answer.'],
            [{ text: 'Checkboxes: ', bold: true }, 'tick every option that applies (more than one can be selected).'],
            [{ text: 'Date range: ', bold: true }, 'enter a "from" and "to" date in dd/mm/yyyy format.'],
            [{ text: 'Table / grid rating: ', bold: true }, 'for questions with several related sub-parts, select a score for each row in the table.'],
          ] },
          { type: 'p', text: 'Questions marked with a red asterisk (*) are required and must be answered before you can submit.' },
          { type: 'steps', items: [
            'Work through each question, entering your answer using whichever input type it uses.',
            'If you need to double check or change something from Step 1, click "Return" to go back.',
            'Once every question is answered, click "Submit Evaluation".',
            'If anything required is missing or invalid, the page will highlight the problem question(s) in red and scroll you to the first one — fix those and click "Submit Evaluation" again.',
          ] },
          { type: 'screenshot', caption: 'Step 2 of the New Evaluation form (Questions Form), showing a numbered rating-scale question with buttons from 0 up to the maximum, plus an N/A option.' },
          { type: 'tip', text: 'If you are working through a lot of rating-scale questions, you can use your keyboard instead of clicking: press a number key (or the arrow keys) to set the score, press "N" for N/A, and press Enter to jump straight to the next question.' },
        ],
      },
      {
        heading: 'Step 3 — Success',
        blocks: [
          { type: 'p', text: 'Once your evaluation is submitted, you will see a confirmation screen with a green checkmark and the message "Submission Successful", along with a short summary of what you just submitted (respondent, survey type, and the date it was registered).' },
          { type: 'p', text: 'From here you can click "Submit Another Evaluation" to immediately start rating a different company, or "Return to Directory" to leave and go elsewhere in the system.' },
        ],
      },
      {
        heading: 'Saving your progress if you need to leave partway through',
        blocks: [
          { type: 'p', text: 'You do not need to remember to save as you go — if you try to navigate away while you are in the middle of answering questions (for example, by clicking a different menu item), the system will automatically ask if you want to save your progress first.' },
          { type: 'steps', items: [
            'A window titled "Save Progress Draft?" will appear.',
            'Click "Save Draft & Exit" to keep everything you have entered so far and come back to it later.',
            'Click "Exit Without Saving" if you want to discard your in-progress answers instead.',
            'Click "Cancel" to stay on the form and keep working without leaving.',
          ] },
          { type: 'note', text: 'The next time you open the same survey for the same company, any saved draft answers will be automatically restored for you, so you can pick up right where you left off.' },
        ],
      },
    ],
  },

  // ===================================================================
  // CHAPTER 6 — MY SUBMISSIONS
  // ===================================================================
  {
    title: 'My Submissions',
    intro: [
      'My Submissions is your personal history of every evaluation you have submitted, newest first. It is a handy way to check what you have already rated a company and to look back at your past answers.',
    ],
    sections: [
      {
        heading: 'Finding and reviewing a past submission',
        blocks: [
          { type: 'steps', items: [
            'Open "My Submissions" from the sidebar.',
            'Optionally type into the search box to filter by company name or survey type.',
            'Click anywhere on a submission row to expand it and see every question and the exact answer you gave, along with the date and time you submitted it.',
            'Click the row again (or its chevron arrow) to collapse it.',
          ] },
          { type: 'screenshot', caption: 'The My Submissions page, showing a list of past evaluations with company name, survey type, and submission date, with one row expanded to show the questions and answers.' },
          { type: 'note', text: 'This page is for viewing only — past submissions cannot be edited from here. If you believe a submitted evaluation contains a genuine mistake, contact your Administrator.' },
        ],
      },
    ],
  },

  // ===================================================================
  // CHAPTER 7 — NOTIFICATIONS
  // ===================================================================
  {
    title: 'Notifications',
    intro: [
      'Your Notifications page works like a simple email inbox, listing reminders about survey evaluations you still need to complete. It does not include anything else — just pending-evaluation reminders sent to you automatically.',
    ],
    sections: [
      {
        heading: 'Checking your reminders',
        blocks: [
          { type: 'p', text: 'At the top of the page, three cards summarize your reminders: "Pending reminders", "Companies to evaluate", and how often reminders are sent to you ("Reminder frequency"). Below that, your inbox lists each reminder with a subject like "REMINDER - Survey Accomplishment: [Survey Title]" and how many companies are still awaiting your evaluation.' },
          { type: 'steps', items: [
            'Open "Notifications" from the sidebar, or click the bell icon in the header for a quick preview.',
            'Click any reminder to open it and read the full message — it lists exactly which partner companies you still need to evaluate and the deadline.',
            'Click "Start Evaluation Now" inside the message to jump straight into the New Evaluation form for that survey.',
            'Click the back arrow to return to your inbox list.',
          ] },
          { type: 'screenshot', caption: 'The Notifications inbox, showing a list of reminder messages with subject lines like "REMINDER - Survey Accomplishment", and one opened reminder showing the pending companies and a Start Evaluation Now button.' },
          { type: 'tip', text: 'To tidy up your inbox, tick the checkboxes next to reminders you have already dealt with and click "Delete". This only removes them from your inbox view — it does not complete the evaluation for you, so make sure you have actually submitted the survey first.' },
          { type: 'note', text: 'When your inbox is completely empty, you will see "Amazing job! You have accomplished all assigned supplier surveys." — meaning there is nothing outstanding for you right now.' },
        ],
      },
      {
        heading: 'Using the notification bell',
        blocks: [
          { type: 'p', text: 'The bell icon in the top header always shows a red badge with your number of unread reminders. Click it any time for a quick dropdown preview without leaving the page you are on, and click "View all reminders" at the bottom of the dropdown to open the full Notifications page.' },
        ],
      },
    ],
  },

  // ===================================================================
  // CHAPTER 8 — PROFILE / SETTINGS
  // ===================================================================
  {
    title: 'Profile / Settings',
    intro: [
      'Your Profile page is a personal summary of your account and your evaluation activity, plus two simple controls: a display preference and signing out.',
    ],
    sections: [
      {
        heading: 'What you will find here',
        blocks: [
          { type: 'p', text: 'At the top, your Profile shows your name, email address, role, designation, and department. These details are read-only on this page — if any of them are wrong, ask your Administrator to correct them under Employees / Users.' },
          { type: 'p', text: 'Below that, a "My Impact" section shows your own personal stats: Total Evaluations you have submitted, Companies Covered, and your Last Submission date. A "Recent Submissions" list shows your four most recent evaluations, with a "View all" link that takes you to the full My Submissions page.' },
          { type: 'screenshot', caption: 'The Profile page, showing your name, email, role, designation, and department at the top, and the My Impact stats below.' },
        ],
      },
      {
        heading: 'Preferences and signing out',
        blocks: [
          { type: 'steps', items: [
            'To switch the interface between light and dark themes, use the "Dark Mode" toggle under Preferences.',
            'To sign out of the system on this device, click "Sign out" under Session.',
          ] },
          { type: 'note', text: 'There is no password field or notification-preference setting on this page. Since sign-in uses your company Microsoft 365 email, changing your password is done the same way you would change your regular Microsoft 365/company email password, not from within this system.' },
        ],
      },
    ],
  },

  // ===================================================================
  // CHAPTER 9 — FAQ
  // ===================================================================
  {
    title: 'Frequently Asked Questions',
    isFaq: true,
    intro: [
      'Quick answers to the questions Employees ask most often, each pointing back to the full instructions earlier in this manual.',
    ],
    faqs: [
      { q: 'How do I log in?', a: 'Use your company Microsoft 365 email and password — the same ones you use for your work email — on the Sign In screen. There is no separate password to create. See Chapter 2, Signing In.' },
      { q: 'I forgot my password — what do I do?', a: 'There is no separate password for this system; it uses your Microsoft 365 company email password. If you cannot sign in to your work email either, contact your IT department to help recover your Microsoft 365 account. See Chapter 2, Signing In.' },
      { q: 'How do I fill out and submit a new evaluation?', a: 'Open "New Evaluation" from the sidebar, complete Step 1 (choose the survey and the company), click "Proceed to Form Questions", answer every required question in Step 2, and click "Submit Evaluation". See Chapter 5, New Evaluation.' },
      { q: 'What does the "Start from my last evaluation’s ratings" checkbox do?', a: 'If checked, it pre-fills the new form with the same ratings you gave your most recent evaluation of the same survey type, so you can just adjust what is different for this company instead of answering from scratch. See Chapter 5, New Evaluation.' },
      { q: 'What should I do if I cannot finish the survey right now?', a: 'Just navigate away — a "Save Progress Draft?" window will appear automatically, letting you click "Save Draft & Exit" so you can pick up exactly where you left off next time you open the same survey for the same company. See Chapter 5, New Evaluation.' },
      { q: 'What does N/A mean and when should I use it?', a: 'N/A means "Not Applicable" — use it for any rating question that genuinely does not apply to the situation you are evaluating, instead of guessing a score. See Chapter 5, New Evaluation.' },
      { q: 'Why can’t I find a certain company in the dropdown when starting an evaluation?', a: 'The "Select Partner Company to Evaluate" list only shows companies of the matching type that you have not already evaluated for that particular survey. If you have already rated them, they will not appear again for the same survey. See Chapter 5, New Evaluation.' },
      { q: 'How do I check what I previously submitted?', a: 'Open "My Submissions" from the sidebar and click on any row to expand it and see your full answers and the submission date. See Chapter 6, My Submissions.' },
      { q: 'Can I edit an evaluation after I have submitted it?', a: 'No, past submissions cannot be edited from My Submissions. If there was a genuine mistake, contact your Administrator. See Chapter 6, My Submissions.' },
      { q: 'How do I know how many evaluations I still have left to do?', a: 'Check the "Evaluation Progress" gauges on your Dashboard, or the "Companies to evaluate" count on your Notifications page. See Chapter 4, Dashboard, and Chapter 7, Notifications.' },
      { q: 'How often will I be reminded about pending evaluations?', a: 'This is set by your Administrator per survey and shown on your Notifications page under "Reminder frequency" (for example, every 24 hours). See Chapter 7, Notifications.' },
      { q: 'How do I quickly jump into an evaluation from a reminder?', a: 'Open the reminder in Notifications (or from the bell icon dropdown) and click "Start Evaluation Now" inside the message. See Chapter 7, Notifications.' },
      { q: 'How do I switch between light and dark mode?', a: 'Go to Profile / Settings and use the "Dark Mode" toggle under Preferences. See Chapter 8, Profile / Settings.' },
      { q: 'How do I sign out?', a: 'Go to Profile / Settings and click "Sign out" under Session. See Chapter 8, Profile / Settings.' },
      { q: 'My name, department, or designation shown on my Profile is wrong — how do I fix it?', a: 'These details are read-only on your Profile page. Ask your Administrator to correct them under Employees / Users. See Chapter 8, Profile / Settings.' },
    ],
  },
];
