import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:{
        items:[]
    },
    reducers:{
        addToWishList(state,action){
            const existing = state.items.find(item => item.id == action.payload.id)
            if(existing){
                toast.warning('Item Already in WishList !!')
            } else {
                state.items.push(action.payload)
                toast.success('Item Added to WishList ..')
            }
        },
        removeFromWishList(state,action){
            state.items = state.items.filter(item =>item.id!=action.payload)
        }
    }
})

export default wishlistSlice.reducer
export const {addToWishList, removeFromWishList} = wishlistSlice.actions