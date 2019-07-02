import React, { Component } from "react";

export const CartContext = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case "SUBMIT":
            return { ...state, submitted: true, DonorID: action.DonorID, formAction: action.formAction }
            break;
    }
}

class CartProvider extends Component {
    state = {
        items: [],
        formAction: "",
        submitted: false,
        DonorID: "",  
        submitForm = (action, {msg, data}) => {
            const DonorID = msg.split(";")[0].split(" - ")[1]
            const formAction = msg.split(" is ")[1]
            action.DonorID = DonorID
            action.formAction = formAction
            this.setState(state => reducer(state, action));
        }
    }
    render() {
        const { state, props: { children } } = this
        return (
          <CartContext.Provider value={state}>
            { children }
          </CartContext.Provider>
        );
      }
    }
    
export default CartProvider;