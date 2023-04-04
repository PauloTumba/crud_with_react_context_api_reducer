import { ChangeEvent, useContext, useState } from "react";

type Props = {
    ondAdd:(author:string, txt:string) => void;
}
export const ContoForm = ({ondAdd}:Props) => {
   
    const [authorInput, setAuthorInput]=useState('');
    const [txtInput , setTxtInput] = useState('');

    const handleAddTitleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setAuthorInput(e.target.value);
    }
    const handleAddBodyChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        setTxtInput(e.target.value);
    }    
    const handleAddButton=async ()=>{

        console.log('onAdds '+authorInput)
       
        if(authorInput && txtInput){
            await ondAdd(authorInput,txtInput);       
        }
        else{
            alert('campos vazios')
        }        
    }
    
    return (        
        <fieldset>
            <legend>
                Adicionar Post
            </legend>
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