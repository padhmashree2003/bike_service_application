const nodemailer=require('nodemailer')

const transporter=nodemailer.createTransport({
    service:"Gmail",
    auth: {
        user: 'padhmashree2003@gmail.com',
        pass: 'gfxlovraizyanbbt',
    }
});

exports.sendMailForServiceStatus=(to, subject, status) =>
{
    const mailData={
        from: 'padhmashree2003@gmail.com',
        to: to,
        subject: subject,
        text: 'Current status of your bookings in John Garage'+status,
    }
    console.log("asdasd")
    transporter.sendMail(mailData, function(err, info)
    {
        if(err)
            console.log(err)
        else
            console.log(info)
    });
}


exports.sendMail=(req, res) =>
{
    const mailOptions={
        from: 'ranjithkumarstudies@gmail.com',
        to: 'padhmashree2003@gmail.com',
        subject: 'Hello, Nodemailer!',
        text: 'This is a test email sent from Nodemailer.',
    };

    transporter.sendMail(mailOptions, (error, info) =>
    {
        if(error) {
            console.error('Error sending email: ', error);
        } else {
            console.log('Email sent: '+info.response);
        }
    });
}
