import React from 'react';
import { Scene, Router,Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeesList from './components/EmployeesList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 55,paddingBottom:15 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>
      <Scene key="main">
        <Scene 
          key="employeesList" 
          component={EmployeesList} 
          title="Employees" 
          initial
          rightTitle="Add"
          onRight={()=> Actions.employeeCreate()}
          />

        <Scene 
          key="employeeCreate"
          component={EmployeeCreate}
          title = "Create Employee"
        />
        <Scene 
          key="employeeEdit"
          component={EmployeeEdit}
          title="Edit Employee" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;