import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';
import {CardSection,Spinner} from './common';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {

    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

      renderListView(){
        if(this.props.loading){
            return (
              <CardSection style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <Spinner size={'large'} />
              </CardSection>
            );
        }
        return (
         <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
      />
        );
    }

  render() {
    return (
      this.renderListView()
    );
  }
}

const mapStateToProps = state => {
  const {loading} = state.spinner;
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees , loading};
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);