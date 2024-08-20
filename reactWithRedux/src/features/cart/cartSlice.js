import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems"; // data from js file 

const URL = 'https://www.course-api.com/react-useReducer-cart-project';

const initialState = {
    cartItems: [], // this is an array
    amount: 4,
    total: 0,
    isLoading: true
}

export const getCartItems = createAsyncThunk('cart/getCartItems',async () => {
    return fetch(URL)
        .then((resp) => resp.json())
        .catch((error) => console.error(error))
});

const cartSlice = createSlice({
    name: 'cart',
    initialState, // this means intialState : initialState => es6+ syntax
    reducers: { // whatever will return from reducer becomes new state override
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => itemId !== item.id)
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) =>
                item.id === payload.id);
            cartItem.amount += 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount -= 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = Math.floor(total);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCartItems.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCartItems.fulfilled, (state, action) => {
                state.isLoading = false;
                state.cartItems = action.payload;
            })
            .addCase(getCartItems.rejected, (state) => {
                state.isLoading = false;
            });
    }
})

export default cartSlice.reducer;
export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;
