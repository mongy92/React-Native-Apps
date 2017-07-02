import React, {Component} from 'react' ;
import {Picker,Text,View} from 'react-native';
import {CardSection,UserInput} from './common';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';

class EmployeeForm extends Component{


    render(){
        return(
            <View>
                <CardSection>
                    <UserInput
                        label="Name"
                        placeholder="Enter Name"
                        onChangeText={value => this.props.employeeUpdate({prop:'name', value})}
                        value = {this.props.name}
                        />
                        
                </CardSection>

                <CardSection>
                    <UserInput 
                    label="Phone"
                    placeholder="Enter Mobile Number"
                    onChangeText={value => this.props.employeeUpdate({prop:'phone', value})}
                    value ={this.props.phone}
                    />
                </CardSection>

                <CardSection style={{flexDirection:'column'}}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                    onValueChange={value => this.props.employeeUpdate({prop:'shift', value})}
                    selectedValue={this.props.shift}>
                        <Picker.Item label="Saturday" value="Saturday"/>
                        <Picker.Item label="Sunday" value="Sunday"/>
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thrusday" value="Thrusday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                    </Picker>
                </CardSection>
            </View>
        );
    }
}
const mapStateToProps = state =>{
    const {name , phone, shift} = state.employeeForm;
    return{name, phone, shift};
}

const styles = {
    pickerTextStyle : {
        fontSize:18,
        paddingLeft:20
    }
};

export default connect(mapStateToProps,{employeeUpdate})(EmployeeForm);