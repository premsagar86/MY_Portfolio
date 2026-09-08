export const runtime = "nodejs";

import { contactSchema } from "@/lib/validation";
import { transporter } from "@/lib/mailer";

// best-effort in-memory rate limit (resets per serverless invocation)
const hits = new Map<string, { n: number; t: number }>();
function limited(ip: string) {
  const now = Date.now();
  const e = hits.get(ip);
  if (!e || now - e.t > 60_000) {
    hits.set(ip, { n: 1, t: now });
    return false;
  }
  e.n += 1;
  return e.n > 5;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (limited(ip)) {
    return Response.json(
      { ok: false, error: "Too many requests" },
      { status: 429 },
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ ok: false, error: "Invalid input" }, { status: 400 });
  }

  const { name, email, subject, message, company } = parsed.data;
  if (company) return Response.json({ ok: true }); // silently drop bots

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return Response.json(
      { ok: false, error: "Mail not configured" },
      { status: 500 },
    );
  }

  try {
    await transporter.sendMail({
      from: `Portfolio <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO ?? process.env.SMTP_USER,
      replyTo: email,
      subject: subject
        ? `[Portfolio] ${subject}`
        : `[Portfolio] Message from ${name}`,
      text: `${name} <${email}>\n\n${message}`,
      html: `<p><strong>${name}</strong> &lt;${email}&gt;</p><p style="white-space:pre-wrap">${message}</p>`,
    });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "Failed to send" }, { status: 502 });
  }
}
