import axios from "axios";
const BASE='http://localhost:4001/api'

export const allApi = {

 loadContos:async(dispatch?:any)=>{   
    const headers= {
        "content-type": "application/json"    }            
        let contos=await axios.get(`${BASE}/phrases`, {headers});    
    return contos.data;   
},

 deleteConto:async (id:number) => {       
    let res=await axios.delete(`${BASE}/phrases/${id}`);  

    console.log('return '+res.data.resp)
    return res.data.resp;
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
}