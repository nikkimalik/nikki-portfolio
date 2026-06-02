# EmailJS Setup Guide

This portfolio uses EmailJS to handle contact form submissions directly to your inbox.

## Installation

The `@emailjs/browser` package should already be installed. If not, run:

```bash
npm install @emailjs/browser
```

## Configuration

### Step 1: Create an EmailJS Account

1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Set Up Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Copy your **Service ID** (e.g., `service_xxxxx`)

### Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Set Template Name (e.g., "Portfolio Contact Form")
4. Copy your **Template ID** (e.g., `template_xxxxx`)

**Template Content:**

Configure your email template to receive the form data. The contact form sends:
- `from_name`: Visitor's name
- `from_email`: Visitor's email
- `subject`: Message subject
- `message`: Message body

Example template:

```
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

### Step 4: Get Your Public Key

1. Go to **Account Settings** → **API Keys**
2. Copy your **Public Key** (e.g., `pk_xxxxx`)

### Step 5: Add Environment Variables

1. Create a `.env.local` file in the project root (copy from `.env.example`)
2. Add your credentials:

```
VITE_EMAILJS_PUBLIC_KEY=pk_xxxxx
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
```

3. **Never commit `.env.local` to version control** (it's already in `.gitignore`)

### Step 6: Test the Form

1. Run the development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out the contact form and submit
4. Check your email inbox for the message

## Files

- **ContactForm Component:** `src/components/ContactForm.jsx`
  - Handles form state, validation, and EmailJS submission
  - Includes loading, success, and error states
  - Styled with rose accent palette and glassmorphism

- **Contact Page:** `src/pages/Contact.jsx`
  - Displays contact information cards
  - Email card copies to clipboard instead of using mailto
  - Integrates the ContactForm component

## Features

✅ Professional contact form with validation
✅ Clipboard copy for email address
✅ Loading state during submission
✅ Success and error feedback messages
✅ Form auto-reset after successful submission
✅ Rose accent styling matching portfolio design
✅ Framer Motion animations
✅ Glassmorphism card design
✅ Responsive on all devices

## Troubleshooting

### Form not sending?

1. Check console for error messages
2. Verify all three environment variables are set correctly
3. Ensure EmailJS service is connected to your email account
4. Check your email service's spam/junk folder

### Environment variables not loading?

- Restart the dev server after adding `.env.local`
- Make sure variable names start with `VITE_` for Vite to expose them

### Testing with a different email?

1. Add your email as a "To Email" recipient in the EmailJS template settings
2. Or update the template to dynamically use `{{from_email}}` for replies

## Support

For EmailJS support and documentation, visit: https://www.emailjs.com/docs/
