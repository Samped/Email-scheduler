const nodemailer = require("nodemailer");
const { USER_EMAIL, USER_PASSWORD } = require("../config/credential");

const SMTP_PORT = 587;
const HOST_SERVICE = "smtp-relay.sendinblue.com";
const SENDERS_EMAIL = USER_EMAIL; // Change this to the sender's email id

//! You cannot use a temp mail id as your sender's email id as it does not have the functionality to send emails, it can only receive emails
const RECEIVERS_EMAIL = ["michaelsamuelpedro@gmail.com","babatundeomolade1212@gmail.com","ottahsamuelhg@gmial.com"]; // Change this to target email id
const CC = []; // Array of recipients email addresses that will appear on the Cc: field
const BCC = []; // Array of recipients email addresses that will appear on the Bcc: field
const EMAIL_SUBJECT = "The Lord is a Faithful Lover";
const EMAIL_BODY_TEXT ="smile "
const EMAIL_BODY_HTML =
"<h1>Come to think of it</h1><br> The only one that saw us in our dirt, in our shame in our nakedness and still fell deeply in love with us. The sweet thing is that he didn't just stopped there, NO he said i want them for my bride and he removed all his kingly garment, and came down from the throne and came to the pit of the dirt and brought us from it cleaned us and clothed us with his own garment and made us sit with him in his kingdom as a worthy bride fair to behold, <h1>oh What a king we have!!<h1>";

const emailOptions = {
    from: SENDERS_EMAIL,
    to: RECEIVERS_EMAIL,
    cc: CC,
    bcc: BCC, //
    subject: EMAIL_SUBJECT,
    //   text: EMAIL_BODY_TEXT, //! You can either keep the email body in plaintext or in html, but you cannot use both at the same time
    html: EMAIL_BODY_HTML,
};

const transporter = nodemailer.createTransport({
    host: HOST_SERVICE,
    port: SMTP_PORT,
    secure: false, // true for 465 for encypted mail, false for other ports
    auth: {
      user: USER_EMAIL,
      pass: USER_PASSWORD,
    },
  });


module.exports = { transporter, emailOptions }
