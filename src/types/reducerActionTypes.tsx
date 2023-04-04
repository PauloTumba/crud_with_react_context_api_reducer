export interface reducerActionType{
    action: string;
    type:string;
    data?:[]
    payload:{
        [key:string]:any;
        
        
    }
}