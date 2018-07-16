# Configurable React Giving Form

This project is being designed for use by the Digital Media Group at CBN, Inc. 

## Installation

1. parceljs is required for simple transpiling of `jsx`, `es6`, `postcss` with `autoprefixer` and  `react-css-modules`

```
    npm install -g parcel-bundler
```

2. Fork or Clone repo, then:

```
    npm install
```

## File Structure

```
.
+-- cc-validation.js
+-- config
|   +-- form-config.json
|   +-- css-config.json
+-- index.html
+-- server.js
+-- src
|   +-- Components
|   |   +-- App.js
|   |   +-- ConfirmationPage.js
|   |   +-- FundDisplay.js
|   |   +-- GivingArray.js
|   |   +-- helpers
|   |   |   +-- cc-validation.js
|   |   |   +-- crypt.js
|   |   |   +-- get-query-variable.js
|   |   |   +-- xhr-errors.js
|   |   +-- images
|   |   |   +-- cc-AE.gif
|   |   |   +-- cc-Discover.gif
|   |   |   +-- cc-MasterCard.gif
|   |   |   +-- cc-Visa.gif
|   |   +-- NameAddressForm.js
|   |   +-- ProductDisplay.js
|   |   +-- styles
|   |   |   +-- flex.css
|   |   |   +-- form.css
|   |   |   +-- index.css
|   |   |   +-- main.css
|   |   |   +-- variables.css
|   +-- config
|   |   +-- dropdowns.json
|   +-- index.css
|   +-- index.js
+-- views
|   +-- error.html
|   +-- thankyou.hbs
```

## Configuration

The `config` folder currently includes 2 `json` files:
    
1. `css-config.json` - a list of css variables

2. `form-config.json` - a set of options and objects for prefilling giving amounts and products offers

The form will import these files and overwrite defaults configured in the form. As this project develops, we envision a controlled editor that allows configuration files to be created and stored through a visual editor. The actual form will be on the left side, the configuration on the right. Once `css` is configured and the various form options, such as the giving array, solicitation and products, are complete, then the editor will generate a `js` bundle which can be plugged-in to any web project where the form is needed.

## Running The Repo Now

While there is much more to be done, you can see how the form will function by `cloning the repo`, installing `parcel` and the `npm dependencies`, see above. The current repo serves both an `errors` page and a `confirmation` page that handles the final response from the external api. To run both the form page and the response pages, run the following script from the command-line within the repo folder:

```
npm run start:test
```

If everything has been installed correctly, open your browser to [http://localhost:1234](http://localhost:1234) to view the form. Update the values in the `*-config.json` files and see instantaneous updates to the form.

### TO DO

 - ~~Continue to Set Up Handling of User Input in each field and updating `state` accordingly~~
 - Develop giving array to handle more features than just simple buttons, *for instance, supporting tabs*
 - ~~Develop multiple Product List templates~~
 - ~~Develop the architecture for the `cart` and `checkout` as user adds input and submits the form~~
 - ~~Add Validation to each Input based on CBN DB standards~~
 - ~~Once Giving APIs are developed, set up `fetch` for `POST` routes on the api, then begin developing second and third stages (Credit Card Entry and Confirmation Messaging)~~
 - Consider refactoring all of the CSS according to BEM principles
 - Determine which set of form configurations are contradictory and prevent form from functioning as such
 - Consider refactoring application state using `redux-form`
 - consider adding proptypes support to each component