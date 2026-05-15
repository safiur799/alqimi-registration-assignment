import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class MailerService {
    private resend: Resend;
    constructor(
        private readonly configService: ConfigService
    ) {
        this.resend = new Resend(
            this.configService.getOrThrow<string>(
                'RESEND_API_KEY'
            )
        );
    }

    async sendMail(
        from: string,
        to: string | string[],
        subject: string,
        tplName: string,
        locals: any
    ) {

        return await this.resend.emails.send({
            from,
            to,
            subject,
            html: `
        <h1>Hello ${locals.name}</h1>
        <p>Welcome to Forge.</p>
      `,
        });
    }
}