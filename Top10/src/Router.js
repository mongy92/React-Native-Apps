import React,{Component} from 'react';
import {Actions,Router,Scene} from 'react-native-router-flux';
import Main from './components/Main';
import ShowMovies from './components/ShowMovies';
import ShowSeries from './components/ShowSeries';

class RouterComponent extends Component{
    render(){
        const {
            mainHeaderStyle,
            mainSceneStyle,
            listHeaderStyle,
            titleStyle} = styles;
        return(
            <Router sceneStyle={{paddingTop:56}} titleStyle={titleStyle} backTitle="Back" backgroundColor='#292929'>
                <Scene 
                    key="main" 
                    component={Main} 
                    title="TOP 10"  
                    navigationBarStyle={mainHeaderStyle} 
                    initial/>
                
                <Scene 
                    sceneStyle={{paddingTop:56,backgroundColor:'#292929'}}
                    key="moviesList"
                    component={ShowMovies}
                    title
                    navigationBarStyle={listHeaderStyle}/>

                <Scene 
                    sceneStyle={{paddingTop:56,backgroundColor:'#292929'}}
                    key="seriesList"
                    component={ShowSeries}
                    title
                    navigationBarStyle={listHeaderStyle}/>
            </Router>
        );
    }
}
const styles={
    mainHeaderStyle:{
        backgroundColor:'#292929',
        height:55,
        borderBottomWidth:1,
        borderBottomColor:'#fff',
    },
    titleStyle:{
        color:'white',
        fontSize:23,
        fontWeight:'bold',


    },
    listHeaderStyle:{
        backgroundColor:'orange',
        height:55
    },
}

export default RouterComponent;

