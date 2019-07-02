import React, { useContext } from 'react'

import { FormContext } from '../Context/FormContext'
import DataProvider from "../Context/DataContext"
import GivingForm from "./GivingForm"
import ProductForm from './ProductForm'
import EmailForm from './EmailForm'

const FormRouter = props => {
   const { state: { formConfig } } = useContext(FormContext)
   const { type } = formConfig
   switch(type) {
       case "giving":
           return (
              <DataProvider>
               <GivingForm {...props} {...formConfig}/>
              </DataProvider>
           )
           break;
        case "product":
           return <ProductForm {...props} {...formConfig}/>
           break;
        case "email":
           return <EmailForm {...props} {...formConfig}/>
           break;
        default:
            console.error({type, formConfig, props})
            alert('There was an internal error loading this form. Please check back later or call us at 1-800-759-0700');
            return null
        break;
   }
}

export default FormRouter