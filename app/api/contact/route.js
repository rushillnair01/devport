import { NextResponse } from 'next/server';

// You need to set RESEND_API_KEY in your Vercel project environment variables
const RESEND_API_KEY = re_P6QvGiQm_HQ7TXu3bk5uMSmxQB3SumVhR;

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Send email using Resend API
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@devfuletra.com',
        to: 'Devf0220@gmail.com',
        subject: `New Contact Form Submission from ${name}`,
        html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message}</p>`
      })
    });

    if (!res.ok) {
      const error = await res.text();
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 