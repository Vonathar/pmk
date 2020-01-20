import {
    combineReducers
} from 'redux';
import activeEditor from './tagEditor/activeEditor'
import finalTag from './tagEditor/finalTag'

const rootReducer = (combineReducers({
    activeEditor,
    finalTag
}))

export default rootReducer;