import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/ItemsProvider/usersContext';
import { allApi } from '../../contexts/ItemsProvider/actions';
import { wait } from '@testing-library/user-event/dist/utils';
import { UserForm } from '../../components/UserForm';
import { Link } from 'react-router-dom';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
export type Usuarioss = {

    id: number;
    author: string;
    txt: string;
}
export const User = () => {
const { state, dispatch } = useContext(UserContext);
let users=state.users[0];
const [usuarios, setUsuarios] = useState<Usuarioss[]>([]);
// const [item, setItem] = useState<Usuarioss[]>([]);
     const handleDelete1 = async(id: number) => {
        // dispatch({ type: 'DELETE_USER', payload: id });
       dispatch({
             type: 'DELETE_USER',
             payload: {
                 id
             }
         })       
    };

    const navigate = useNavigate();

    const update_page = async(id: number) => {
        // dispatch({ type: 'DELETE_USER', payload: id });
        let json = await allApi.getUser(id)
        console.log('upd '+JSON.stringify(json.author));

            localStorage.setItem("id",json.id);
            localStorage.setItem("author",json.author);
            localStorage.setItem("txt",json.txt);
        // const  setToLocalStorage= (id:number, author:string, txt:string)=>{

        //     // localStorage.setItem("id",JSON.stringify(json.id));
        //     // localStorage.setItem("author",JSON.stringify(json.author));
        //     // localStorage.setItem("txt",JSON.stringify(json.txt));

        //     localStorage.setItem("id",json.id);
        //     localStorage.setItem("author",json.author);
        //     localStorage.setItem("txt",json.txt);
        // }

        

        console.log('staorage + '+ localStorage.getItem('author') )

       dispatch({
             type: 'UPDATE_PAGE',
             payload: {
                 id: id,
                 author: json.author,
                 txt: json.txt
             }
         })    
         return navigate("/users/update");
            
    };

    const handleUpdate = async(id: number) => {
        // dispatch({ type: 'DELETE_USER', payload: id });
       dispatch({
             type: 'DELETE_USER',
             payload: {
                 id
             }
         })       
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const listUsers = async() => {
        // dispatch({ type: 'DELETE_USER', payload: id });
        let json = await allApi.loadUsers1()

        // console.log('json '+json);
       await dispatch({
             type: 'LIST',
             payload: {
                id:users.id,
                author:users.author,
                txt:users.txt
             }            
         })       

        setUsuarios(json);
         
    };
    const handleDelete = async (id: number) => {
        try {
          await allApi.deleteUser(id);
          dispatch({
                type: 'DELETE_USER',
                payload: {
                    id
                }
            })
        let users
         users=  await allApi.loadUsers1(dispatch);
        // console.log('os users aqu '+JSON.stringify(users))
        dispatch({
                type: 'LIST',
                payload: users
            }) 

        let usuarios= await listUsers();
        console.log('vim ' + usuarios);
        
        } catch (error) {
          console.error(error);
        }
      };
    useEffect(() => {
        setTimeout(()=>{
            allApi.loadUsers(dispatch);
            // allApi.loadUsers1(dispatch);
        },1000)
       
        // console.log('useeffect '+JSON.stringify(state.users[0]));        
    }, [dispatch])

    useEffect(() => {
        setTimeout(()=>{
            allApi.loadUsers1(dispatch);
            console.log('nada? ')
            // allApi.loadUsers1(dispatch);
        },1000)
       
        // console.log('useeffect '+JSON.stringify(state.users[0]));        
    },[dispatch])


    useEffect(()=>{
        listUsers()
    },[ listUsers])

    // const handleDelete = (id:number) => {
    //     dispatch({ type: 'DELETE_USER', payload: id });
    // };


    const handleChange = async (author: string, txt: string, id?:number) => {
        console.log('tenho iss ' + author + 'txt ' + author)
        await allApi.addConto(author, txt);
        dispatch({
            type: "ADD_USER",
            payload: {
                author,
                txt
            },           
        })
    }
    return (
        <div>
            {/* <h3>Tema: {users?users.author==='opa':'nada'}</h3> */}
            <h1>oi</h1>     
            <UserForm  ondAdd={handleChange} ></UserForm>           
            <table>
                <thead key='oo'>
                    <tr>
                        <th>id</th>
                        <th>author</th>
                        <th>text</th>
                        <th>opções</th>
                        {/* <h1>{state}</h1> */}
                    </tr>

                </thead>
                <tbody>
                    {/* {state.users.map((item, index)=>( */}
                    {/* {Array.isArray(users)&& */}
                        {usuarios.map((item, index) => (

                            // <li key={item.id}>{item.author}</li>
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.author}</td>
                                    <td>{item.txt}</td>
                                    <button onClick={()=>handleDelete(item.id)}>delete</button>
                                    <button onClick={()=>update_page(item.id)}>update</button>                                   
                                    {/* <button><Link to={`/users/update/${item.id}`} >update</Link></button>  */}
                                    {/* <button><Link to={`/users/update`} >update</Link></button>  */}
                                   
                                </tr>
                        ))} 
                </tbody>
            </table>

        </div>
    )

}