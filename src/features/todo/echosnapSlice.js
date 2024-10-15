import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    darkMode:false,
    userDetails:{}
}

export const echosnapSlice = createSlice({
    name:"echosnap",
    initialState,
    reducers:{
        changeToDarkMode:(state) =>{
           
            state.darkMode=true
        },
        changeToLightMode:(state)=>{
            state.darkMode=false
        },
        setUserDetails:(state,actions)=>{
            state.userDetails= actions.payload;

        }
    }
})

export const {changeToDarkMode,changeToLightMode,setUserDetails}=echosnapSlice.actions
export default echosnapSlice.reducer