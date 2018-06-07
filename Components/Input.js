// EXTRANEOUS FOR NOW , PERHAPS COULD BE USED FOR CREATING INPUTS FROM JSON OR AN ARRAY
import React, { Component } from 'react'

export default class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            classes: props.hasOwnProperty('classes') ? props.classes : null,
            type: props.type,
            value: props.hasOwnProperty('value') ? props.value : null,
            name: props.name,
            checked: props.hasOwnProperty('checked') ? props.checked : null,
            placeholder: props.hasOwnProperty('placeholder') ? props.placeholder : null,
            required: props.hasOwnProperty('required') ? props.required : null,
            options: props.hasOwnProperty("options") ? props.options : null
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.hasOwnProperty("value") && nextProps.value != this.state.value ) {
            this.setState({value: nextProps.value})
        }

        if (nextProps.hasOwnProperty("checked") && nextProps.checked != this.state.checked ) {
            this.setState({checked: nextProps.checked})
        }

        if (nextProps.classes != this.state.classes) {
            this.setState({classes: nextProps.classes})
        }
    }

    handleInputChange(e) {
        this.props.handleInputChange(e);
    }
    render() {
        if (this.state.type == 'checkbox') {
            return (
                <input 
                    className={this.state.classes}
                    type={this.state.type}
                    id={this.state.name}
                    name={this.state.name}
                    checked={this.state.checked} 
                    onChange={this.handleInputChange}
                />
            )
        } else if (this.state.type == 'select') {
            return (
                <select 
                    className={this.state.classes}
                    id={this.state.name} 
                    name={this.state.name}
                    required={this.state.required} 
                    value={this.state.value} 
                    onChange={this.handleInputChange}
                >
                    {this.state.options}
                </select>
            )
        } else {
            // type = text
            return (
                <input 
                    className={this.state.classes}
                    type={this.state.type}
                    id={this.state.name}
                    name={this.state.name}
                    placeholder={this.state.placeholder}
                    required={this.state.required} 
                    value={this.state.value} 
                    onChange={this.handleInputChange}
                />
            )
        }
    }
}