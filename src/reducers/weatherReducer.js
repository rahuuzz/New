const initialState = {
        code:'',
        location:'',
        main:{},
        weather:[]
}

function weatherReducer(state= initialState, action){
    switch(action.type){
        case 'SET_WEATHER_DATA':
            return action.data

        default:
            return state
    }

}

export default weatherReducer

