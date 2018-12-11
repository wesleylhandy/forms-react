import React from 'react'

import InputGroup from './InputGroup'
import SelectGroup from './SelectGroup'

import styles from './styles/form-row.module.css'
import flex from './styles/flex.module.css'

import getStateOptions from './helpers/renderStateOptions'
import { countries } from '../config/dropdowns.json'

function AddressBlock({fields, errors, handleInputChange, getPhone, international}){
    return (
        <React.Fragment>
            <div styleName="styles.form-row flex.flex flex.flex-row flex.flex-between">
                <InputGroup
                    type="text"
                    id="Address1" 
                    specialStyle="" 
                    label="Address" 
                    placeholder="Address*" 
                    maxLength="31" 
                    required={true} 
                    value={fields.Address1} 
                    handleInputChange={handleInputChange} 
                    error={errors.Address1} 
                />
            </div>
            <div styleName="styles.form-row flex.flex flex.flex-row flex.flex-between">
                <InputGroup
                    type="text"
                    id="Address2" 
                    specialStyle="" 
                    label="Address2" 
                    placeholder="Address Line 2" 
                    maxLength="31" 
                    required={false} 
                    value={fields.Address2} 
                    handleInputChange={handleInputChange} 
                    error={errors.Address2} 
                />
            </div>
            <div styleName="styles.form-row styles.city-state-row flex.flex flex.flex-row flex.flex-between">
                <InputGroup
                    type="text"
                    id="City" 
                    specialStyle="styles.form-group--City" 
                    label="City" 
                    placeholder="City*" 
                    maxLength="28" 
                    required={true} 
                    value={fields.City} 
                    handleInputChange={handleInputChange} 
                    error={errors.City} 
                />
                <SelectGroup 
                    id="State"
                    specialStyle="styles.form-group--State"
                    required={true}
                    value={fields.State}
                    error={errors.State}
                    handleInputChange={handleInputChange}
                    options={[<option key="state-base-0" value="">State* &#9663;</option>, getStateOptions(international)]}
                />
            </div>

            <div styleName="styles.form-row styles.zip-country-row flex.flex flex.flex-row flex.flex-between">
                <InputGroup
                    type="text"
                    id="Zip" 
                    specialStyle="styles.form-group--Zip" 
                    label="Zip" 
                    placeholder="Zip*" 
                    maxLength={fields.Country != "US" ? 25 : 5} 
                    required={true} 
                    value={fields.Zip} 
                    handleInputChange={handleInputChange} 
                    error={errors.Zip} 
                    international={international}
                />

                { 
                    international && (
                        <SelectGroup 
                            id="Country"
                            specialStyle="styles.form-group--Country"
                            required={true}
                            value={fields.Country}
                            error={errors.Country}
                            handleInputChange={handleInputChange}
                            options={[<option key="country-base-0" value="">Country* &#9663;</option>, countries.map((country, i)=><option key={`country-${i}`} value={country}>{country}</option>)]}
                        />
                    ) 
                }
            </div>
            <div styleName="styles.form-row styles.email-phone-row flex.flex flex.flex-row flex.flex-between">
                <InputGroup
                    type="text"
                    id="Emailaddress" 
                    specialStyle="styles.form-group--Email" 
                    label="Email Address" 
                    placeholder="Email Address*" 
                    maxLength="128" 
                    required={true} 
                    value={fields.Emailaddress} 
                    handleInputChange={handleInputChange} 
                    error={errors.Emailaddress} 
                />
                {
                    getPhone && (
                        <InputGroup
                            type="text"
                            id="phone" 
                            specialStyle="styles.form-group--Phone" 
                            label="Phone Number" 
                            placeholder="Phone" 
                            maxLength="24" 
                            required={false} 
                            value={fields.phone} 
                            handleInputChange={handleInputChange} 
                            error={errors.phone} 
                        />
                    )
                }
            </div>
        </React.Fragment>
    )
}

export default AddressBlock