// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer");

export default async function handler(req, res) {

  try {
    await main(req.body.name, req.body.email, req.body.phone, req.body.message)
    res.status(200).json({message: "success"})

  } catch(err) {
      res.status(400).json(err)
  }

}


// async..await is not allowed in global scope, must use a wrapper
async function main(name, email, phone, message) {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.MAIL_USER, // generated ethereal user
      pass: process.env.MAIL_PWD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Lumix Kontaktformular" <info@lumix.solar>', // sender address
    to: "info@lumix.solar", // list of receivers
    subject: "Kontakformular Website", // Subject line
    html: `Name: ${name}<br/>E-Mail: ${email}<br/>Telefon: ${phone}<br/>Nachricht: ${message}`, // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}
