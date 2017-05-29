import React,{Component} from 'react' ;
import {Card,CardSection,Button}from './common';
import{Text,View} from 'react-native';
import CounterBody from './CounterBody';

class Counter extends Component {
    state = {count:0};
    
    
    upCounter(){
        return this.setState({count:this.state.count+1}) ;
    }
    downCounter(){
        return this.setState({count:this.state.count-1}) ;
    }
    resetCounter(){
        return this.setState({count:0}) ;
    }
    

    
    render(){
        return(
            <View>
                <Card>
                    <CardSection >
                        <CounterBody number={this.state.count}/>
                    </CardSection>
                    <CardSection>
                        <Button onPress={()=> this.downCounter()}>DOWN</Button>
                        <Button onPress={()=> this.upCounter()}>UP</Button>
                    </CardSection>

                    <CardSection >
                        <Button onPress={()=> this.resetCounter()}>RESET</Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

export default Counter;