const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const path = require("path");
const hbs = require("hbs");
const cors = require("cors");
const fetch = require("node-fetch");
const ipaddr = require("ipaddr.js");
const multer = require("multer");
const upload = multer();
const fs = require("fs");

process.title = "ProxyServer";

if (process.env.NODE_ENV !== "production") {
	require("dotenv").load();
}

const app = express();

app.use(cors());

app.set("view engine", "hbs");

// Specify the port.
var port = process.env.DEV_SERVER_PORT || 8080;
//support gzip
app.use(compression());

//body parser for routes our app
app.use(bodyParser.json());
// parsing application/json
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// for parsing multipart/form-data
app.use(upload.array());
app.set("port", port);

const router = require("express").Router();

router.options("*", cors());

router.get("/", (req, res) => {
	res.statusCode = 200;
	res.render(path.resolve(__dirname, "views", "thankyou.hbs"), {});
});

router.get("/build", (req, res) => {
	res.statusCode = 200;
	res.sendFile(path.resolve(__dirname, "views", "build.html"));
});

router.get("/build/:filename", (req, res) => {
	const { filename } = req.params;
	console.log({ filename });
	const pth = path.resolve(
		__dirname,
		"../",
		"dist",
		"v1",
		filename.includes("index") ? "index" : "",
		filename
	);
	console.log({ pathToFile: pth });
	const filenames = [
		"index.js",
		"index.css",
		...fs.readdirSync(path.resolve(__dirname, "../", "dist", "v1")),
	];
	if (filenames.indexOf(filename) < 0) {
		res.sendStatus(404);
	} else {
		res.statusCode = 200;
		res.sendFile(pth);
	}
});

router.post("/thankyou", (req, res) => {
	const { body, query } = req;
	console.log({ thankYou: true, body, query });
	if (query && query.status && query.status.toLowerCase() == "error") {
		res.statusCode = 400;
		res.sendFile(path.resolve(__dirname, "views", "error.html"));
	} else {
		res.statusCode = 200;
		res.render(path.resolve(__dirname, "views", "thankyou.hbs"), body);
	}
});

router.get("/config/:filename", (req, res) => {
	const { filename } = req.params;
	const files = fs.readdirSync(path.resolve(__dirname, "config"));
	if (filename && files.indexOf(filename) > -1) {
		res.sendFile(path.resolve(__dirname, "config", filename));
	} else {
		const error = new Error();
		error.resposne = `File (${filename}) not found.`;
		error.status = 404;
		res.statusCode = error.status;
		res.send({ error });
	}
});

router.get("/globals", (req, res) => {
	const api = process.env.GLOBAL_JSON_URL;
	fetch(api)
		.then(response => {
			if (response.status >= 200 && response.status < 300) {
				return response;
			} else {
				var error = new Error(response.statusText);
				error.response = response;
				error.status = response.status;
				throw error;
			}
		})
		.then(response => response.json())
		.then(json => {
			res.json(json);
		})
		.catch(error => {
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
				console.error("Error", error.message);
			}
			console.error({ error });
			res.statusCode = 500;
			res.json(error);
		});
});

router.get("/giving", (req, res) => {
	res.statusCode = 403;
	res.json({ Error: "Not for Snooping Eyes" });
});

const processGift = (req, res) => {
	const data = { ...req.body };
	if (!data) {
		res.statusCode = 400;
		return res.send({
			error:
				"Bad Request - Your request is missing parameters. Please verify and resubmit.",
		});
	}
	console.log("________ NEW POST TO API __________");
	console.log({ reqHeaders: req.headers });

	let ClientIP;
	data.APIAccessID = process.env.GIVING_SERVICES_API_KEY;
	if (
		req.headers["x-forwarded-for"] &&
		req.headers["x-forwarded-for"].split(",")[0]
	) {
		ClientIP = req.headers["x-forwarded-for"].split(",")[0];
	}
	if (!ClientIP && req.connection.remoteAddress) {
		const parsed = ipaddr.process(req.connection.remoteAddress);
		ClientIP = parsed.toString();
	}
	data.ClientIP = ClientIP;
	console.log({ ClientIP });
	console.log(JSON.stringify(data, null, 5));
	const mode = data.mode;
	delete data.mode;
	const api = process.env.GIVING_SERVICES_DEV_API;
	console.log({ api });
	callApi(api, {
		method: "POST",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
		body: JSON.stringify(data),
	})
		.then(msg => res.send(msg))
		.catch(error => {
			console.error({ BeforeResSentErr: JSON.stringify(error, null, 2) });
			res.statusCode = error.status;
			res.send(error.body);
		});
};

router.post("/giving", processGift);
router.post("/club", processGift);

router.get("/signup", (req, res) => {
	res.statusCode = 403;
	res.json({ Error: "Not for Snooping Eyes" });
});

router.post("/signup", async (req, res) => {
	const data = { ...req.body };
	if (!data) {
		res.statusCode = 400;
		return res.send({
			error:
				"Bad Request - Your request is missing parameters. Please verify and resubmit.",
		});
	}
	console.log("________ NEW POST TO SIGNUP API __________");
	console.log({ reqHeaders: req.headers });
	let CBN_HTTP_X_FORWARDED_FOR;
	const ApiKey = process.env.CONTACT_API_KEY;
	if (
		req.headers["x-forwarded-for"] &&
		req.headers["x-forwarded-for"].split(",")[0]
	) {
		CBN_HTTP_X_FORWARDED_FOR = req.headers["x-forwarded-for"].split(",")[0];
	}
	if (!CBN_HTTP_X_FORWARDED_FOR && req.connection.remoteAddress) {
		const parsed = ipaddr.process(req.connection.remoteAddress);
		CBN_HTTP_X_FORWARDED_FOR = parsed.toString();
	}
	console.log({ CBN_HTTP_X_FORWARDED_FOR });
	const { mode, contactAPI } = data;
	const endpoints = {
		feedback: `${
			mode == "production"
				? "https://services.cbn.com/contacts/api/"
				: "http://services.cbn.local/contacts/api/"
		}feedback.aspx`,
		activity: `${
			mode == "production"
				? "https://services.cbn.com/contacts/api/"
				: "http://services.cbn.local/contacts/api/"
		}activity.aspx`,
		newsletters: `${
			mode == "production"
				? "https://services.cbn.com/contacts/api/"
				: "http://services.cbn.local/contacts/api/"
		}newsletters.aspx`,
	};
	const cheerio = require("cheerio");
	const { type, headers } = contactAPI;

	const endpoint = endpoints[type];
	headers.ApiKey = ApiKey;
	headers.CBN_HTTP_X_FORWARDED_FOR = CBN_HTTP_X_FORWARDED_FOR;
	console.log({ endpoint, headers });
	try {
		const msg = await callApi(endpoint, {
			method: "GET",
			headers,
		});
		const $ = cheerio.load(msg, { xmlMode: true });
		if ($("returnCode").text() == "SUCCESS") {
			res.send(msg);
		} else {
			console.log({msg})
			const error = $("returnCode").text();
			throw error;
		}
	} catch (err) {
		console.error({ BeforeResSentErr: JSON.stringify(err, null, 2) });
		res.statusCode = err.status || 400;
		return res.json(err);
	}

});

router.get("/product", (req, res) => {
	res.statusCode = 403;
	res.json({ Error: "Not for Snooping Eyes" });
});

router.post("/product", (req, res) => {
	const data = { ...req.body };
	if (!data) {
		res.statusCode = 400;
		return res.send({
			error:
				"Bad Request - Your request is missing parameters. Please verify and resubmit.",
		});
	}
	console.log("________ NEW POST TO PRODUCT API __________");
	console.log({ reqHeaders: req.headers });
});

async function callApi(uri, options = {}) {
	let data;
	try {
		data = await loadData(uri, options);
		return data;
	} catch ({ body, status }) {
		console.log({ body, status });
		const error = new Error(body);
		error.status = status;
		error.body = body;
		console.error({ callApiFetchErr: error });
		throw error;
	}
}

async function loadData(uri, options = {}) {
	let response = await fetch(uri, options);
	const contentType = response.headers.get("content-type");
	const { status } = response;
	console.log({ status, contentType });
	if (status >= 200 && status < 300) {
		if (contentType && contentType.includes("application/json")) {
			return response.json();
		} else {
			return response.text();
		}
	} else {
		return getErrorBody(response, contentType).then(body => {
			return Promise.reject({
				body,
				status,
			});
		});
	}
}

async function getErrorBody(response, contentType = "text") {
	let body;
	if (contentType.includes("application/json")) {
		body = await response.json();
	} else {
		body = await response.text();
	}
	return body;
}

function storeKeys({ key, encrypted, expiration }) {
	console.log("Store Keys");
	const fileName = path.resolve(__dirname, "config", "cookies.json");
	console.log({ fileName });
	// console.log({key, encrypted, expiration})
	if (!fs.existsSync(fileName)) {
		fs.writeFileSync(
			fileName,
			JSON.stringify([{ key, encrypted, expiration }])
		);
	} else {
		fs.readFile(fileName, "utf-8", (err, data) => {
			if (err) console.error({ err });
			console.log({ data });
			let arr = data ? JSON.parse(data) : [];
			console.log({ arr });
			arr.push({ key, encrypted, expiration });

			fs.writeFileSync(fileName, JSON.stringify(arr));
		});
	}
}

function getKeys(encrypted = {}, now = 0, cb) {
	console.log("Get Keys");
	const fileName = path.resolve(__dirname, "config", "cookies.json");
	console.log({ fileName });
	fs.readFile(fileName, "utf-8", (err, data) => {
		if (err) cb(err, null);
		const arr = JSON.parse(data);
		if (arr && arr.length) {
			const found = arr.find(obj => obj.encrypted === encrypted);
			console.log({ found });
			cb(null, found && found.expiration > now ? found : {});
		} else {
			cb(null, {});
		}
	});
}

app.use("/", router);

// Listen on port 3000 or assigned port
const server = app.listen(app.get("port"), () =>
	console.log(`Did you hear that noise R2-${app.get("port")}?`)
);

const gracefulShutdown = () => {
	console.log("Received kill signal, shutting down gracefully.");
	server.close(() => {
		console.log("Closed out remaining connections.");
		process.exit(0);
	});

	// if after
	setTimeout(function() {
		console.error(
			"Could not close connections in time, forcefully shutting down"
		);
		process.exit(1);
	}, 10 * 1000);
};

// listen for TERM signal .e.g. kill
process.on("SIGTERM", gracefulShutdown);

// listen for INT signal e.g. Ctrl-C
process.on("SIGINT", gracefulShutdown);

process.on("unhandledRejection", reason => {
	if (reason) {
		console.error({ Error: reason });
	}
	process.exit(1);
});
