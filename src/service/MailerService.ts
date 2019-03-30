import nodemailer = require("nodemailer");
import UserRepository = require("../dataaccess/repository/UserRepository");

class MailerService {
    public transporter = nodemailer.createTransport({
        auth: {
            pass: "*********", // generated ethereal password
            user: "*********@gmail.com", // generated ethereal user
        },
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        service: "gmail"
    });
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public send(receipientEmailId: string, mailSubject: string, htmlContent: any,
                callback: (error: any, response: any) => void) {
        const query = { email : receipientEmailId };
        this.userRepository.retrieve(query, (error, result) => {
            if (error) {
                callback(error, null);
            } else {
                if (result.length > 0) {
                    const mailOptions = {
                        from: "Car Pool",
                        html: "your password is " + result[0].password,
                        subject: mailSubject,
                        to: receipientEmailId
                    };

                    this.transporter.sendMail(mailOptions, (error1, info) => {
                        if (error) {
                            console.log(error1);
                            callback(error1, null);
                        } else {
                            console.log("Email sent: " + info.response);
                            callback(null, info);
                        }
                    });
                } else {
                    callback({ message : "User Not Found"}, null);
                }
            }
        });
    }
}

Object.seal(MailerService);
export = MailerService;
