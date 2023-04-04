import * as types from "./types";
import { Conto } from "./data";
import { allApi } from "./actions";

export const ContosReducer = (state: Conto[], action: types.reducerActionType) => {
    // let newState=[...state]
    switch (action.type) {
        case types.actions.LIST: {
            console.log('nao ' + JSON.parse(action.payload.id))
            return { ...state, contos: [action.payload] };
        }
        //    break   
        case types.actions.DEL:
            if (action.payload?.id) {
                // return {...state,  contos:[action.payload.id]};
                if (action.payload?.id) {
                  allApi.deleteConto(action.payload?.id);
                    // console.log('hhhhhh ' + res);
                    // return { ...state, contos: [action.payload] };
                }
            }
            break;
        case 'ADD':

            console.log('foi? ' + action.payload.txt)
            if (action.payload?.id) {
                // allApi.addConto(action.payload?.author, action.payload?.txt);
                return { ...state, contos: [action.payload] };
            }
            break;
    }
    return { ...state }
}
