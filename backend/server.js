const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "service360"
});

const EMAIL_USERNAME = 'service360project@gmail.com';
const PASSWORD = 'mwljcmqjvvqysgbu';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USERNAME,
        pass: PASSWORD
    }
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

app.get('/', (req, res) => {
  res.json("Hello From Backend");
});




app.post('/register', async (req, res) => {
  const {username, password, email,mobileNo,confirmPassword,Role} = req.body;

  try {
      // Check if the email already exists in the database
      con.query('SELECT * FROM customer WHERE email = ?', email, (error, results) => {
          if (error) {
              console.error('Error checking existing email:', error);
              res.status(500).json({ success: false, message: 'Error checking existing email' });
          } else {
              if (results.length > 0) {
                  // If the email already exists, send a response indicating that it's already registered
                  res.status(400).json({ success: false, message: 'Email already registered' });
              } else {
                  // If the email is not registered, proceed with sending the verification email
                  const mailConfigurations = {
                      from: EMAIL_USERNAME,
                      to: email,
                      subject: 'Email Verification',
                      text: `Hi! There, You have recently visited  
                             our website and entered your email. 
                             Please follow the given link to verify your email 
                             http://localhost:8089/verify/${email}  
                             Thanks`
                  };

                  transporter.sendMail(mailConfigurations, function(error, info) {
                      if (error) {
                          console.log('Error sending email:', error);
                          res.status(500).json({ success: false, message: 'Error sending email' });
                      } else {
                          console.log('Email Sent Successfully');
                          console.log(info);

                          // Insert the new user into the database

                          const userData = {
                            username,
                            password,
                            email,
                            mobileNo,
                            c_password: confirmPassword,
                            Role,
                            verification_status: 0
                        };
                          con.query('INSERT INTO customer SET ?', userData, (error, results) => {
                            if (error) {
                                console.error('Error registering user:', error);
                                res.status(500).json({ success: false, message: 'Error registering user' });
                            } else {
                                res.status(200).json({ success: true, message: 'Verification email sent successfully' });
                            }
                        });
                      }
                  });
              }
          }
      });
  } catch (error) {
      console.error('Error registering:', error);
      res.status(500).json({ success: false, message: 'Server error' });
  }
});
app.get('/verify/:email', (req, res) => {
  const { email } = req.params;

  con.query('UPDATE customer SET verification_status = 1 WHERE email = ?', email, (error, results) => {
      if (error) {
          console.error('Error updating verification status:', error);
          res.status(500).send('Error updating verification status');
      } else {
          console.log('Verification status updated successfully');

          const redirectUrl = 'http://localhost:5173/login';

          res.send(`
              <p>Email verified successfully. Redirecting to login page...</p>
              <script>
                  setTimeout(function() {
                      window.location.href = '${redirectUrl}';
                  }, 3000); // Redirect after 3 seconds (adjust as needed)
              </script>
          `);
      }
  });
});


app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT Role, verification_status FROM customer WHERE email = ? AND password = ?";
  
  con.query(sql, [email, password], (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json("Error");
    }
    if (data.length > 0) {
      const role = data[0].Role; 
      const verificationStatus = data[0].verification_status;
      if (verificationStatus === 1) {
        return res.json({ success: true, role });
      } else {
        return res.json({ success: false, message: 'Email not verified' });
      }
    } else {
      return res.json({ success: false, message: 'Invalid email or password' }); 
    }
  });
});

app.post('/contactus', (req, res) => {
  const { f_name, l_name, subject, email, city, number } = req.body;

  // Insert data into the database
  const sql = 'INSERT INTO contact_us (`First_Name`, `Last_Name`, `Subject`, `EmailId`, `City`, `Contact`) VALUES (?, ?, ?, ?, ?, ?)';
  con.query(sql, [f_name, l_name, subject, email, city, number], (err, result) => {
    if (err) {
      console.error('Error inserting data into database:', err);
      res.status(500).json({ success: false, message: 'Error inserting data into database' });
      return;
    }
    console.log('Data inserted successfully');
    res.status(200).json({ success: true, message: 'Data inserted successfully' });
  });
});


app.listen(8089, () => {
  console.log("Listening on port 8089");
});
