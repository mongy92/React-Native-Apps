import React,{Component} from 'react';
import {TextInput} from 'react-native';
class UserInput extends Component{
    render(){
        
        return(
                    <TextInput
                        style={styles.textInput}
                        placeholder=" >> Enter Your Task"
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'
                        onChangeText={this.props.onChangeText}
                        value = {this.props.value}
                        selectionColor='white'
                    />
        );
    }
}

const styles = {
    textInput:{
        backgroundColor:'#252525',
        color:'white',
        alignSelf:'stretch',
        padding:25,
        paddingTop:40,
        paddingRight:25,
        borderTopWidth:3,
        borderTopColor:'#ededed'
    }
}

export default UserInput;

