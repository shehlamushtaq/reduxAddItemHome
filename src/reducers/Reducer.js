import React from 'react'


const initialState = {
	products: [],
    selectedItem: 0,
    cartItems:[]    
}

const Reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'FILL_PRODUCTS': {

            return {
                ...state,
                products: [...state.products, ...action.payload]
            }
            
        }

        case 'ADD_ITEM_TO_CART': {

            return {
                ...state,
                cartItems:[...state.cartItems, action.payload ]
            }
        }
        
        case 'DELETE_ITEM_FROM_CART': {

            let arr = state.cartItems.filter( (item) => item.id !== action.payload );            

            return { 
                ...state,
                cartItems: arr
            }
        }
        
        case 'EMPTY_CART': {
            return { 
                ...state,
                cartItems: [] 
            }


        }

        case 'SET_SELECTED_ITEM': {

        }

        default: {
            return state;
        }


    }
    
}

export default Reducer;