# Configurable React Form to Handle CBN Form Apis

This project is being designed for use by the Digital Media Group at CBN, Inc. Once built, the resulting `JavaScript` files should be uploaded to the `VBMDEAPP7112` server at the following location: `/Sites/pre.vb.cbn.local/noindex/forms/react-drupal/`. When loaded on a page, this allows developers to configure up to three different forms on a single page - a `giving` form via the Giving Services API, a `signup` form via the various Contacts APIs, and a `product` form, which will also use the Giving Services API. The `product` form is still in development. The goal is to be able to move several landing and giving pages into the Drupal environment and to enable producers to quickly and rather easily create forms they need for various projects.

## Installation && Running In Development

[`parceljs`](https://parceljs.org/) is required for simple transpiling of `jsx`, `es6`+, and  `emotion`, and for code-splitting, to keep the initial bundle size to a minimum. For consistency, the necessary bundler version is a dev dependency of this repo. The application includes a development `Node.js` server, is built using [`React`](https://reactjs.org/) and Styled Components, via [`Emotion.js`](https://emotion.sh/docs/introduction).

1. Clone Repo

```bash
git clone https://wlhcbn@bitbucket.org/wlhcbn/react-form-drupal.git
```

2. Install Dependencies - with preference to [`Yarn`](https://yarnpkg.com/en/) over NPM

```bash
yarn
# or yarn install, or if you must, npm install
```

3. Set up Environment Variables

```bash
cd react-form-drupal
touch .env
```

You will need the following variables defined:

```
CONTACT_API_KEY=
DEV_SERVER_IP=
DEV_SERVER_PORT=8080
GIVING_SERVICES_API_KEY=
GIVING_SERVICES_DEV_API="http://givingservices.cbn.local/api/contribution"
GLOBAL_JSON_URL="http://securegiving.cbn.local/ui/globals/form-config.json"
```

You need to know the network IP address for your development machine. And by default, the development proxy server will run on port 8080.

Obtain the Contact API Key from the documentation for the Contacts API or contact Mike Rose.

Obtain the Giving Services API Key from Shanthi Catlin. One API Key is issues per domain. The domain will refer to the URL Referer of the page calling the dev proxy server. By default, `Parcel` serves the client on port 1234. So an example domain would be `http://<yourdevnetworkip>:1234/index.html`. A new API Key must be established for each production domain. Moreover, for each new page that hosts a giving form, the individual page must be registered under that API Key.


4. Run Development Server, need two open Terminal windows:

In terminal one, to start development server:

```bash
yarn start:proxy
```

In terminal two, start the client development server:

```bash
yarn start
```

5. Open your browser to view the site on `http://<yourdevnetworkip>:1234/index.html`. 

6. To see changes in the form, tweak the form configuration file found at `./proxy-server/config/formconfig.json` and refresh the browser.

## Local Testing

Tests can be created within the `./__tests__` folder. Import necessary functions and components within a new `.js` file within this folder named after the primary function or component being tested. 

To run tests, from the root directory, run the following script:

```bash
yarn test
# or yarn test:watch to re-run tests as new tests are added
```

## Project Structure

The development server, for testing the forms, is with the `./proxy-server` folder. The `React` client source-code can be found in the `./src` folder. Builds are stored within `./dist`. When the client development server runs, cached content is stored in `./dev/dist`. The development client server also creates the `./.cache` folder. If you have unexpected errors in development, it sometimes helps to clear cache: `rm -rf .cache`

```
root
| - .cache
| - dev
| - dist
| - proxy-server
| - src
```

Also within the root directory are the `babel` and `prettier` configuration files, as well as `index.html` which is the root file from which the `React` client is build, and which is served by the client server. Use this file to include the root entry `div`s used by the `React` application.

```html
<div
    id="giving-form-root"
    data-environment="local"
    data-form-name="giving"
    data-rest=""
    data-initial-state="{}"
></div>
<div
    id="signup-form-root"
    data-environment="local"
    data-form-name="signup"
    data-rest=""
    data-initial-state="{}"
></div>
<div
    id="product-form-root"
    data-environment="local"
    data-form-name="signup"
    data-rest=""
    data-initial-state="{}"
></div>
```

Note the data attributes for each of the three different form types: `data-environment`, `data-form-name`, `data-rest`, and `data-initial-state`. In production, each of these should be filled by scripts to initialize a given form.

 - `data-environment`
 
    This refers to the tech stack behind the page. Local refers to a development machine, `Drupal` refers to a staging or development Drupal environment.

 - `data-form-name` 
 
    This is used primarily to distinguish one giving form from another and will be a unique identifier for that form.

 - `data-rest` 
 
    This should be the endpoint, relative or absolute, for the location of the production proxy server. The development server location is provided by environment variables.

 - `data-initial-state` 
 
    The development server serves a `JSON`-encoded configuration file. In production, a script should be used to fill this with a `JSON`-encoded string.

**Client Structure**

```
src
| - index.js
| - vendors.js
| - Components
    | - App.js
    | - Contexts
    | - FormComponents
    | - Forms
    | - StyledComponents
    | - SuccessPages
```

Within the `src` directory are two main files. `index.js` is the entry point for the `React` application. `vendors.js` uses dynamic imports to split off imported `node_modules` from the main bundle. 

Then, within `Components`, there are multiples files and directories. I only list `App.js` since this is the application that is rendered by `index.js` previously mentioned. The `Contexts` folders includes four React Context API initializations used by multiple forms this app produces. All the forms can be found in the `Forms` directory, including `FormRouter.js` which renders the appropriate form based on configuration and `Context`. 

The other folders are self explanatory. Though note there are two `StyledComponents` directories, one with the `Components` folder, the other within the `FormComponents` folder. They are simply `UI` related components and include only style related logic, if any.

## Building For Production

To create a new build, be sure all tests are passing, be sure to have tested the output in the browser, then run:

```bash
yarn build
```

This will run `prettier` on all `.js` and `.css` files. Then run tests. After the tests, the build will commence, and post build the primary filename in the `./dist` folder will be changed from `index.js` to `form.js`. Push new builds to `VBMDEAPP7112/Sites/pre.vb.cbn.local/noindex/forms/react-drupal/`.

### Project Setup

The current build of the project will be live at http://www.cbn.com/noindex/forms/react-drupal/form.js. This file can be imported as a `<script>` into any html page. The application will look for three different `<div>`s within the html to render the various forms:

```html
<div
    id="<form-type>-root"
    data-environment="Drupal"
    data-form-name="<some-unique-identifier-related-to-a-campaign>"
    data-rest=""
    data-initial-state="{}"
></div>
```

 - There can be one such `div` for each `form-type` with an id of either `giving-form-root`, `signup-form-root`, or `product-form-root`. 

 - This particular form is assuming a `Drupal` `environment` value, though it can be extended as necessary. 

 - The `form-name` should be some string uniquely related to this form, such as `CBNCleanWaterProjects`, or `CBNWellsSponsorship`. I find it best practice to either `camelCase` or `snake_case` the value of the `form-name`, ie. no spaces, since this may be a data-key used later by the proxy to serve email data.

 - The `rest` value should be the location of the proxy api where the form will try to submit itself securely to the various apis, such as "/some/path/to/proxy.php". This way, none of the API keys will be exposed.

 - The `initial-state` should be a `JSON`-encoded string. That is, with appropriate double-quotes around keys and values, fully escaped with backslashes: `{\"key\":\"value\"}`. The state will vary from form to form. Below are two example configurations (unescaped):

**GIVING FORM**

*Note: Product Form will look very similar once it the feature is completed.*

```json
{
    "mode": "development",
    "formType": "giving",
    "formTitle": "Please Give Generously Towards This Vital Cause",
    "submitButtonText": "Continue to Payment",
    "givingFormat": "buttons",
    "getHonorific": true,
    "getMiddleName": false,
    "getSuffix": false,
    "getSpouseInfo": false,
    "getShippingAddress": true,
    "allowInternational": true,
    "getPhone": true,
    "numProducts": 0,
    "products": [],
    "numDesignations": 0,
    "designations": [],
    "subscriptions": [{
        "value": "Superbook",
        "key": "NewsletterSubs"
    }, {
        "value": "Welcome",
        "key": "NewsletterUnSubs"
    }, {
        "value": "CBN",
        "key": "MarketingUnSubs"
    }],
    "additionalGift": {
        "display": false,
        "additionalGiftMessage": "Please consider giving an additional gift to support the ministries of CBN",
        "DetailDescription": "Superbook Donation",
        "DetailCprojCredit": "043258",
        "DetailCprojMail": "043259",
        "DetailName": "SGSuperbook"
    },
    "showGivingArray": true,
    "monthlyOption": true,
    "singleOption": true,
    "monthlyAmounts": [3, 7, 15, 30, 50],
    "singleAmounts": [25, 50, 100, 250, 300],
    "defaultOption": "single",
    "defaultAmount": 50,
    "addGivingDescription": false,
    "monthlyPledgeData": {
        "DetailCprojCredit": "043250",
        "DetailCprojMail": "043251",
        "DetailName": "MPSuperbook",
        "DetailDescription": "Superbook Pledge"
    },
    "singlePledgeData": {
        "DetailCprojCredit": "043250",
        "DetailCprojMail": "043251",
        "DetailName": "SGSuperbook",
        "DetailDescription": "Superbook Donation"
    },
    "AddContactYN": "Y",
    "ContactSource": "Superbook General Donor",
    "ActivityName": "Giving - Superbook - <ThisFormName>",
    "SectionName": "Superbook",
    "proxy": "USED_IN_LOCAL_DEVELOPMENT",
    "successMessage":"<h1>Thank You</h1>"
  }
```

**SIGNUP FORM**

```json
{
    "mode": "development",
    "formType": "signup",
    "formTitle": "Download Your Free Resource Today",
    "submitButtonText": "Submit",
    "getName": true,
    "getHonorific": false,
    "getMiddleName": false,
    "getSuffix": false,
    "getSpouseInfo": false,
    "getAddress":false,
    "allowInternational": false,
    "proxy": "USED_IN_LOCAL_DEVELOPMENT",
    "contactAPI": [
        {
            "call": false,
            "type": "newsletters",
            "headers": {
                "SubscriptionCode": "israel",
                "Subscribe": true,
                "UnsubscribeMarketingForNewContacts": true,
                "InceptionSource": "Subscribe - Israel Cause Page - Israel Newsletter",
                "ActivityCode": "Subscribe - Israel Cause Page - Israel Newsletter"
            }
        }, {
            "call": true,
            "type": "feedback",
            "headers": {
                "FeedbackType": "Item Request",
                "Topic": "Islam Booklet",
                "FormUrl": "",
                "InceptionSource": "Request Resource - Islam Booklet - Download",
                "ActivityCode": "Request Resource - Islam Booklet - Download",
                "Message": "--empty--"
            }
        }, {
            "call": false,
            "type": "activity",
            "headers": {
                "Activity": "Feedback - Sign Up - Protect The Unborn Petition",
                "Topic": "Islam Booklet Download",
                "MarketingSubscribes": "CBN",
                "Campaign":"",
                "Location":"",
                "UpdateExisting":true,
                "InceptionSource": "Feedback - Sign Up - Protect The Unborn Petition"
            }
        }
    ],
    "successMessage":"<h1>Thank You</h1>"
}
```

### Production Proxy Server Needed

The Client is expecting to Receive RESTful responses from the proxy.

Here an example of how I handled it via `Node` and `Express`, so you can create a like service using the language/framework of your particular environment.

**GIVING API PROXY**

##### Node/Express Example

1. I destructure the body of the request to the proxy into an object literal `const data = { ...req.body };`

2. I append the APIAccessID to the data object `data.APIAccessID = process.env.GIVING_SERVICES_API_KEY;`

3. I then grab the ClientIP from the request:

```javascript
let ClientIP
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
```

4. I then get the `mode` variable (“local”, “development”, or “production”), can be used to call either dev or prod version of API

```javascript
const mode = data.mode;
delete data.mode;
const apiUrl = mode == "production" ? process.env.GIVING_SERVICES_PROD_API : process.env.GIVING_SERVICES_DEV_API;
```

5. call api, using `fetch`, which I import into Node via `node-fetch`. I also have some helper functions for handling the response

*Helper Function*

```javascript
// main function, asychronously calls the api, loadData will be called which will separate errors from data
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

// makes the actual fetch call, looks at headers and status to parse response appropriately
// fetch doesn't catch errors, so you have to force a promise rejection
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

// return a consistent error message regardless of content type
async function getErrorBody(response, contentType = "text") {
	let body;
	if (contentType.includes("application/json")) {
		body = await response.json();
	} else {
		body = await response.text();
	}
	return body;
}
```

*Calling the API*

```javascript
callApi(api, {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: JSON.stringify(data),
})
.then(msg => res.send(msg))
.catch(error => {
  console.log({ BeforeResSentErr: JSON.stringify(error, null, 2) });
  res.statusCode = error.status;
  res.send(error.body);
});
```

*NOTE*: The `msg` sent back within `.then` is a single string. The Form is expecting to receive this string.

##### Wordpress / PHP Proxy Example

Below is an example function in Wordpress for proxying the Giving Form. Wordpress provides a request object `WP_REST_Request` that allows you to pull the body sent encoded as `application/json` into a PHP `array`, as well as a response object `WP_REST_Response` that takes in an `array` and converts into an `application/json` encoded string. Wordpress also provides access to an internal DB where configuration data is stored.

```php
public function proxy_data( \WP_REST_Request $request ) {
  // data is the request body
  $data = $request->get_json_params();
  // campaign is a key embedded into the request url as a unique identifier
  $campaign = ( string ) $request['campaign'];
  if ( is_null($data) || is_null($campaign)) {
      $response = new \WP_REST_Response( array( 'message' => "Bad Request - Your request is missing parameters. Please verify and resubmit.",
      "origin" => "Bad Request from App to Proxy" ) );
      $response->set_status( 400 );
      return $response;
  } else {
      // get the api key
      try {
          $table_name = $this->api_table;
          $api_key = $this->db->get_var( "SELECT api_key FROM $table_name LIMIT 1" ); 
          $data['APIAccessID'] = $api_key ? $api_key : '';
      } catch (Exception $err) {
          $response = $this->generate_error_response("", "DB Error - $err", 400, array( "data" => $api_key ) );
          return $response;
      }
      // get the IP address and determine which version of API to call - dev or prod
      try {
          $data['ClientIP'] = preg_replace( '/[^0-9a-f.:, ]/', '', $_SERVER['REMOTE_ADDR'] );
          $isLocal = preg_match( '/(cbn\.local)/', $data['UrlReferer'] ) == 1;
          $url_local = "http://securegiving.cbn.local/api/contribution";
          $url_secure = "https://securegiving.cbn.com/api/contribution";
          $url = ( $isLocal  ) ? $url_local : $url_secure;
          if ( isset( $data['mode'] ) ){
              unset( $data['mode'] );
          }
      } catch (Exception $err) {
          $response = $this->generate_error_response("", "Unknown Api Access Error - $err", 400, array( "data" => $data ) );
          return $response;
      }
      // Make Post request to Giving Services
      $proxy_response = wp_remote_post( $url, array(
          'method' => 'POST',
          'timeout' => 15,
          'headers' => array(                                                                          
              'Content-Type' => 'application/json',
              'Accept' => 'application/json'
          ),
          'body' => json_encode( $data )
      ));
      // Parse response from Giving Services API and send REST response
      if ($proxy_response) {
          try {
              $proxy_response_code = wp_remote_retrieve_response_code( $proxy_response );
              $proxy_response_body = wp_remote_retrieve_body( $proxy_response );
              // $proxy_response_message = wp_remote_retrieve_message ( $proxy_response );
              $proxy_response_headers = wp_remote_retrieve_headers( $proxy_response );
          } catch (Exception $err) {
              $response = $this->generate_error_response($url, "Unknown Api Access Error - $err", 400, array( "UrlReferer" => $data['UrlReferer'] ) );
              return $response;
          }
          if ( $proxy_response_code >= 200 and $proxy_response_code < 300 ) {
              $response = new \WP_REST_Response( $proxy_response_body );
              $response->set_status( 201 );
              return $response;
          } else {
              $error = $proxy_response_body ? $proxy_response_body : "Proxy Error";
              $proxy_response_code = $proxy_response_code ? $proxy_response_code : 500;
              $response = $this->generate_error_response(
                  $url, 
                  $error, 
                  $proxy_response_code, 
                  array( 
                      "UrlReferer" => $data['UrlReferer'], 
                      "RemoteHeaders" => $proxy_response_headers, 
                      "RemoteBody" => $proxy_response_body, 
                      "RemoteResponse" => json_encode( $proxy_response ) ) 
                  );
              return $response;
          }
      } else {
          $response = $this->generate_error_response($url, "API did not return a response", 400, array( "UrlReferer" => $data['UrlReferer'] ) );
          return $response;
      }
  }
}
// Error Response Boilerplate referenced above
public function generate_error_response($url, $error, $proxy_response_code, $additional_content) {
  error_log("$proxy_response_code - $error");
  $response_array = array_merge( array( "message" => $error, "origin" => "$url - $proxy_response_code - $error" ), $additional_content );
  $response = new \WP_REST_Response( $response_array );
  $response->set_status($proxy_response_code);
  return $response;
}
```

**CONTACTS API PROXY**

1. I destructure the body of the request into an object literal `const data = { ...req.body };`

2. I append the`ApiKey` to the data object `data.ApiKey = process.env.CONTACT_API_KEY;`; *Note* the variable name is `ApiKey` not `APIAccessID` since the Contacts API uses different parameters than the Giving API

3. I then grab the `CBN_HTTP_X_FORWARDED_FOR` header from the request, just like `ClientIP` above but with the different variable name

4. There could potentially be multiple API calls, such as for signing up for a newsletter and at the same time requesting a resource via the feedback api. So I pass an array of api calls to the proxy: `const contactAPI = [...data.contactAPI]`

5. Get the mode for determining the endpoint as either prod or dev:

```javascript
const mode = data.mode;
const endpoints = {
  "feedback": `${mode == "production" ? "https://services.cbn.com/contacts/api/" : "http://services.cbn.local/contacts/api/"}feedback.aspx`,
  "activity": `${mode == "production" ? "https://services.cbn.com/contacts/api/" : "http://services.cbn.local/contacts/api/"}activity.aspx`,
  "newsletters": `${mode == "production" ? "https://services.cbn.com/contacts/api/" : "http://services.cbn.local/contacts/api/"}newsletters.aspx`,
}
```

6. Loop through API calls and get responses (which will be XML and need to be parsed). `callAPI` is the same function, with it's helpers, described previously.

```javascript
let responses = []
contactAPI.forEach(async ({type, call, headers})=>{
  // call is setup in the config, whether or not to call this particular API or not
  if (call) { 
    // Contact API calls append all the appropriate data as headers, 
    // I pass data to this api via the headers object on each contactAPI 
    // and then append the key and forwarded for value
    const endpoint = endpoints[type]
    headers.ApiKey = ApiKey;
    headers.CBN_HTTP_X_FORWARDED_FOR = CBN_HTTP_X_FORWARDED_FOR
    try {
      const msg = await callApi(endpoint, {
        method: "GET",
        headers
      })
      // use cheerio to parse xml in node
      const $ = cheerio.load(msg, { xmlMode: true });
      const msg = $("returnCode").text()
      if ( msg == "SUCCESS") {
        responses.push(msg);
      } else {
        const error = {
          body: msg,
          status: 400,
        };
        // cause try to catch via Error
        throw new Error(error);
      }
    } catch(err) {
      console.error({ BeforeResSentErr: JSON.stringify(err, null, 2) });
      res.statusCode = error.status;
      return res.send(error.body);
    }
  }
})
res.send(responses)
```

### Email Server Also Needed

The Giving and Product Forms will require a unique url for serving html emails that will be sent to donors upon successful transactions. This endpoint should accept a `GET` request with the following parameters:

 - `form_name`

    To uniquely identify the form. This should be the same `formName` passed into the Form configuration `JSON`.

 - `type`

    Either `Monthly`, `Single` or `Product`. Note the capitalization, since the API will be sending these values to get the emails.

Within each email, certain server variables are available, such as `#FirstName#`. Contact Shanthi Catlin for a complete list of variables. Donation Summaries will be appended to the end of each email, so no closing `</body>` tag is necessary.

##### Wordpress / PHP example

```php
public function proxy_email( \WP_REST_Request $request ) {
    // This proxy uses the URL to pass the necessary parameters for handling the request
    $parameters = $request->get_query_params();
    $campaign = ( string ) $request['campaign'];
    // type will either be "Monthly", "Single", or "Product"
    $type = strtolower($parameters['type']);
    $completed = FALSE;
    $error = FALSE;
    // All email config are stored in WPDB
    $table_name = $this->config_table;
    $existing = $this->db->get_var( $this->db->prepare(
        "SELECT form_name
        FROM $table_name 
        WHERE form_name = %s",
        $campaign
    ) );
    if ($existing == $campaign) {
        $completed = $this->db->get_row( $this->db->prepare(
            "SELECT email_setup
            FROM $table_name 
            WHERE form_name = %s",
            $campaign
        ), ARRAY_A );
        if ( $completed === FALSE) {
            $error = "INVALID QUERY";
        } else {
            $form_segments = ( $completed != NULL ) ? $completed['email_setup'] : NULL;
            if ( $form_segments === NULL ) {
                $error = "No email configuration saved.";
            } else {
                $form_segments = json_decode($form_segments, TRUE);
            }
        }
    } else {
        $error = "No such form with the name of $campaign has been created.";
    }
    if ( !$error ) {
        $header = $form_segments['header'];
        $body = $form_segments[$type];
        $html_email = $header . $body;
    } else {
        $default_header = include $this->plugin_path . 'templates/email-template-header.php';
        $defatul_body = include $this->plugin_path . 'templates/email-template-body.php';
        $html_email = $default_header . $defatul_body;
    }
    
    header( 'Content-Type: text/html; charset=UTF-8' );

    echo $html_email;
    exit();
}
```

##### An Example Default Email in PHP

```php
<?php

return "<body><table width='553' border='0' align='center' cellpadding='0' cellspacing='5'><tr><td height='43' align='left' valign='top'><img src='http://www.cbn.com/images/CBN-header-email.gif' alt='CBN.com' width='553' height='41' /></td></tr><tr><td align='left' valign='top'><p>Dear #FirstName#,</p><p>Thank you for giving to CBN. It is with the help of friends like you that CBN is able to take  the Gospel to the nations - and people are hearing a message of hope in Jesus  Christ.&nbsp; Every day, through <em>The 700 Club</em>,  CBN News, and other CBN programs, the truth of God's Word is being broadcast to  precious people through satellite, terrestrial television, and cable, as well  as the Internet.</p><p>Thank you for your  help in making all of this possible. May God richly bless you for your  faithfulness to Him.</p><p>In Christ,<br /><img src='http://www.cbn.com/images/PRobertson_signature.jpg' alt='Signature' width='124' height='49' /><br />Pat Robertson<br /></p><p><a href='http://www1.cbn.com/cbn-partners'>Find out more about CBN Ministries</a></p><hr />";
```