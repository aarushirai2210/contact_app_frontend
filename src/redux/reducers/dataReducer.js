const initialState = {
    contacts:[]
}
export default function(state=initialState,action){
    switch(action.type)
    {   case "SET_CONTACT":
            return {...state,contacts:action.payload}
        case "SET_NEW_CONTACT":
            return {...state,contacts:[...state.contacts,action.payload]}
        default:
            return state 
    }
}