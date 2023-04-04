import axios from "axios";
import * as types from "./data";
import { User } from "./data";
import { type } from "os";
const BASE='http://localhost:4001/api'

export type Action =
  | { type: 'ADD_USER'; payload: User }
  | { type: 'DELETE_USER'; payload: number };


  export const actions={
    ADD_USER:'ADD_USER',
    DEL:'DEL',
    LIST:'LIST',
    UPDATE:'UPDATE',   
    UPDATE_PAGE:'UPDATE_PAGE' 
}

export const allApi = {

//  loadUsers:async(dispatch?:any)=>{   
//     const headers= {
//         "content-type": "application/json"    }            
//         let users=await axios.get(`${BASE}/phrases`, {headers});    
//     // return users.data;   
//     // console.log('sss ',users )
//     return dispatch({type:actions.LIST, payload:users.data})
// },


loadUsers:async(dispatch?:any)=>{   
    const headers= {
        "content-type": "application/json"    }            
        let users=await axios.get(`${BASE}/phrases`, {headers});    
    // return users.data;   
    // console.log('sss ',users.data )
    return dispatch({type:actions.LIST, payload:users.data})
},

loadUsers1:async(dispatch?:any)=>{   
    const headers= {
        "content-type": "application/json"    }            
        let users=await axios.get(`${BASE}/phrases`, {headers});    
    return users.data;   
    // console.log('sss ',payload:users. )
      return dispatch({type:actions.LIST, payload:users.data})
},

 deleteConto:async (id:number) => {       
    let res=await axios.delete(`${BASE}/phrases/${id}`);  

    console.log('return '+res.data.resp)
    return res.data.resp;
},

// deleteUser:async (id:number) => {       
//     let res=await axios.delete(`${BASE}/phrases/${id}`);  

//     // console.log('return '+res.data.resp)
//     return res.data.resp;
// },


deleteUser:async (id:number, dispatch?:any ) => {       
   let users= await axios.delete(`${BASE}/phrases/${id}`);     
    // console.log('return '+res.data.resp)
    return users.data;
  
},

getUser:async (id:number, dispatch?:any ) => {       
    let users= await axios.get(`${BASE}/phrases/${id}`);     
     console.log('return get '+ JSON.stringify(users.data.phrase))
     return users.data.phrase;
   
 },

 updateUser:async (author: string, txt: string, id:number) => {   
    console.log('chuegueis mesmo '+author)
    const headers= { 
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    if(author){
        let res=await axios.put(`${BASE}/phrases/${id}`,{
            author, txt
        },{ headers });

        console.log('depois do add '+res)
        return res.data
    }    

   
},

 addConto:async (author: string, txt: string) => {   
    console.log('chueguei mesmo '+author)
    const headers= { 
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    if(author){
        let res=await axios.post(`${BASE}/phrases`,{
            author, txt
        },{ headers });

        console.log('depois do add '+res)
        return res.data
    }    


}
,
addUser:async (author?: string, txt?: string) => {   
    console.log('chueguei mesmo '+author)
    const headers= { 
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    if(author){
        let res=await axios.post(`${BASE}/phrases`,{
            author, txt
        },{ headers });

        console.log('depois do add '+res)
        return res.data
    }    

   
}
}