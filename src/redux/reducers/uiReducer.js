const initialState = {
    loading:false,
    create_error:"",
    list_error:"",
    create_success:""
}
export default function(state=initialState,action){
    switch(action.type)
    {   case 'SET_CREATE_ERROR':
            return {...state,create_error:action.payload}
        case 'SET_LIST_ERROR':
            return {...state,list_error:action.payload}
        case 'SET_CREATE_SUCCESS':
            return {...state,create_success:action.payload}
        default:
           return state 
    }
}