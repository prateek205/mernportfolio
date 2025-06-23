const contacts = require("../models/contactModel");
const nodemailer = require("nodemailer");

const savedContact = async (req, res) => {
  const { name, email, contact, subject, message } = req.body;

  try {
    const newContact = await new contacts({ name, email, contact, subject, message });
    await newContact.save();

    const mailer = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.APP_PASS,
      },
    });

    const mailOption = {
      from: process.env.USER_EMAIL,
      to: process.env.USER_EMAIL,
      subject: `${subject}`,
      text: `${message} 
      
      Name: ${name},
      Email: ${email},
      Contact: ${contact},

      `,
      replayTo: email,
    };

    await mailer.sendMail(mailOption);

    res
      .status(200)
      .json({ success: true, message: "Email Send and Save Successfully!!!" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to Send Email..." });
  }
};

module.exports = { savedContact };
