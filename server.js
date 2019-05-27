const express = require('express');
const connectDB = require('./config/DB');

const app = express();

//connect to Database
connectDB();

app.get('/', (req, res) => res.send('API running'));

//define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/messages', require('./routes/api/messages'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server connected to port: ${PORT}`));
