import type { RequestHandler } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

export const POST: RequestHandler = async ({ request }) => {
  const { message } = await request.json();

  // Gmail SMTP ile göndermek için transporter oluştur
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mert.ga552@gmail.com',  // <-- kendi gmail adresini yaz
      pass: 'kotu hvhx anng rkya'            // <-- Gmail uygulama şifresi gerekiyor
    }
  });

  try {
    await transporter.sendMail({
      from: '"Web Sitesi" <mert.ga552@gmail.com>',
      to: 'mmertgorgulu@gmail.com',
      subject: 'Yeni İletişim Mesajı',
      text: message
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
};
