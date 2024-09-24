import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartlistSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addTocart(state, action) {
            const existing = state.cart.find(item => item.id == action.payload.id)
            if (existing) {
                existing.quantity += 1
                state.cart = state.cart.filter(item => item.id != action.payload.id)
                state.cart.push(existing)
                toast.success('Item Quantity Increased ..')
            } else {
                const product = action.payload
                product.quantity = 1
                state.cart.push(product)
                toast.success('Product Added to Cart ..')
            }
        },
        removeFromCart(state, action) {
            state.cart = state.cart.filter(item => item.id != action.payload)
            toast.success('Product Removed From Cart')
        },
        increaseQuantity(state, action) {
            const existing = state.cart.find(item => item.id == action.payload)
            existing.quantity++
        },
        decreaseQuantity(state, action) {
            const existing = state.cart.find(item => item.id == action.payload)
            if (existing.quantity > 1) {
                existing.quantity--
            } else {
                state.cart = state.cart.filter(item => item.id != existing.id)
                toast.success('Product Removed From Cart')
            }
        },
        checkout(state) {
            if (state.cart.length > 0) {
                state.cart = []
                toast.success('All Products Checkout ...')
            } else{
                toast.warning('No items in cart')
            }
        }
    }
})

export default cartlistSlice.reducer
export const { addTocart, removeFromCart, increaseQuantity, decreaseQuantity, checkout } = cartlistSlice.actions