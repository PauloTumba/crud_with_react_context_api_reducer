import { reducerActionType } from "../../types/reducerActionTypes";
export type ThemeType={
    status:'red'|'white'
        
}   

export const themeInitialState:ThemeType={
    status:'white',    
}
export const ThemeReducer=(state:ThemeType, action:reducerActionType)=>{
    switch(action.type){
        case 'CHANGE_STATUS':
            return{...state, status:action.payload.status}
       
        
    }
    return state;
}