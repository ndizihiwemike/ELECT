const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")));


// Handle form submission
app.post("/submit-form", async (req, res) => {
  try {
    const { name, email, phone, location, cartItems, total } = req.body;
    console.log(name, email, phone, location, cartItems, total);
    res.status(201).send("Form data submitted successfully!");

    // Create a Nodemailer transporter (configure with your email provider)
    const transporter = nodemailer.createTransport({
      service: "Yandex",
      auth: {
        user: "mndizihiwe@yandex.com",
        pass: "votxcetqzdxeudvp",
      },
    });

    // Compose email
    const mailOptions = {
      from: "mndizihiwe@yandex.com",
      to: "patriciakagoya45@gmail.com",
      subject: "Order from " + name,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nCart Items: ${cartItems}\nTotal: ${total}`,
    };


    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).send('Form data submitted successfully!');
  } catch (error) {
    console.error('Error submitting form data:', error);
    res.status(500).send('An error occurred while processing the form.');
  }
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
