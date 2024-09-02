import { createSlice } from "@reduxjs/toolkit";


export const AddSlice = createSlice({
    name: 'ShoppingList',
    initialState: {value:[]},
    reducers:{
        addtask: (state,action)=>{
            if (action.payload && action.payload.item) {
                state.value.push(action.payload);
              } else {
                console.error("Invalid task payload:", action.payload);
              }
            
        },
        addAll: (state,action)=>{
          state.value = action.payload
        }
    }
})


export const {addtask,addAll} = AddSlice.actions
export default AddSlice.reducer