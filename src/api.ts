import axios from "axios";
const BASE='https://jsonplaceholder.typicode.com'

const BASE1='http://localhost:4001/api'
export const api = {
    getAllPosts: async () => {
        //Requisição com Fecth
        // let res = await fetch(`${BASE}/posts`);
        // let json = await res.json();
        // return json;
        //Requisição com AXIOS
        const res=await axios.get(`${BASE}/posts`);
        // const phrases =await res.json();
        return res;


    },

    addNewPost: async (title: string, body: string, userId?: number) => {
        //Requisição com Fecth
        // let res = await fetch(`${BASE}/posts`, {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         title,
        //         body,
        //         userId: 1
        //     }),
        //     headers: {
        //         "content-type": "application/json"
        //     }
        // }

        // );
        // let json=await res.json();
        // return json;
        //Requisição com AXIOS
        let res=await axios.post(`${BASE}/posts`,{
            title, body, userId
        });
        return res.data
    },
    getAllPhrases: async () => {        
        //Requisição com AXIOS
       const headers= {
                    "content-type": "application/json"
                }        
        let res=await axios.get(`${BASE1}/phrases`, {headers});
        console.log('tenta')
        return res.data;
    },
    getAllContos: async () => {        
        //Requisição com AXIOS
       const headers= {
                    "content-type": "application/json"
                }        
        let res=await axios.get(`${BASE1}/phrases`, {headers});
        // console.log('tenta')
        return res;
    },
    deletephrase: async (id:number) => {       
        //Requisição com AXIOS
        let res=await axios.delete(`${BASE1}/phrases/${id}`);
        console.log('tenta')
        return res.data;
    },

    addNewPhrase: async (author: string, txt: string, id?: number) => {
        console.log('tentass'+author)       
        //Requisição com AXIOS
        const headers= { 
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        if(author){
            let res=await axios.post(`${BASE1}/phrases`,{
                author, txt,
            }, { headers });
            console.log('no model'+ JSON.stringify(res.data))
            return res.data
       }       
    }
}