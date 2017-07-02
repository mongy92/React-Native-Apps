import React,{Component} from 'react';
import {View,Image} from 'react-native';
import {RoundButton} from './common';
import {Actions} from 'react-native-router-flux';

class Main extends Component{
    render(){
        const {backgroundImageStyle,containerStyle} = styles;
        return(
            <View style={{ flex:1}}>
                <Image source={require('../img/main.jpg')} style={backgroundImageStyle}>
                    <View style={containerStyle}>
                        <RoundButton  

                            style={{ backgroundColor:'rgba(0,118,254,0.1)'}}
                            onPress={()=>{Actions.moviesList({title:"TOP 10 MOVIES"})}}>
                            MOVIES
                        </RoundButton>
                        <RoundButton 
                        style={{ backgroundColor:'rgba(10,90,60,0.4)'}}
                        onPress={()=>{Actions.seriesList({title:"TOP TV SHOWS"})}}>
                            SERIES
                        </RoundButton>
                    </View>
                </Image>
            </View>
            );
    };
} 

const styles = {
    backgroundImageStyle :{
        flex:1,
        alignSelf:'stretch',
        width:null,
        justifyContent:'center'
    },
    containerStyle:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around'
    },
    logoImageStyle:{
        
    }
}

export default Main;

                