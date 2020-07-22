import nodemailer from 'nodemailer';

export const MailTransporter = nodemailer.createTransport({
  host: 'mail.fazttech.net',
  port: 587,
  secure: false,
  auth: {
    user: 'testtwo@fazttech.net',
    pass: 'testtwocontraseña'
  },
  tls: {
    rejectUnauthorized: false
  }
});

const Info = MailTransporter.sendMail({
  from: '"FaztTech Server" <testtwo@fazttech.xyz>', // sender address,
  to: 'fazttech@gmail.com',
  subject: 'Website Contact Form',
  text: 'Hello World'
})
