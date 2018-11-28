import {combineReducers} from 'redux'
import weatherReducer from './weatherReducer'
import formReducer from './formReducer';


export default combineReducers({

    weather:weatherReducer ,
    form: formReducer   
})



/*     By default  the state looks like 
        
            state ={
                weather: {},
                form: {},
            }

            weather{} contains data stored by weather Reducer
            form{} contains data stored by formReducer
*/