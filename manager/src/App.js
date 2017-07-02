import React,{Component} from 'react';
import {Provider}from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import firebase from 'firebase' ;
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';


class App extends Component{
    componentWillMount(){
        const config = {
            apiKey: "AIzaSyBAYcxz5Uevk6njgBt1IN-NIkOu34v7CGs",
            authDomain: "manager-a4eb2.firebaseapp.com",
            databaseURL: "https://manager-a4eb2.firebaseio.com",
            projectId: "manager-a4eb2",
            storageBucket: "manager-a4eb2.appspot.com",
            messagingSenderId: "637284074398"
    };
        firebase.initializeApp(config);
    }

    render(){
        return(
            <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
                <Router/>
            </Provider>
        );
    }
}

export default App;