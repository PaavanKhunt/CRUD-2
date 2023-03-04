const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;
const Routes = require('./routes/routes.js');

const app = express();

// const URL = `mongodb+srv://demouser:demo123@cluster0.zivy5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const URL = `mongodb://127.0.0.1:27017/myFirstDatabase?retryWrites=true&w=majority`;

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Database connected successfully!`))
  .catch((error) => console.log(`${error} did not connect`));

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);
