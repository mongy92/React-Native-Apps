import React,{Component} from 'react';
import {View,Text} from 'react-native';

class Header extends Component{

    render(){
        const {header,headerTextStyle} = styles;
        return(
                <View style={header}>
                    <Text style={headerTextStyle}>TODO TASKS</Text>
                </View>);
    }            
}


const styles = {
    container:{
        flex:1
    },
    header:{
        backgroundColor:'#007aff',
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:8,
        borderBottomColor:'#ddd'
    },
    headerTextStyle:{
        color:'white',
        fontSize:20,
        padding:25,
        fontWeight:'bold'
    }
}

export default Header;

