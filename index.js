const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes

app.get('/', (req, res) => {
    res.send('SOUND SAFARI SERVER IS RUNNING');
})


// Listen
app.listen(port ,()=> { 
    console.log(`SERVER IS RUNNING ON PORT ${port}`);
})