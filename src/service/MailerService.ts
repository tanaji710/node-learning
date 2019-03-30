import nodemailer = require("nodemailer");

class MailerService {

    public transporter = nodemailer.createTransport({
        auth: {
            pass: "*****", // generated ethereal password
            user: "****@gmail.com", // generated ethereal user
        },
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        service: "gmail"
    });

    constructor() {
    }

    public send(receipientEmailId: string, mailSubject: string, htmlContent: any,
                callback: (error: any, response: any) => void) {
        const mailOptions = {
            from: "****@gmail.com",
            html: htmlContent,
            subject: mailSubject,
            to: receipientEmailId
        };

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
