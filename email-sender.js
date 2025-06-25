const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your_email@gmail.com",
    pass: "your_app_password",
  },
});

const mailOptions = {
  from: "your_email@gmail.com",
  to: "your_email@gmail.com",
  subject: "Test Node.js Email",
  text: "Hello from Node.js using Nodemailer!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
