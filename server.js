// Dependencies
const mongoose = require("mongoose");
const path = require("path")
const expresshandlebars = require("express-handlebars")
const express = require('express')
const app = express()
const port = 5200
const bodyParser = require("body-parser")

// ======setting parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

// ===== Express Handle bars
app.engine('.hbs', expresshandlebars({
    defaultLayout: 'layout',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')
app.use(express.static(path.join(__dirname, 'public')))


// Database connections
mongoose.Promise = global.Promise;
const MONGO_URL = require("./config/db").MONGOURL;
mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(`Database Connection failed ${err.message}`));


// routes grouping
app.use('/', require('./routes/index'))
app.use('/', require('./routes/registerRoute'))
app.use('/', require('./routes/reportRoute'))


// configuring port
app.listen(port, ()=>{
    console.log(`Server is listening at port ${port}`)
});
