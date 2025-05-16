const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));


// Middleware
app.use(bodyParser.json());

// Fake user authentication (replace with real database check)
const users = [
    { email: 'user@example.com', password: 'password123' }
  ];
  
  app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      // Generate a JWT token
      const token = jwt.sign({ email }, 'secretKey', { expiresIn: '1h' });
      res.json({ message: 'Login successful', token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Server listen
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
