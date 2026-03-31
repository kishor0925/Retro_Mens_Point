const express = require('express');
const cors = require('cors');
const PORT = 5444;
const { connectDB } = require('./config/db');
const productRoutes = require('./routes/productRoutes')
const app = express()

app.use(express.json());
app.use(cors());

app.use('/' , productRoutes)

connectDB()
app.listen(PORT, () => {
  console.log('I m in Port ');
});

