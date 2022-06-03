import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

export {MailAdapter, SendMailData} from "../mail-adapter"

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "738ca01cc5c213",
      pass: "b222a8c4e9ca26"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {

     await transport.sendMail({
         from: 'Equipe Feedget <oi@feedget.com>',
         to: 'Ronald Nathan <nathanoliveira399@gmail.com>',
         subject: subject,
         html: body,
             
       });
    }
}


        //     `<div style = "font-family: sans serif; font- size: 16px; color: #111">`,
        //      `<p>Tipo do feedback: ${type}</p>`,
        //      `<p>Comentário: ${comment}</p>`,
        //      `</div>`
        //  ].join('\n')