import { allApi } from "./actions";
import { Action, State } from "./data";

export const userReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD_USER':

  
    // console.log('adding '+ action.payload.author)

    // if(action.payload?.author){
    //   allApi.addUser(action.payload.author, action.payload.txt);
       
    // }
   
    return { ...state, users: [...state.users, action.payload] };
    case 'LIST':
      // console.log('no list '+ JSON.stringify(action.payload))
         return { ...state, users: [ action.payload] }
        // return { ...state };
    // case 'DELETE_USER':
    //   return {
    //     ...state,
    //     users: state.users.filter((user) => user.id !== action.payload),
    //   };

    case 'UPDATE':
    return { ...state, users: [...state.users, action.payload] };

    case 'UPDATE_PAGE':
      // console.log('uodate page '+ JSON.stringify(action.payload))
    return { ...state, users: [...state.users, action.payload] };

    case 'DELETE_USER':
      if (action.payload.id) {           
            //  let res=allApi.deleteConto(action.payload?.id);   
            //  let users=allApi.loadUsers();

            // console.log('o q vem aqui? '+ JSON.stringify(action.payload))

            //  return { ...state, users: [...state.users, action.payload] }           
      }
        
       
        // return { ...state, users: [...state.users, action.payload] } 
       return state

        // case "DELETE_USER":
        //   const filteredData = state.users.filter(
        //     (item) => item.id !== action.payload
        //   );
        //   console.log('delete '+JSON.stringify(filteredData))
        //   return {
            
        //     ...state,
        //     users: filteredData,
        //   };


      //   case 'DELETE_USER':
      // const filteredUsers = state.users.filter(
      //   (user) => user.id !== action.payload
      // );

      // console.log('filtro '+filteredUsers)
      // // return { ...state, users: filteredUsers };
      // return { ...state, users: [...state.users, action.payload[0]] }

       
      //   break
      
    default:
      return state 
  }
};