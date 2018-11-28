import {createStore, applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

// ORDER OF THE MIDDLEWARES APPLIED MATTERS : thunkmiddleware should be applied first,otherwise thers chnce of bug

const store = createStore(
    rootReducer, 
    // initialState={weather:{},form:{}}
    applyMiddleware(
        thunkMiddleware,
        logger
    )
)
export default store 

/*    
    const store= createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            logger
        )
    )
*/