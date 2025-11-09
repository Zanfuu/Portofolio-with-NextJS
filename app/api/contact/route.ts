import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { validateContactForm, sanitizeInput } from '@/utils/validation';

const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'fnaufalazmi09@gmail.com';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name || ''),
      email: sanitizeInput(email || ''),
      subject: sanitizeInput(subject || ''),
      message: sanitizeInput(message || ''),
    };

    // Validate form data
    const validation = validateContactForm(sanitizedData);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: 'Validation failed', errors: validation.errors },
        { status: 400 }
      );
    }

    // Konfigurasi transporter (menggunakan Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Email pengirim
        pass: process.env.EMAIL_PASS, // App password Gmail
      },
    });

    // Konfigurasi email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: RECIPIENT_EMAIL,
      subject: `Portfolio Contact: ${sanitizedData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${sanitizedData.name}</p>
            <p><strong>Email:</strong> ${sanitizedData.email}</p>
            <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #4b5563;">${sanitizedData.message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f0f9ff; border-radius: 8px; border-left: 4px solid #2563eb;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              This message was sent from your portfolio contact form.
            </p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${sanitizedData.name}
        Email: ${sanitizedData.email}
        Subject: ${sanitizedData.subject}
        
        Message:
        ${sanitizedData.message}
        
        This message was sent from your portfolio contact form.
      `,
    };

    // Kirim email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    // Log error in production (use proper logging service in production)
    if (process.env.NODE_ENV === 'development') {
      console.error('Error sending email:', error);
    }
    
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}