const express = require('express')
const path = require('path')
const rateLimit = require('express-rate-limit')
const bodyParser = require('body-parser');

const routes = require('./routes/index')

const app = express()

const messageLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 20,
    message: "Attempts limited to 20 per 15 minutes per IP address."
})

app.use('/messagebox', messageLimiter)
app.use(express.static(__dirname + '/public/'));

const port = process.env.PORT || 8080

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
app.use("/", routes)

app.set('trust proxy')
app.set('port', port)

app.listen(port, () => {
    console.log('Server listening on port ' + port)
})

module.exports = { app, path }