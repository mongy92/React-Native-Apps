import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';
import LoadingEmployeesReducer from './LoadingEmployeesReducer';

export default combineReducers({
    auth : AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeeReducer,
    spinner: LoadingEmployeesReducer
});