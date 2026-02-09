import { NextRequest, NextResponse } from 'next/server';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8519188703:AAE47RBKWctjhst_ZHio6-Oy52WApTLrBS8';
const CHAT_ID = process.env.TELEGRAM_CHAT_ID || '7899004639';

export async function POST(req: NextRequest) {
  try {
    const { name, email, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const text = [
      `📩 *New inquiry from dissonlab.com*`,
      ``,
      `*Name:* ${name}`,
      `*Email:* ${email}`,
      `*Service:* ${service || 'Not specified'}`,
      ``,
      `*Message:*`,
      message,
    ].join('\n');

    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: 'Markdown',
      }),
    });

    if (!res.ok) {
      console.error('Telegram API error:', await res.text());
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
