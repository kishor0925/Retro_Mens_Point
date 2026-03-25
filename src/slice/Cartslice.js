import { createSlice } from "@reduxjs/toolkit";


const initialState = {
        cartItems :  JSON.parse(localStorage.getItem("cartItems")) || [],
        totalAmount : 0,
}

export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addtoCart(state,action){
            const items = action.payload;
            const existingItems = state.cartItems.find(i => i._id === items._id);

            if(existingItems)
            {
                existingItems.quantity += 1;
            }
            else
            {
                state.cartItems.push({...items, quantity : 1});
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));

        },
        updatequan(state, action){
            const {pid, change} = action.payload;
            const orgid = state.cartItems.find(i => i._id === pid);

            if(orgid)
            {
                orgid.quantity += change;

                if(orgid.quantity <= 1)
                {
                    orgid.quantity = 1;
                }
            }

        },
        removeCart(state,action){
            const removeid = action.payload;
            state.cartItems = state.cartItems.filter(i => i._id !== removeid)

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        calctotal(state){
            state.totalAmount = state.cartItems.reduce( (sum , product) => (
                sum + product.price * product.quantity
            ),0)
        }

    }

})

export const {addtoCart, updatequan,removeCart, calctotal} = cartSlice.actions;
export default cartSlice.reducer