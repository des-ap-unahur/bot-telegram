import nodemailer from 'nodemailer';
import nodeMailerConfig from '../Config/NodeMailer/NodeMailer.config';

export const MailTransporter = nodemailer.createTransport({
  host: nodeMailerConfig.NODEMAILER_HOST,
  port: nodeMailerConfig.NODEMAILER_PORT,
  secure: true,
  auth: {
    type: "OAuth2",
    user: nodeMailerConfig.USER,
    pass: nodeMailerConfig.PASSWORD,
    clientId: nodeMailerConfig.CLIENT_ID,
    clientSecret: nodeMailerConfig.CLIENT_SECRET,
    refreshToken: nodeMailerConfig.REFRESH_TOKEN,
    accessToken: nodeMailerConfig.ACCESS_TOKEN,
  },
  tls:{
    rejectUnauthorized:false 
  }
});
