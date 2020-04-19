const express = require('express');
const connectDB = require('./config/db');
const app = express();

const SERVER_CONFIGS = require('./routes/constants/server');
const configureServer = require('./routes/constants/server');
const configureRoutes = require('./routes/api//payment');
configureServer(app);
configureRoutes(app);


//Connect Database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send("API is running"));

//Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/post', require('./routes/api/post'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => 
console.log(`Server started on port ${PORT}`));