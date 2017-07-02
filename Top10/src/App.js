import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {View,Text} from 'react-native';
import reducers from './reducers';
import Router from './Router';

class App extends Component  {
    render(){
        return(
            <Provider store={createStore(reducers)}>
                    <Router />
            </Provider>
        );
    }
}

export default App;