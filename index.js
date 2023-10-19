const express = require("express");
const scheduler = require("node-cron"); 
const nodemailer = require("nodemailer"); 
const { USER_EMAIL, USER_PASSWORD } = require('./config/credential');
const { transporter, emailOptions } = require("./services/email")

const app = express();

const PORT = 1337;

//! Refer: https://crontab.guru/ to understand how cron syntax works
scheduler.schedule("* * * * *", async () => {
  console.log("Sending email");

  // Delivering mail with sendMail method
  transporter.sendMail(emailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});