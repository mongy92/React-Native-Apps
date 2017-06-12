import {combineReducers} from 'redux';
import CoursesReducer from './CoursesReducer';
import SelectedReducer from './SelectedReducer'

export default combineReducers ({
    courses : CoursesReducer,
    selected: SelectedReducer
});