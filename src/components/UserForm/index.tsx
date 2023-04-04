import { ChangeEvent, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

type Props = {
    ondAdd:(author:string, txt:string, id?:any) => void;
}
export const UserForm = ({ondAdd}:Props) => {
    
    let authorId=localStorage.getItem('id')
    let author1=localStorage.getItem('author')
    let authorTxt=localStorage.getItem('txt')
   
    const [authorInput, setAuthorInput]=useState<any | null>(author1);
    const [txtInput , setTxtInput] =useState<any | null>(authorTxt);
    const [idInput , setIdInput] = useState<any | null>(authorId);

      
    const location = useLocation();

    if(location.pathname!=='/users/update'){
        localStorage.setItem("id",'');
        localStorage.setItem("author",'');
        localStorage.setItem("txt",'');
    }
    const handleAddTitleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        console.log('está dando?')
        setAuthorInput(e.target.value);
    }
    const handleAddBodyChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        setTxtInput(e.target.value);
    }    
    const handleAddButton=async ()=>{

        console.log('onAdds '+author1)
       
        if((authorInput && txtInput)||author1){
            if(author1){
                await ondAdd(authorInput,txtInput, authorId); 
            }else{
                await ondAdd(authorInput,txtInput); 
            }
                 
        }
        else{
            alert('campos vazios')
        }        
    }    
    return (        
        <fieldset>
            <legend>
                Edit Post
            </legend>

            {authorId &&
              <input 
              name="id"
              type="number" 
              value={authorId} 
              readOnly              
              placeholder="Author"
              />
            }
            <input 
            name="author"
            type="text" 
            
            value={authorInput} 
            onChange={handleAddTitleChange}
            placeholder="Author"
            />
            <textarea 
                name="txt"
                value={txtInput}
                onChange={handleAddBodyChange}
                placeholder="Text"
            >                
            </textarea>
            <button onClick={handleAddButton}>Salvar</button>         
        </fieldset>
    );
}