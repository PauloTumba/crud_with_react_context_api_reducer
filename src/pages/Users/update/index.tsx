import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../contexts/ItemsProvider/usersContext';
import { allApi } from '../../../contexts/ItemsProvider/actions';
import { wait } from '@testing-library/user-event/dist/utils';
import { UserForm } from '../../../components/UserForm';
import { useNavigate } from 'react-router-dom';

export type Usuarioss = {

    id: number;
    author: string;
    txt: string;
}
export const UpdateUser = () => {

    // console.log('estou no update')
const { state, dispatch } = useContext(UserContext);
let users=state.users[0];
const [usuarios, setUsuarios] = useState<Usuarioss[]>([]);
const navigate = useNavigate();
  
    const handleUpdate = async(id: number) => {
        // dispatch({ type: 'DELETE_USER', payload: id });
       dispatch({
             type: 'DELETE_USER',
             payload: {
                 id
             }
         })       
    };

    

    const handleChange = async (author: string, txt: string, id:number=0) => {
        // console.log('tenho iss ' + author + 'txt ' + author)
        await allApi.updateUser(author, txt, id);
        dispatch({
            type: "UPDATE",
            payload: {
                id,
                author,
                txt
            },           
        })
        return navigate(-1);
    }
    return (
        <div>
            <h1>Update</h1>     
            <UserForm  ondAdd={handleChange} ></UserForm>   
        </div>
    )

}