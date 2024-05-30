import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorities:[]
}


export const favoritiesSlice = createSlice({
    name:'favorities',
    initialState,
    reducers:{
           addList:(state,action) =>{
            if(!state.favorities.find(m => m.id === action.payload.id)){
                state.favorities.push(action.payload)
            }
           },  
           removeAdd:(state,action) =>{
            state.favorities = state.favorities.filter(m => m.id !== action.payload.id);
           },
           removeAll:(state) =>{
            state.favorities = [];
           }
           
    }
})


export const {addList,removeAdd,removeAll} = favoritiesSlice.actions;
export default favoritiesSlice.reducer;




