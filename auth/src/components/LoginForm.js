import React,{Component} from 'react' ;
import {Text} from 'react-native' ;
import {Button,Card,CardSection,UserInput,Spinner }from './common';
import firebase from 'firebase';


class LoginForm extends Component{
    state = {email:'', password:'',error:'',loading:false};

    onButtonPress(){
        
        const {email,password} = this.state;
        this.setState({error:'',loading:true});

        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
                .catch( ()=>{
                 firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(this.onLoginSuccess.bind(this))
                        .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginSuccess(){
        this.setState({
            email:'',
            password:'',
            error:'',
            loading:''
        });
    }

    onLoginFail(){
        this.setState({
           error:'Authentication Failed.' ,
           loading:false
        });
    }


    renderButton(){
        if(this.state.loading){
            return  <Spinner size="small"/>
        }
        return (<Button onPress={this.onButtonPress.bind(this)}>
             Log in
        </Button>);
    }

    render(){
        return (
            <Card>
                <CardSection>
                    <UserInput
                        placeholder = {"user@example.com"}
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                        label={'Email'}/>
                </CardSection>

                <CardSection> 
                        <UserInput
                        placeholder = {"password"}
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                        label={'Password'}
                        secureTextEntry
                        />
                </CardSection>

                <Text style={styles.errorTextStyle}>{this.state.error}</Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}
const styles ={
    errorTextStyle:{
        fontSize:20,
        color:'red',
        alignSelf:'center'
    }
}
export default LoginForm;