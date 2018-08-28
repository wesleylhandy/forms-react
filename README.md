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
+-- index.html
+-- proxy-server
|   +-- config
|   |   +-- form-config.json
|   |   +-- css-config.json
|   +-- server.js
|   +-- views
|   |   +-- error.html
|   |   +-- thankyou.hbs
+-- src
|   +-- Components
|   |   +-- App.js
|   |   +-- Checkbox.js
|   |   +-- ConfirmationPage.js
|   |   +-- FundDisplay.js
|   |   +-- GivingArray.js
|   |   +-- InputGroup.js
|   |   +-- helpers
|   |   |   +-- crypt.js
|   |   |   +-- css-vars-ponyfill.min.js
|   |   |   +-- get-query-variable.js
|   |   |   +-- xhr-errors.js
|   |   +-- NameAddressForm.js
|   |   +-- PaymentForm.js
|   |   +-- ProductDisplay.js
|   |   +-- RadioButton.js
|   |   +-- RedirectForm.js
|   |   +-- SelectGroup.js
|   |   +-- Spinner.js
|   |   +-- styles
|   |   |   +-- checkbox.css
|   |   |   +-- error.css
|   |   |   +-- flex.css
|   |   |   +-- form.css
|   |   |   +-- funds.css
|   |   |   +-- index.css
|   |   |   +-- input.css
|   |   |   +-- main.css
|   |   |   +-- radio.css
|   |   |   +-- spinner.css
|   |   |   +-- variables.css
|   +-- config
|   |   +-- dropdowns.json
|   +-- index.css
|   +-- index.js

```

## Configuration

The `src/config` folder currently includes 2 `json` files:
    
1. `css-config.json` - a list of css variables

2. `form-config.json` - a set of options and objects for prefilling giving amounts and products offers

The form will import these files and overwrite defaults configured in the form. As this project develops, we envision a controlled editor that allows configuration files to be created and stored through a visual editor. The actual form will be on the left side, the configuration on the right. Once `css` is configured and the various form options, such as the giving array, solicitation and products, are complete, then the editor will generate a `js` bundle which can be plugged-in to any web project where the form is needed.

## Running The Repo Now

While there is much more to be done, you can see how the form will function by `cloning the repo`, installing `parcel` and the `npm dependencies`, see above. The current repo serves both an `errors` page and a `confirmation` page that handles the final response from the external api. To run both the form page and the response pages, run the following script from the command-line within the repo folder:

```
npm run start:test
```

If everything has been installed correctly, open your browser to [http://localhost:1234](http://localhost:1234) to view the form. Update the values in the `*-config.json` files and see instantaneous updates to the form. The form will not complete without an API key and without your local url being validated by the DMG.

### TO DO

 - ~~Continue to Set Up Handling of User Input in each field and updating `state` accordingly~~
 - ~~Develop multiple Product List templates~~
 - ~~Develop the architecture for the `cart` and `checkout` as user adds input and submits the form~~
 - ~~Add Validation to each Input based on CBN DB standards~~
 - ~~Once Giving APIs are developed, set up `fetch` for `POST` routes on the api, then begin developing second and third stages (Credit Card Entry and Confirmation Messaging)~~
 - ~~Consider refactoring all of the CSS according to BEM principles~~
 - Brainstorm all possible form configurations and begin building a larger Component Library
 - Refactor entire project for Electron App to be able to build css and form config from some sort of WYSIWYG editor
 - Develop giving array to handle more features than just simple buttons, *for instance, supporting tabs*
 - Determine which set of form configurations are contradictory and prevent form from functioning as such
 - Consider refactoring application state using `redux-form`
 - consider adding proptypes support to each component