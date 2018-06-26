# Configurable React Giving Form

This project is being designed for use by the Digital Media Group at CBN, Inc. 

## Installation

1. parceljs is required for simple transpiling of `jsx`, `es6`, and `postcss` with `autoprefixer`

```
    npm install -g parcel-bundler
```

2. Fork or Clone repo, then:

```
    npm install
```

## Configuration

The `config` folder currently includes 2 `json` files:
    
1. `css-config.json` - a list of css variables

2. `form-congif.json` - a set of options and objects for prefilling giving amounts and products offers

The form will import these files and overwrite defaults configured in the form. As this project develops, we envision a controlled editor that allows configuration files to be created and stored through a visual editor. The actual form will be on the left side, the configuration on the right. Once `css` is configured and the various form options, such as the giving array, solicitation and products, are complete, then the editor will generate a `js` bundle which can be plugged-in to any web project where the form is needed.

## Running The Repo Now

While there is much more to be done, you can see how the form will function by `cloning the repo`, installing `parcel` and the `npm dependencies`, see above. From within the project folder, run `parcel index.html`.

If everything has been installed correctly, open your browser to [http://localhost:1234](http://localhost:1234) to view the form. Update the values in the `*-config.json` files and see instantaneous updates to the form.

### TO DO

 - Continue to Set Up Handling of User Input in each field and updating `state` accordingly
 - Develop giving array to handle more features than just simple buttons
 - Develop multiple Product List templates
 - Develop the architecture for the `cart` and `checkout` as user adds input and submits the form
 - Add Validation to each Input based on CBN DB standards
 - Once Giving APIs are developed, set up `fetch` for `POST` routes on the api, then begin developing second and third stages (Credit Card Entry and Confirmation Messaging)