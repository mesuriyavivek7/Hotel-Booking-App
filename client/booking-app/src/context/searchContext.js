import { Context, createContext, useReducer } from "react";

const INITIAL_STATE={
    city:undefined,
    dates:[],
    option:{
        adult:undefined,
        child:undefined,
        room:undefined
    }
}
export const searchContext=createContext(INITIAL_STATE)

const searchReducer=(state,action)=>{
   switch(action.type){
    case "NEW_SEARCH":
      return action.payload
    case "RESET_SEARCH":
      return INITIAL_STATE  
    default:
      return state
   }
}

export const SearchContextProvider=({children})=>{
  const [state,dispatch]=useReducer(searchReducer,INITIAL_STATE)
  console.log(state)
  return(
    <searchContext.Provider 
    value={{
      city:state.city,
      dates:state.dates,
      option:state.option,
      dispatch
    }}
    >
    {children}
    </searchContext.Provider>
  )
}