import React, { createContext, useContext, useReducer } from "react";
// import {Conto, contoInitialState}  from "./reducer";
import {  ContextType,contoInitialState,initialState, initialStateType } from "./data";
import { reducerActionType } from "./types";
import { ContosReducer } from "./reducer";
// export type initialStateType={   
//     contos:Conto[];   
// }
// type ContextType={
//     state:initialStateType;
//     dispatch:React.Dispatch<any>;
// }

// export const initialState={    
//     contos:contoInitialState,    
// }

// export const ContosContext = React.createContext({} as IContextProps);
export const ContosContext=createContext<ContextType>(
    {
        state:initialState,
        dispatch:()=>null
    }
);

export const mainReducer=(state:initialStateType,action:reducerActionType)=>({   
    contos:ContosReducer(state.contos, action),
    // author:ContosReducer(state.contos, action)
})


  export const useContoList=()=>{   
    return useReducer(ContosReducer,contoInitialState);
}

// export const ContosContext=createContext<ContextType>(initialState[]);