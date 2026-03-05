import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Validate required environment variables
const validateEnv = () => {
  const missing = [];
  if (!process.env.EMAIL_USER) missing.push('EMAIL_USER');
  if (!process.env.EMAIL_PASS) missing.push('EMAIL_PASS');
  
  if (missing.length > 0) {
    throw new Error(`Missing environment variables: ${missing.join(', ')}. Please create a .env file with these credentials.`);
  }
};

// Create transporter for sending emails
// Configure with your email provider (Gmail, Outlook, etc.)
const createTransporter = () => {
  validateEnv();
  
  return nodemailer.createTransport({
    service: 'gmail', // or use 'smtp' with custom settings
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Use app password for Gmail
    },
  });
};

// Send email function
export const sendEmail = async ({ name, email, subject, message }) => {
  const transporter = createTransporter();

  // Email to the portfolio owner (you)
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER_OUTLOOK, // Send to yourself
    subject: `Portfolio Contact: ${subject || 'New Message'}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
        <h2 style="color: #10b981;">New Contact from Portfolio</h2>
        <div style="background: #f3f4f6; padding: 20px; border-radius: 10px; margin-top: 15px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
          This email was sent from your portfolio contact form.
        </p>
      </div>
    `,
  };

  // Send confirmation email to the sender
  const confirmationMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thank you for reaching out!',
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
        <h2 style="color: #10b981;">Thank you for connecting!</h2>
        <p>Hi ${name},</p>
        <p>I've received your message and will get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <div style="background: #f3f4f6; padding: 20px; border-radius: 10px; margin-top: 15px;">
          <p><strong>Subject:</strong> ${subject || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
          Best regards,<br/>
          Vikas Bhatia
        </p>
      </div>
    `,
  };

  try {
    // Send email to portfolio owner
    await transporter.sendMail(mailOptions);
    
    // Send confirmation to sender
    await transporter.sendMail(confirmationMailOptions);
    
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, message: 'Failed to send email. Please try again.' };
  }
};

