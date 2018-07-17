const express = require("express");
const bodyParser = require("body-parser");
const compression = require('compression');
const path = require('path')
const hbs = require('hbs')
const cors = require('cors')
const fetch = require('node-fetch')
const ipaddr = require('ipaddr.js')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

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

router.post('/api', function(req, res) {
    const {data} = req.body
    if (!data) {
        res.statusCode = 400
        return res.send({error: "Bad Request - Your request is missing parameters. Please verify and resubmit."})
    }
    console.log({reqHeaders: req.headers})
    let ClientIP;
    data.APIAccessID = process.env.alpha
    data.UrlReferer = req.headers['referer']
    data.ClientBrowser = req.headers['user-agent']
    if (req.headers['x-forwarded-for'] && req.headers['x-forwarded-for'].split(',')[0]) {
        ClientIP = req.headers['x-forwarded-for'].split(',')[0]
    }
    if (!ClientIP && req.connection.remoteAddress) {
        const parsed = ipaddr.process(req.connection.remoteAddress)
        ClientIP = parsed.toString();
    }
    data.ClientIP =  ClientIP
    console.log({ClientIP})
    console.log({data})
    fetch('http://SecureGiving.cbn.local/api/contribution',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(data)
    }).then(function(response){
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            error.status = response.status
            throw error
        }
    }).then(function(response){
        return response.text()
    }).then(function(msg){
        res.send({msg})
    }).catch(function(error){
        res.statusCode = error.status
        res.send({error})
    })

})

app.use("/", router);

// Listen on port 3000 or assigned port
const server = app.listen(app.get('port'), function() {
    console.log(`Did you hear that noise R2-${app.get('port')}?`);
});