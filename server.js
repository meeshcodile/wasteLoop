// Dependencies
const path = require("path")
const expresshandlebars = require("express-handlebars")
const express = require('express')
const app = express()
const port = 5000;


// ===== Express Handle bars
app.engine('.hbs', expresshandlebars({
    defaultLayout: 'layout',
    extname: '.hbs'
}))

app.set('view engine', '.hbs')
app.use(express.static(path.join(__dirname, 'public')))


// routes grouping
app.use('/', require('./routes/index'))

// configuring port
app.listen(port, ()=>{
    console.log(`Server is listening at port ${port}`)
});
