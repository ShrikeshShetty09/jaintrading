import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();
    const { name, email, phone, subject, message } = data;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL;
    const senderName = process.env.BREVO_SENDER_NAME || 'Jain Trading Company';
    const recipientEmail = process.env.RECIPIENT_EMAIL;

    // Debug logging
    console.log('=== Brevo Configuration Check ===');
    console.log('API Key exists:', !!apiKey);
    console.log('API Key length:', apiKey?.length || 0);
    console.log('Sender Email:', senderEmail || 'NOT SET');
    console.log('Sender Name:', senderName);
    console.log('Recipient Email:', recipientEmail || 'NOT SET');
    console.log('================================');

    if (!apiKey || !senderEmail || !recipientEmail) {
      console.error('Missing Brevo configuration - check .env file');
      return NextResponse.json(
        { error: 'Email service not configured. Please check server environment variables.' },
        { status: 500 }
      );
    }

    // Create HTML email template
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f5f5f5; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
                
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #065f46 0%, #d4a574 50%, #065f46 100%); padding: 40px 30px; text-align: center;">
                    <img src="https://jaintrading.vercel.app/images/logo/jaintraderslogo.png" alt="Jain Trading Company Logo" style="width: 80px; height: 80px; margin-bottom: 20px; border-radius: 50%; background: white; padding: 10px;" />
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">Jain Trading Company</h1>
                    <p style="margin: 10px 0 0 0; color: #fef3c7; font-size: 14px; letter-spacing: 2px;">PREMIUM HERBS & SPICES</p>
                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <h2 style="margin: 0 0 10px 0; color: #1f2937; font-size: 24px;">New Contact Form Submission</h2>
                    <p style="margin: 0 0 30px 0; color: #6b7280; font-size: 16px;">You have received a new inquiry from your website.</p>
                    
                    <!-- Contact Details -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #fdfbf7; border-radius: 12px; border: 1px solid #e5e1d8;">
                      <tr>
                        <td style="padding: 20px;">
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                            <tr>
                              <td style="padding: 12px 0; border-bottom: 1px solid #e5e1d8;">
                                <span style="color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Name</span>
                                <p style="margin: 5px 0 0 0; color: #1f2937; font-size: 16px; font-weight: 600;">${name}</p>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 12px 0; border-bottom: 1px solid #e5e1d8;">
                                <span style="color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</span>
                                <p style="margin: 5px 0 0 0;">
                                  <a href="mailto:${email}" style="color: #d4a574; font-size: 16px; text-decoration: none;">${email}</a>
                                </p>
                              </td>
                            </tr>
                            ${phone ? `
                            <tr>
                              <td style="padding: 12px 0; border-bottom: 1px solid #e5e1d8;">
                                <span style="color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</span>
                                <p style="margin: 5px 0 0 0;">
                                  <a href="tel:${phone}" style="color: #d4a574; font-size: 16px; text-decoration: none;">${phone}</a>
                                </p>
                              </td>
                            </tr>
                            ` : ''}
                            <tr>
                              <td style="padding: 12px 0; border-bottom: 1px solid #e5e1d8;">
                                <span style="color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Subject</span>
                                <p style="margin: 5px 0 0 0; color: #1f2937; font-size: 16px; font-weight: 600;">${subject}</p>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding: 12px 0;">
                                <span style="color: #9ca3af; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</span>
                                <p style="margin: 5px 0 0 0; color: #374151; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <!-- Quick Actions -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 30px;">
                      <tr>
                        <td style="text-align: center;">
                          <a href="mailto:${email}" style="display: inline-block; padding: 14px 28px; background: linear-gradient(135deg, #d4a574 0%, #b8956a 100%); color: #1f2937; text-decoration: none; border-radius: 50px; font-weight: 600; font-size: 14px; margin-right: 10px;">Reply to ${name}</a>
                          <a href="tel:${phone || ''}" style="display: inline-block; padding: 14px 28px; background-color: #065f46; color: #ffffff; text-decoration: none; border-radius: 50px; font-weight: 600; font-size: 14px;">Call Now</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color: #fdfbf7; padding: 30px; text-align: center; border-top: 1px solid #e5e1d8;">
                    <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 14px;">Jain Trading Company</p>
                    <p style="margin: 0 0 5px 0; color: #9ca3af; font-size: 12px;">Bunglow Behind Roadways, Bus Stand, Jaroli Trade Center</p>
                    <p style="margin: 0 0 10px 0; color: #9ca3af; font-size: 12px;">Maharana Pratap Marg, Neemuch, MP 458441</p>
                    <p style="margin: 0; color: #9ca3af; font-size: 11px;">© ${new Date().getFullYear()} Jain Trading Company. All rights reserved.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Send email via Brevo API
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: senderName,
          email: senderEmail,
        },
        to: [
          {
            email: recipientEmail,
            name: 'Jain Trading Company',
          },
        ],
        replyTo: {
          email: email,
          name: name,
        },
        subject: `[Contact Form] ${subject} - ${name}`,
        htmlContent: htmlContent,
        tags: ['contact-form', 'website-inquiry'],
      }),
    });

    console.log('Brevo API Response Status:', response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error('=== Brevo API Error ===');
      console.error('Status:', response.status);
      console.error('Error Details:', JSON.stringify(errorData, null, 2));
      console.error('======================');
      return NextResponse.json(
        { error: `Brevo API Error: ${errorData.message || 'Failed to send email'}` },
        { status: 500 }
      );
    }

    const result = await response.json();
    console.log('=== Email Sent Successfully ===');
    console.log('Message ID:', result.messageId);
    console.log('==============================');
    
    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      messageId: result.messageId,
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
