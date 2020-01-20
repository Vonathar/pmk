import { combineReducers } from 'redux';
import activeEditor from './activeEditor'

const rootReducer = (combineReducers({
    activeEditor
}))

export default rootReducer;