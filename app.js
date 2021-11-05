const express = require("express")
const router = express.Router();
const app = express();
const port = 3000;
const path = require("path");

// app.use(router);

//set the view engine

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');
// function randomNum (min, max) {
//     return Math.random() * (max - min) + min;
// }

app.get('/', function (req, res) {
    res.render('index')
})

app.listen(port, () => console.log(`Template engine listening on port ${port}`))