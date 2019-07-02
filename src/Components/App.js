import React, { Component } from 'react'
import { FormContext } from './Context/FormContext'
import FormRouter from "./Forms/FormRouter"

import Banner from './StyledComponents/Banner'
import FormWrapper from './StyledComponents/FormWrapper'
import Spinner from "./StyledComponents/Spinner"

class App extends Component {
    
    componentDidMount(){
        // console.log({props: this.props, context: this.context})
        this.context.getConfiguration(this.props.rootEntry);
    }

    render() {
        const { status } = this.context.state
        return ( 
            <FormWrapper className="form-wrapper" id="react-form-top"> 
                { 
                    status !== "loaded" ? <Spinner/> : <FormRouter/>
                }     
            </FormWrapper>
        )
    }
}

App.contextType = FormContext

export default App;