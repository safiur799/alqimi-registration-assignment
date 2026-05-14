import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

@Injectable()
export class MailerService {
    constructor(
        private readonly configService: ConfigService
    ) { }

    async sendMail(from: string, to: string | string[], subject: string, tplName: string, locals: any): Promise<SMTPTransport.SentMessageInfo> {
        
        const user = this.configService.getOrThrow<string>('MAIL_USERNAME');
        const pass = this.configService.getOrThrow<string>('MAIL_PASSWORD')

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user, pass }
        });

        await transporter.verify().then(() => {
            console.log('Gmail SMTP connection OK');
        }).catch((err) => {
            console.error('smtp error', err.message);
        });

        const mailOptions = {
            from,
            to,
            subject,
            html: `<h1>Hello ${locals.name}!</h1><p>Welcome to Forge.</p>`
        };

        const result = await transporter.sendMail(mailOptions);
        return result;
    }
}