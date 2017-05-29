import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';


const Button = ({children,onPress}) =>{
    const {buttonStyle,buttonTextStyle} = styles;
    return(
        <TouchableOpacity 
            onPress={onPress}
            style={buttonStyle}>
                <Text style={buttonTextStyle}>
                    {children}
                </Text>
        </TouchableOpacity>
    );
}
const styles = {
    buttonStyle :{
        borderColor:'brown',
        borderWidth:1,
        borderRadius:50,
        flex:1,
        width:null,
        marginLeft:10,
        marginRight:10,
        alignSelf:'stretch',

    },
    buttonTextStyle:{
        color:'brown',
        fontSize : 18,
        fontWeight:'500',
        alignSelf:'center',
        paddingTop:10,
        paddingBottom:10
    }
}

export {Button};
