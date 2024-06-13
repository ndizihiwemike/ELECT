const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.static(path.join(__dirname,"public")));


// Handle form submission
app.post('/sendData', async (req, res) => {
  try {
    // Extract form data
    const { Name, email, tel_no, Location } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Use your email service provider
      auth: {
        user: 'mickyjackie93@gmail.com', // Your email address
        pass: 'm18989422', // Your email password
      },
    });

    // Compose email
    const mailOptions = {
      from: 'mndizihiwe@yandex.com',
      to: 'mickyjackie93@gmail.com', // Specify the recipient's email address
      subject: 'Form Submission',
      text: `Name: ${Name}\nEmail: ${email}\nPhone: ${tel_no}\nLocation: ${Location}`,
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
