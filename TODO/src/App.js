import React,{Component} from 'react';
import {View} from 'react-native';
import Header from './components/Header';
import Todo from './components/Todo';

class App extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <Header/>
                <Todo/>
            </View>
        );
    }   
}
export default App;

