import React ,{Component} from 'react' ;
import { View } from 'react-native';
import {Header,Button,Spinner,CardSection}from './components/common';
import firebase from 'firebase' ;
import LoginForm from './components/LoginForm';
class App extends Component{

    state = {loggedIn : null}

    
    componentWillMount(){
        firebase.initializeApp({
        apiKey: "AIzaSyChWKcbp0F1LIdzTwt6c8raH-QUJ-akK4w",
        authDomain: "authentication-7d4a0.firebaseapp.com",
        databaseURL: "https://authentication-7d4a0.firebaseio.com",
        projectId: "authentication-7d4a0",
        storageBucket: "authentication-7d4a0.appspot.com",
        messagingSenderId: "1020482804163"});


        firebase.auth().onAuthStateChanged( (user) => {
            if(user){
                this.setState({loggedIn:true});
            }else{
                this.setState({loggedIn:false});
            }

        });
    }

    renderContent(){
        switch (this.state.loggedIn){
            case true:
                return (
                <CardSection>
                    <Button onPress={() => firebase.auth().signOut()}
                    >Log out</Button>
                </CardSection>);
            case false:
                return <LoginForm />;
            default :
                return <Spinner  size='large'/>;
        }
    }
    

    render(){
        return(
            <View>
                <Header headerText = {"Authentication"} />
                {this.renderContent()}

            </View>
        );
    }
}
export default App;