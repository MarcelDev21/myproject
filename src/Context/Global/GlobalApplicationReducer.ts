import { SET_TOKEN } from "../MesConstantes";

 export const stateInitial = {
    declaration: [],
    token: ""
}

const GlobalApllicationReducer = (state = stateInitial, action : any) => {
    switch (action.type) {
        case SET_TOKEN:
            return{
                ...state,
                token: action.data
            }
            
        default:
            return state
    }
}

export default GlobalApllicationReducer