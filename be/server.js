require('dotenv').config();
const express = require('express');
const cors = require('cors');
const projectRoutes = require('./src/routers/projectRoutes');

const app = express();
const PORT = process.env.PORT || 2109;

app.use(cors());
app.use(express.json());

app.use('/', projectRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
