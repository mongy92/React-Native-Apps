import { EMPLOYEES_LOADING , EMPLOYEES_FETCH_SUCCESS} from '../actions/types';

const INITIAL_STATE = { loading:false};

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case EMPLOYEES_LOADING:
            return {...state, loading:true};
        case EMPLOYEES_FETCH_SUCCESS:
            return {...state, loading:false};
        default:
            return state;
    }
};