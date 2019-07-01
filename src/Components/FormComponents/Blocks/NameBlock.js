import React from 'react'

import FormRow from "../StyledComponents/FormRow"
import FieldSet from "../StyledComponents/FieldSet"
import SelectGroup from '../SelectGroup'
import InputGroup from '../InputGroup'

function TitleDropdown({value, error, handleInputChange}) {
    const vals = ['', "Mr", "Ms", "Mrs", "Mr and Mrs"]
    const options = vals.map((el, ind)=>{
        return <option 
                key={`title-${ind}`} 
                value={el} 
                dangerouslySetInnerHTML={{__html: ind === 0 ? 'Title* &#9663;' : el}} 
                disabled={ind === 0 ? "disabled" : ""} 
                hidden={ind === 0 ? "hidden" : ""}
            ></option>
    })
    return (
        <SelectGroup 
            id="Title"
            specialStyle="form-group--Title"
            required={true}
            value={value}
            error={error}
            handleInputChange={handleInputChange}
            options={options}
        />
    )
}

 /**
 * Function to render a name input
 * @param {String} type - either 'First', 'Last', or 'Middle' 
 * @param {Boolean} required 
 * @param {Function} handleInputChange
 * @param {String} value
 * @param {String} error
 * @returns {JSX} - InputGroup with given parameters
 */
function NameInput({type, required, handleInputChange, value, error}){
    const id = `${type}name`
    const label = `${type} Name`
    const specialStyle = "form-group--" + id
    // console.log({id, label, specialStyle})
    return (
        <InputGroup
            type="text"
            id={id}
            specialStyle={specialStyle} 
            label={label}
            placeholder={ required ? label + "*" : label} 
            maxLength={type === "Last" ? 25 : 20} 
            required={required} 
            value={value} 
            handleInputChange={handleInputChange} 
            error={error} 
        />
    )
}

 /**
 * Function to render spousename input
 * @param {String} value
 * @param {String} error
 * @param {Function} handleInputChange
 * @returns {JSX} - InputGroup with given parameters
 */
function SpouseInput({value, error, handleInputChange}) {
    return (
        <FormRow>
            <InputGroup
                type="text"
                id="Spousename" 
                specialStyle="" 
                label="Spouse&rsquo;s Name" 
                placeholder="Spouse&rsquo;s First and Last Name" 
                maxLength="100" 
                required={false} 
                value={value} 
                handleInputChange={handleInputChange} 
                error={error} 
            />
        </FormRow>
    )
}

function NameBlock({getMiddleName, getSuffix, getSpouseInfo, fields, errors, handleInputChange, type}){  
    if (!getMiddleName && !getSuffix) {
        return (
            <FieldSet>
                <legend>{`${type} Block`}</legend>
                <FormRow className="name-row">
                    <TitleDropdown value={fields.Title} error={errors.Title} handleInputChange={handleInputChange}/>
                    <NameInput type={"First"} required={true} handleInputChange={handleInputChange} value={fields["Firstname"]} error={errors["Firstname"]}/>
                    <NameInput type={"Last"} required={true} handleInputChange={handleInputChange} value={fields["Lastname"]} error={errors["Lastname"]}/>                         
                </FormRow>
                {
                    getSpouseInfo && (
                        <SpouseInput value={fields.Spousename} error={errors.Spousename} handleInputChange={handleInputChange} />
                    )
                }
            </FieldSet>
        )
    } else {
        return (
            <FieldSet>
                <legend>{`${type} Block`}</legend>
                <FormRow>
                    <TitleDropdown value={fields.Title} error={errors.Title}/>
                    <NameInput type={"First"} required={true} handleInputChange={handleInputChange} value={fields["Firstname"]} error={errors["Firstname"]}/>
                    {
                        getMiddleName &&
                            <NameInput type={"Middle"} required={true} handleInputChange={handleInputChange} value={fields["Middlename"]} error={errors["Middlename"]}/>
                    }
                </FormRow>
                <FormRow>                           
                    <NameInput type={"Last"} required={true} handleInputChange={handleInputChange} value={fields["Lastname"]} error={errors["Lastname"]}/>                         
                    {
                        getSuffix && (
                            <SelectGroup 
                                id="Suffix"
                                specialStyle=""
                                required={false}
                                value={fields.Suffix}
                                error={errors.Suffix}
                                handleInputChange={handleInputChange}
                                options={[
                                    <option key="suff-0" value="" disabled="disabled">Suffix* &#9663;</option>,
                                    <option key="suff-1" value="Jr">Jr</option>,
                                    <option key="suff-2" value="Sr">Sr</option>,
                                    <option key="suff-3" value="III">III</option>,
                                    <option key="suff-4" value="IV">IV</option>,
                                    <option key="suff-5" value="Esq">Esq</option>
                                ]}
                            />
                        )
                    }
                </FormRow>
                {
                    getSpouseInfo && (
                        <SpouseInput value={fields.Spousename} error={errors.Spousename} handleInputChange={handleInputChange} />
                    )
                }
            </FieldSet>
        )
    }
}

export default NameBlock;