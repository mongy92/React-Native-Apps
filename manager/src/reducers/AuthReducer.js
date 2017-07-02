import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    SHOW_SPINNER} from '../actions/types';

const INIT_STATE = {
    email : '',
    password : '',
    user : null,
    error : '',
    loading:false};


export default (state = INIT_STATE,action) => {
    switch(action.type){
        case EMAIL_CHANGED:
            return {...state, email:action.payload};
        case PASSWORD_CHANGED:
            return {...state, password:action.payload};
        case SHOW_SPINNER:
            return {...state, loading:true, error:'' };
        case LOGIN_USER_SUCCESS:
            return {...state, ...INIT_STATE ,user:action.payload};
        case LOGIN_USER_FAIL:
            return {...state, error:'AUTHENTICATION FAILED', password:'',loading:false};
        default :
            return state;
    }
};