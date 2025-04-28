const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('./routes/auth');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); 
app.get('/', (req, res) => {
  res.send('Server is working correctly');
});

app.get('/reworkedform', (req,res)=>{
  
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});