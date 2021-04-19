import * as ACTIONS from '../constants/actionTypes';

const initialState = {
    cart: []
}

export default function cartReducer(state = initialState, action) {
    
    switch(action.type) {
        case ACTIONS.ADD_ITEM_TO_CART : {
            const { product } = action;
            return { ...state, cart : [...state.cart, product]};
        }
        case ACTIONS.REMOVE_ITEM_FROM_CART : {
            const { cart } = state;
            const { product: { id }} = action
            const filteredCart = cart.map((product) => product.id !== id);
            return { ...state, cart : filteredCart} 
        }
        case ACTIONS.UPDATE_CART_ITEM : {
            const { cart } = state;
            const { id, size, quantity } = action
            cart.map((product) => {
                if(product.id === id) {
                    return { ...product, size, quantity }
                }
                return product;
            });
            break;
        }
        default: 
            return state;
    }
}