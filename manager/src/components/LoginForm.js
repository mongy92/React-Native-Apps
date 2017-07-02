import React,{Component} from 'react';
import {Text} from 'react-native';
import {Card,CardSection,Button,UserInput,Spinner} from './common';
import {connect} from 'react-redux';
import {emailChanged,passwordChanged,loginUser} from '../actions';

class LoginForm extends Component{

    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    onButtonPress(){
        const {email,password} = this.props;
        this.props.loginUser({email,password});
    }
    renderButton(){
        if(this.props.loading){
            return <Spinner size={'large'} />
        }
        return (
             <Button
                 onPress={this.onButtonPress.bind(this)}>
                      Login
            </Button>
        );
    }

    render(){
        return(
            <Card style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <CardSection style={{borderTopWidth:1,borderColor:'#ddd'}}>
                    <UserInput
                        label={'Email'}
                        placeholder={'email@gmail.com'}
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                     />
                </CardSection>
                    
                <CardSection>
                    <UserInput
                        label={'Password'}
                        placeholder={'password'}
                        secureTextEntry
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                
                <Text style={styles.testErrorStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}
const mapStateToProps = state =>{
    const {email,password, error,loading} = state.auth;
    return{email, password, error,loading};
};

const styles = {
    testErrorStyle :{
        fontSize : 20,
        color:'red',
        alignSelf : 'center'
    }
}
export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LoginForm);