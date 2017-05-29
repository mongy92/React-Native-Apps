import React from 'react' ;
import {View,Text} from 'react-native';
import {Header} from './components/common';
import Counter from './components/Counter'

const App = () => {

    return(
        <View>
            <Header headerText={"Up-Down Counter"} />
            <Counter />
        </View>
    );
};

export default App;