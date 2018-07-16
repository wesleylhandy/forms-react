const express = require("express");
const bodyParser = require("body-parser");
const compression = require('compression');
const path = require('path')
const hbs = require('hbs')
const cors = require('cors')

const app = express();

app.use(cors());

app.set('view engine', 'hbs');

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
    res.render(path.resolve(__dirname, 'views', 'thankyou.hbs'), {})
})

router.post('/', function(req, res) {
    const {body, query} = req;
    console.log({ body, query })
    if (query && query.status.toLowerCase() == 'error') {
        res.statusCode = 400
        res.sendFile(path.resolve(__dirname, 'views', 'error.html'))
    } else {
        res.statusCode = 200;
        res.render(path.resolve(__dirname, 'views', 'thankyou.hbs'), body)
    }
})

router.get('/config/:filename', function(req, res){
    const {filename} = req.params;
    res.sendFile(path.resolve(__dirname, "config", filename))
})

app.use("/", router);

// Listen on port 3000 or assigned port
const server = app.listen(app.get('port'), function() {
    console.log(`Did you hear that noise R2-${app.get('port')}?`);
});