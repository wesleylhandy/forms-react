import React from 'react'

import SelectGroup from './SelectGroup'
import InputGroup from './InputGroup'

import styles from './styles/form-row.module.css'
import flex from './styles/flex.module.css'

import getStateOptions from './helpers/renderStateOptions'

function ShippingAddressBlock({fields, errors, handleInputChange, international}) {
    return (
        
        <div id="ShippingAddressInfo" styleName='styles.shipping-address__info'>
            <div styleName="styles.form-row">  
                <div styleName='flex.flex flex.flex-row flex.flex-center'>
                    <hr styleName='styles.line'/><div styleName='styles.divider-title'>Shipping Address</div><hr styleName='styles.line'/>
                </div>
            </div>
            <div styleName="styles.form-row flex.flex flex.flex-row flex.flex-between">
                <InputGroup
                    type="text" 
                    id="ShipToName" 
                    specialStyle="" 
                    label="Name" 
                    placeholder="First and Last Name" 
                    maxLength='100' 
                    required={fields.ShipToYes} 
                    value={fields.ShipToName} 
                    handleInputChange={handleInputChange} 
                    error={errors.ShipToName} 
                />
            </div>
            <div styleName="styles.form-row flex.flex flex.flex-row flex.flex-between">
                <InputGroup
                    type="text"
                    id="ShipToAddress1" 
                    specialStyle="" 
                    label="Address" 
                    placeholder="Shipping Address*" 
                    maxLength='64' 
                    required={fields.ShipToYes} 
                    value={fields.ShipToAddress1} 
                    handleInputChange={handleInputChange} 
                    error={errors.ShipToAddress1} 
                />
            </div>
            <div styleName="styles.form-row flex.flex flex.flex-row flex.flex-between">
                <InputGroup
                    type="text"
                    id="ShipToAddress2" 
                    specialStyle="" 
                    label="Address2" 
                    placeholder="Shipping Address Line 2" 
                    maxLength='64' 
                    required={false} 
                    value={fields.ShipToAddress2} 
                    handleInputChange={handleInputChange} 
                    error={errors.ShipToAddress2} 
                />
            </div>
            <div styleName="styles.form-row styles.city-state-row flex.flex flex.flex-row flex.flex-between">
                <InputGroup
                    type="text"
                    id="ShipToCity" 
                    specialStyle="styles.form-group--City" 
                    label="City" 
                    placeholder="City" 
                    maxLength='64' 
                    required={fields.ShipToYes} 
                    value={fields.ShipToCity} 
                    handleInputChange={handleInputChange} 
                    error={errors.ShipToCity} 
                />
                <SelectGroup 
                    id="ShipToState"
                    specialStyle="styles.form-group--State"
                    required={fields.ShipToYes}
                    value={fields.ShipToState}
                    error={errors.ShipToState}
                    handleInputChange={handleInputChange}
                    options={[<option key="shiptostate-base-0" value="">State* &#9663;</option>, getStateOptions(international)]}
                />
            </div>
            <div styleName="styles.form-row flex.flex flex.flex-row flex.flex-between">
                <InputGroup
                    type="text"
                    id="ShipToZip" 
                    specialStyle="" 
                    label="Zip" 
                    placeholder="Zip*" 
                    maxLength='5' 
                    required={fields.ShipToYes} 
                    value={fields.ShipToZip} 
                    handleInputChange={handleInputChange} 
                    error={errors.ShipToZip} 
                    international={international}
                />
            </div>
        </div>
    )
}

export default ShippingAddressBlock