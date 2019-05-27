const express = require('express');
const connectDB = require('./config/DB');

const app = express();

//connect to Database
connectDB();

app.get('/', (req, res) => res.send('API running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server connected to port: ${PORT}`));
