
import P from 'prop-types';

import {   initialState } from "./data";
import { ContosContext, mainReducer } from './context';
import {  useReducer } from 'react';
type Props = {
    children: React.ReactNode
  };
 
export const ContosProvider:React.FC<Props>=({children})=>{    
  const [state, dispatch] = useReducer(mainReducer, initialState) 
  
  
  return(
      <ContosContext.Provider value={{state, dispatch}}>
          {children}
      </ContosContext.Provider>
  )
}



// export function useReducer(_mainReducer: (state: import("./data").initialStateType, action: import("./types").reducerActionType) => { contos: import("./data").Conto[]; }, initialState: { contos: import("./data").Conto[]; }): [any, any] {
//   throw new Error('Function not implemented.');
// }
// para js
// ContosProvider.propTypes={
//     children:P.node.isRequired
// }