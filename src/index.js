require('dotenv').config();

const { PORT } = require('./config');
const express = require('express');
const app = express();
const cors = require('cors');
const { authValidationMiddleware } = require('./middlewares/authValidation');

app.use(cors());
app.use(express.json());
app.use(authValidationMiddleware());

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);


app.listen(PORT, () => {
  console.log(`hello visit http://localhost:${PORT}`);
});