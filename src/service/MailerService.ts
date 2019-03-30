import nodemailer = require("nodemailer");

class MailerService {

    public transporter = nodemailer.createTransport({
        auth: {
            pass: "account.pass", // generated ethereal password
            user: "account.user", // generated ethereal user
        },
        host: "smtp.ethereal.email",
        port: 587,
        secure: false // true for 465, false for other ports
    });

    constructor() {
    }

    public send(mail: string, callback: (error: any, response: any) => void) {
        const mailOptions = {
            from: "foo@example.com",
            html: "<b>Hello world?</b>",
            subject: "Hello ✔",
            text: "Hello world?",
            to: "bar@example.com, baz@example.com"
        };

        // send mail with defined transport object
        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                callback(error, null);
            } else {
                console.log("Email sent: " + info.response);
                callback(null, info);
            }
        });
    }
}

Object.seal(MailerService);
export = MailerService;
