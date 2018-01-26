//constants
const IS_AUTH = 'IS_AUTH'
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'

//action builders
//global function to check for authentication
export function isAuth() {
    return {
        type: IS_AUTH,
        payload: true
    }
}
//global function to get cart
export function getCart(name) {
    return {
        type: GET_CART,
        payload: ''//axios.get('/api/cartgrab')
    }
}
//global function to add to cart
export function addToCart(name) {
    return {
        type: ADD_TO_CART,
        payload: name
    }
}



let initialState = {
    cart: [{
        name: ''
    }],
    isAuth: false,
}

//reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case IS_AUTH:
            return Object.assign({}, state, { isAuth: action.payload })
        case GET_CART:
            return Object.assign({}, state, { cart: action.payload })
        default:
            return state;
    }

}