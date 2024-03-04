const express = require('express');
const cors = require('cors');
const config = require('./utils/config');
const authRoutes = require('./routes/authRoutes');
require('./services/passport');

// Configure Express Server
const app = express();
// Handle Request Body
app.use(express.json());
// Handle CORS
app.use(cors());

// Handle Routes
app.use('/auth/google', authRoutes);

// Start Server
app.listen(config.SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${config.SERVER_PORT}`);
});
