const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB(); //Connect to the database

//Init Middleware
app.use(express.json({extended: false}))

app.get('/', (req, res) => res.json({msg: "Welcom to this app"}));

//Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
