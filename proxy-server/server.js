const express = require("express");
const bodyParser = require("body-parser");
const compression = require('compression');
const path = require('path');
const hbs = require('hbs');
const cors = require('cors');
const fetch = require('node-fetch');
const ipaddr = require('ipaddr.js');
const multer = require('multer');
const upload = multer();
const fs = require('fs');

process.title = "ProxyServer"

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
// parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// for parsing multipart/form-data
app.use(upload.array()); 
app.set('port', port);

const router = require('express').Router();

router.get("/", (req, res) => {
    res.statusCode = 200;
    res.render(path.resolve(__dirname, 'views', 'thankyou.hbs'), {})
})

router.post('/thankyou', (req, res) => {
    const {body, query} = req;
    console.log({ thankYou: true, body, query })
    if (query && query.status && query.status.toLowerCase() == 'error') {
        res.statusCode = 400
        res.sendFile(path.resolve(__dirname, 'views', 'error.html'))
    } else {
        res.statusCode = 200;
        res.render(path.resolve(__dirname, 'views', 'thankyou.hbs'), body)
    }
})

router.get('/config/:filename', (req, res) => {
    const {filename} = req.params;
    const files = fs.readdirSync(path.resolve(__dirname, "config"))
    if (filename && files.indexOf(filename) > -1) {
        res.sendFile(path.resolve(__dirname, "config", filename))
    } else {
        const error = new Error();
        error.resposne = `File (${filename}) not found.`;
        error.status = 404;
        res.statusCode = error.status;
        res.send({error})
    }
})

router.get('/globals', (req, res) => {
    const api = process.env.franco;
    fetch(api).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            error.status = response.status
            throw error
        }
    })
    .then(response=>response.json())
    .then(json=>{
        res.json(json)
    })
    .catch(error=>{
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error(error.response.status);
            console.error(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.error(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error', error.message);
        }
        console.error({error})
        res.statusCode = 500
        res.json(error)
    })
})

router.post('/api', (req, res) => {
    const {data} = req.body
    if (!data) {
        res.statusCode = 400
        return res.send({error: "Bad Request - Your request is missing parameters. Please verify and resubmit."})
    }
    console.log("________ NEW POST TO API __________");
    console.log({reqHeaders: req.headers});
    console.log(JSON.stringify(data, null, 5));
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
    const mode = data.mode;
    delete data.mode;
    const api = process.env.epsilon
    fetch(api,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            error.status = response.status
            throw error
        }
    })
    .then(response => response.text())
    .then(msg => res.send({msg}))
    .catch(error => {
        res.statusCode = error.status
        res.send({error})
    })

})

app.use("/", router);

// Listen on port 3000 or assigned port
const server = app.listen(app.get('port'), () =>  console.log(`Did you hear that noise R2-${app.get('port')}?`));


const gracefulShutdown = () => {
    console.log("Received kill signal, shutting down gracefully.");
    server.close(() => {
      console.log("Closed out remaining connections.");
      process.exit(1)
    });
    
     // if after 
     setTimeout(function() {
         console.error("Could not close connections in time, forcefully shutting down");
         process.exit(1)
    }, 10*1000);
}
  
  // listen for TERM signal .e.g. kill 
process.on ('SIGTERM', gracefulShutdown);

// listen for INT signal e.g. Ctrl-C
process.on ('SIGINT', gracefulShutdown);   


process.on('unhandledRejection', reason => {
    if (reason) {
        console.error({Error:reason})
    }
    process.exit(1);
});