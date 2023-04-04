// import {Conto, contoInitialState}  from "./reducer";
// export type Conto={
//     id?:number; 
//     author?:string;  
//     txt?:string     
//  }

export type Conto={
    id?:number; 
    author?:string;  
    txt?:string     
 }
 export const contoInitialState:Conto[]=[];
export type initialStateType={
        contos:Conto[]; 
        author?:string;   
}
export type ContextType={
    state:initialStateType;
    dispatch:React.Dispatch<any>;
}



export const initialState={    
    contos:contoInitialState,    
    author:'pdesss'
}

// export const data={
//     contos:[],
// }


// export type initialStateType={   
//     contos:Conto[];   
// }