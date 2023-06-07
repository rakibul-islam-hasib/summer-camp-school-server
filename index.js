const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// SET TOKEN .

app.post('/api/set-token' , (req , res)=> { 
    const user  = req.body; 
    const token = jwt.sign(user, process.env.ACCESS_SECRET, { expiresIn: '12h' })
    res.send({ token })
})



app.get('/', (req, res) => {
    res.send('SOUND SAFARI SERVER IS RUNNING');
})


// Listen
app.listen(port ,()=> { 
    console.log(`SERVER IS RUNNING ON PORT ${port}`);
})