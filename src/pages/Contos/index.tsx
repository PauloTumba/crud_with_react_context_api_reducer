import { useContext, useEffect, useState } from "react"
import { ContosContext, useContoList } from "../../contexts/ContosProvider/context"
import { allApi } from "../../contexts/ContosProvider/actions";
import { ContoForm } from "../../components/contoForm";
export type Contoss = {

    id: number;
    author: string;
    txt: string;
}
export const Contos = () => {
    const states = useContext(ContosContext);
    const { state, dispatch } = states
    const [list, dispatchList] = useContoList();
    const [contos, setContos] = useState<Contoss[]>([]);

    useEffect(() => {
        // loadContos(dispatch)
        listContos(dispatch)
    }, [dispatch])

    const listContos = async (dispatch?: any) => {
        let json = await allApi.loadContos()
        let id
        let author
        let txt
        for (let index in json) {
            id = [JSON.stringify(json[index].id)]
            author = [JSON.stringify(json[index].author)]
            txt = [JSON.stringify(json[index].txt)]

            dispatch({
                type: 'LIST',
                // data:todos.,
                payload: {
                    id: id,
                    author: author,
                    txt: txt
                }
                , action: ''
            })
        }
        await setContos(json);
    }
    const deleteConto = async (id: number) => {
         await dispatch({
            type: 'DEL',
            payload: {
                id,
            },
            action: ''
        })

        console.log('chegamos '+id)

       if(id!==null){
        return listContos(dispatch)
       }
        // listContos(dispatch)
    }
    const handleAuthorChange = async (author: string, txt: string) => {
        console.log('tenho iss ' + author + 'txt ' + author)
        await allApi.addConto(author, txt);
        dispatch({
            type: "ADD",
            payload: {
                author,
                txt
            },
            action: ''
        })
        listContos(dispatch)
    }
    return (
        <div>
            <h2>{states.state.author} ess</h2>
            <ContoForm ondAdd={handleAuthorChange}  ></ContoForm>
            <br />
            <br />
            {/* <h2>{states.state.contos}</h2> */}
            {/* <button onClick={() => allApi.loadContos(dispatch)}>load</button> */}
            {/* <div>grgr</div> */}
            {/* {state.contos.map((item, index) => (   */}
            {contos.map((item, index) => (
                <div key={item.id}>
                    <tr>
                        <td >{item.id}</td>
                        <br />
                        <br />
                        <td >{item.author}</td>
                        <button onClick={() => deleteConto(item.id)}>Deletar</button>
                    </tr>
                </div>
            ))}
        </div>)
}