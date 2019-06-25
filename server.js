const express = require('express');
const connectDB = require('./config/DB');

const app = express();

//connect to Database
connectDB();

//init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

//define routes
app.use('/api/accounts', require('./routes/api/accounts'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/shops', require('./routes/api/shops'));
app.use('/api/shapers', require('./routes/api/shapers'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/messages', require('./routes/api/messages'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server connected to port: ${PORT}`));
