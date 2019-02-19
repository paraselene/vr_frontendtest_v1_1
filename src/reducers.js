import { ADD_PRODUCT, MODIFY_QUANTITY, REMOVE_PRODUCT } from './actions'

/* reducers for the shopping cart to add product, modify quantity and remove product
 * input: state - previous state for the Redux Store
 *        action - action to be performed
 * output: state - state after the pervious state performing the action
 */ 
function reducers(state = JSON.parse(window.localStorage["store"]), action) {
    switch (action.type) {
        case ADD_PRODUCT:
            //if it found the product in the shopping cart, update the quantity of the product
            //otherwise add the product to the shopping cart
            return state.find(product => product.name === action.product.name)
                ? state.map(product => product.name === action.product.name
                    ? { name: product.name, price: product.price, quantity: product.quantity + 1 }
                    : product
                )
                : [...state, { name: action.product.name, price: action.product.price, quantity: 1 }]
        case MODIFY_QUANTITY:
            //found the product and update the quantity accordingly
            return state.map(product => product.name === action.product.name
                ? { name: action.product.name, price: product.price, quantity: action.product.quantity }
                : product
            )
        case REMOVE_PRODUCT:
            // remove the product from the shopping cart
            return state.filter(product => product.name !== action.name)
        default:
            return state
    }
}

export default reducers