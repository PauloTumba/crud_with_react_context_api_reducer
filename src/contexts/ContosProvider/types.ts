

export const LOAD_CONTO='LOAD_CONTO';
export const ADD_CONTO='ADD_CONTO';
export const DEL_CONTO='DEL_CONTO';

export const actions={
    ADD:'ADD',
    DEL:'DEL',
    LIST:'LIST',    
}


export interface reducerActionType{
    action: string;
    type:string;
    data?:[]
    payload:{
        [key:string]:any;
        
        
    }
}