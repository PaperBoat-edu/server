const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://mongodb:27017/paperboat-edu', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB: ', error);
});;

app.get('/', (req, res) => {
  res.send('Hello, server is running!!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
