const express = require ('express');

const app= express();


app.get('/', (req, res) => res.json({msg:"Welcom to this app"}));


app.use('/api/users', require('./routs/users'));
app.use('/api/contacts', require('./routs/contacts'));
app.use('/api/auth', require('./routs/auth'));



const PORT = process.env.PORT || 5000;
app.listen( PORT, ()=> console.log(`http://localhost:${PORT}`));

