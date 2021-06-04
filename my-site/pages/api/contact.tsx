require('dotenv').config();

export default function (req, res) {
    let nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.user,
            pass: process.env.password,
        },
        secure: true,
    });

    const mailData = {
        from: process.env.user,
        to: process.env.real,
        subject: req.body.name + " sent site email from " +req.body.email,
        text: req.body.message,
    }
    console.log('got here\n');
    transporter.sendMail(mailData, function (err, info) {
        if(err) {
            console.log(err);
        }
        else {
            console.log(info);
        }
    })

    console.log('got here 2\n');
    res.status(200);
    res.end();
}