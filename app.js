const express = require('express');

const app = express();

app.use(express.static(__dirname)); 
app.use(express.urlencoded({ extended: true })); 

app.post('/register', (req, res) => {
  console.log('Form Data Received:');
  console.log(req.body);
  res.send('Registration received. Thank you!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
