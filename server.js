const express = require("express");
const bodyParser = require("body-parser");
const compression = require('compression');
const path = require('path')

const app = express();

// Specify the port.
var port = process.env.PORT || 8080;
//support gzip
app.use(compression());

//body parser for routes our app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.set('port', port);

const router = require('express').Router();

router.get("/", function(req, res) {
    res.statusCode = 200;
    res.sendFile(path.resolve(__dirname, 'thankyou.html'))
})

router.post('/', function(req, res) {
    console.log({ req: req.body, params: req.query })
    if (req.query && req.query.status.toLowerCase() == 'error') {
        res.statusCode = 400
        res.sendFile(path.resolve(__dirname, 'error.html'))
    } else {
        res.statusCode = 200;
        res.sendFile(path.resolve(__dirname, 'thankyou.html'))
    }
})

app.use("/", router);

// Listen on port 3000 or assigned port
const server = app.listen(app.get('port'), function() {
    console.log(`Did you hear that noise R2-${app.get('port')}?`);
});