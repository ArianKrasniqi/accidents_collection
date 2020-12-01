const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const mongoose = require("mongoose");
const connect = mongoose.connect('mongodb+srv://ArianKrasniqi:ariani123@accidents.uq92a.mongodb.net/Accidents?retryWrites=true&w=majority',
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/accident', require('./routes/accident'));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("admin/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../admin", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
});