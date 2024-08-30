import { createSlice } from "@reduxjs/toolkit";


export const AddSlice = createSlice({
    name: 'ShoppingList',
    initialState: {value:[{item:'tomatoes',quantity:0,category:'food'}]},
    reducers:{
        addtask: (state,action)=>{
            if (action.payload && action.payload.item) {
                state.value.push(action.payload);
              } else {
                console.error("Invalid task payload:", action.payload);
              }
            
        },

    }
})


export const {addtask} = AddSlice.actions
export default AddSlice.reducer