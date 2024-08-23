// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Endpoint to handle subscription
app.post('/subscribe', (req, res) => {
  const { email } = req.body;

  // Configure the email transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password
    },
  });

  // Set up email data
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'ziaullah4127@gmail.com', // The email address where you want to receive the subscription notifications
    subject: 'New Subscriber',
    text: `You have a new subscriber: ${email}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Subscription successful');
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
