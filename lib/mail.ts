import nodemailer from "nodemailer";

export async function sendVerificationEmail(email: string,token:string) {
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.NODEMAILER_EMAIL,
            pass:process.env.NODEMAILER_PASSWORD,
        }
    });

    const mailOptions = {
        from:process.env.NODEMAILER_EMAIL,
        to:email,
        subject:"Email verification",
        text:`Visit this link to verify your account http://localhost:3000/verification?token=${token}`,
    };
    await transporter.sendMail(mailOptions);
}

