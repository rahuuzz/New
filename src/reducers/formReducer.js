const initialState={
    lat:'',
    lon:''
}

function formReducer(state=initialState, action){
    switch(action.type){
        case 'SET_FORM_DATA':
            return action.input
        default:
            return state
    }
    

}

export default formReducer