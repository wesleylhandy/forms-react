import React, { Component } from "react";
import { cryptLS, readLS, removeOneLS, emptyLS } from "../../helpers/ls"
import { callApi } from '../../helpers/fetch-helpers';

export const DataContext = React.createContext();

const reducer = (state, action) => {
    const fields = { ...state.fields }
    const errors = { ...state.errors }
    const { formData, name, value, error } = action
    switch(action.type){
        case "INIT_FORM_STATE":
            return { ...state, initialized: true, fields: action.fields, errors: action.errors, international: action.international, type: action.formType}
            break;
        case "LOAD":
            for (let datum in formData) {
                fields[datum] = formData[datum]
            }
            return { ...state, fields }
            break;
        case "UPDATE_FIELD":
            fields[name] = value
            errors[name] = error
            return {...state, fields, errors }
            break;
        case "UPDATE_FIELDS":
            action.fields.forEach(({name, value, error})=>{
                fields[name] = value
                errors[name] = error
            })
            return {...state, fields, errors }
            break;
        default:
            return { ...state }
            break;
    }
}

const email_regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, 
    phone_regex = /1?\W*([2-9][0-8][0-9])\W*([2-9][0-9]{2})\W*([0-9]{4})/,
    zip_regex = /^\d{5}$/,
    firstname_regex= /^([a-zA-Z0-9\-\.' ]+)$/i,
    lastname_regex=/^([a-zA-Z0-9\-\.' ]+)(?:(,|\s|,\s)(jr|sr|ii|iii|iv|esq)\.*)?$/i;

class DataProvider extends Component {
  state = {
    initialized: false,
    submitted: false,
    confirmed: false,
    finalized: false,
    confirmationData: null,
    finalizedData: null,
    formAction: null,
    international: false,
    fields: {},
    errors: {},
    donorID: null,
    type: "",
    initFields: action => this.setState(state => reducer(state, action)),
    loadLS: action => {
        const store = readLS('store'); 
        const info = readLS('info');
        const formData = store ? store : info;
        // console.log({store, info, formData})
        if (!formData) {
            emptyLS();
        }
        if (!store) {
            removeOneLS('store')
        }
        action.formData = formData
        this.setState(state => reducer(state, action))
    },
    saveLS: (action, formData) => {
        const days = 30
        const lifetime = days * 24 * 60 * 60 * 1000 
        cryptLS({formData}, lifetime, 'info');
    },
    removeOneLS: type => {
        removeOneLS('info');
    },
    updateField: action => this.setState(state => reducer(state, action)),
    validateAndUpdateField: async (action) => {
        const {name, value} = action
        const isZip = name.includes("Zip") && value.length >= 5;  
        if (isZip) {
            if (!zip_regex.test(value)) {
                action.error = "Invalid Postal Code"
            } else {
                try {
                    action.error = await this.callZipCityStateService(name, value)
                } catch (err) {
                    console.error('CallZipCityStateServiceError')
                    console.error({err})
                }
            }
        } else {
            action.error = await this.validateInput(false, name, value)
        }
        this.setState(state => reducer(state, action))
    },
    validateForm: async (action) => {

    }
  }
  /**
     * 
     * @param {string} name - either Zip or ShipToZip
     * @param {string} value - five digit zip code
     */
    callZipCityStateService = async (name, value) => {
        if (value) {
            const base = "https://services.cbn.com/AddressValidation/CityStatebyZip.aspx?PostalCode=";
            const url = `${base}${value}`;
            try {
                const result = await callApi(url);
                const oldCity = this.state.fields[name == "ShipToZip" ? "ShipToCity" : "City"].toUpperCase();
                let { city, state, zip, returnCode, returnMessage } = JSON.parse(result);
                // console.log({ city, state, zip, returnCode, returnMessage })
                if (returnCode == 1) {
                    // console.log(city)
                    const error = oldCity && !city.toUpperCase().includes(oldCity);
                    const newCity = error || !oldCity ? city.split(";")[0] : oldCity;

                    const action = {
                        type: "UPDATE_FIELDS",
                        fields: [{
                            name: name == "ShipToZip" ? "ShipToCity" : "City",
                            value: newCity,
                            error: ''
                        }, {
                            name: name == "ShipToZip" ? "ShipToState" : "State",
                            value: state,
                            error: ''
                        }]
                    }
                    if (name == "Zip") {
                        action.fields.push({
                            name: "Country",
                            value: "United States",
                            error: ''
                        })
                    }
                    this.setState(state => reducer(state, action))
                    return error ? city : '' ;
                } else {
                    return returnMessage;
                }
            } catch (err) {
                console.error(err);
                return '';
            }
        } else {
            return '';
        }
    }

    /**
     * Function to validate the input fields of the form
     * @param {Boolean} submitting - current state of the form, true if being submitted
     * @param {String} name - name of the input being validated
     * @param {*} value - String, Number or Boolean of value from the input
     * @returns {String} - an empty String if no errors, else a string with a single error message
     */
    validateInput = (submitting, name, value) => {
        let error = '';
        const { international } = this.state;
        const { ShipToYes } = this.state.fields;
        switch(name) {
            case "Title":
            case "State":
            case "Address1":
            case "City":
                if (!value && submitting) {
                    error = "Required"
                }
                break;
            case "ShipToState":
            case "ShipToAddress1":
            case "ShipToCity":
                if(!value && submitting && ShipToYes) {
                    error = "Required"
                }
                break;
            case "Firstname":
                if(value && !firstname_regex.test(value)) {
                    error = "No special characters allowed. Please call if you need assistance."
                }
                if (!value && submitting) {
                    error = "Required"
                }
                break;
            case "Middlename":
                if(value && !firstname_regex.test(value)) {
                    error = "No special characters allowed. Please call if you need assistance."
                }
                break;
            case "Lastname":
                if(value && !lastname_regex.test(value)) {
                    error = "No special characters allowed. Please call if you need assistance."
                }
                if (!value && submitting) {
                    error = "Required"
                }
                break;
            case "ShipToName":
                if(value && !lastname_regex.test(value)) {
                    error = "No special characters allowed. Please call if you need assistance."
                }
                if (!value && ShipToYes && submitting) {
                    error = "Required"
                }
                break;
            case "Spousename" :
                if(value && !lastname_regex.test(value)) {
                    error = "No special characters allowed. Please call if you need assistance."
                }
                break;
            case "Country":
                if (!value && submitting && international) {
                    error = "Required"
                }
                break;
            case "Emailaddress":
                if (value && !(email_regex.test(value))){
                    error = "Please enter a valid email: ie. you@example.com"
                }
                if (!value && submitting){
                    error = "Required"
                }
                break;
            case "phone":
                if (value && !(phone_regex.test(value))){
                    error = "Please enter a valid phone number, numbers only: ie. 7575551212"
                }
                break;
        }
        return error
    }



  hydrateForm(data){
    // console.log({data})
    this.setState({submitted: false, hydratedData: data})
  }

  renderReceiptPage(varsArray) {
    const {
        formData: {
            Firstname,
            Lastname,
            Middlename,
            Address1,
            Address2,
            City,
            Country,
            Phoneareacode,
            Phoneexchange,
            Phonenumber,
            Spousename,
            State,
            Suffix,
            Title,
            Zip
        } 
    } = this.state;
    this.setState({finalized: true, finalizedData: [...varsArray, { Firstname, Lastname, Middlename, Address1, Address2, City, Country, Phoneareacode, Phoneexchange, Phonenumber, Spousename, State, Suffix, Title, Zip } ]})
  }
  
  render() {
    const { state, props: { children } } = this
    return (
      <DataContext.Provider value={state}>
        { children }
      </DataContext.Provider>
    );
  }
}

export default DataProvider;
