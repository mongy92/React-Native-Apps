import React from 'react';
import {View,ext,ScrollView} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Header} from './components/common';
import reducers from './reducers';
import CoursesList from './components/CoursesList';

const App = ()=>{
    return (
        <Provider store={createStore(reducers)}>
            <View>
                <Header headerText={"Android Learning Path Courses"}/>
                <ScrollView>
                    <CoursesList />
                </ScrollView>
            </View>
        </Provider>
    );
};

export default App;