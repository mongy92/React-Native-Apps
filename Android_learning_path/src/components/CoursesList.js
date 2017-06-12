import React,{Component} from 'react' ;
import {connect} from 'react-redux';
import {ListView,View} from 'react-native' ;
import ListItem from './ListItem';

class CoursesList extends Component{

    componentWillMount(){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.dataSource = ds.cloneWithRows(this.props.courses);

    }

    renderRow(course){
        return <ListItem course={course} />
    }


    render(){
        return(
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
             />
        );
    }
}

const mapStateToProps = (state) =>{
    return {courses: state.courses};
} 

export default connect(mapStateToProps)(CoursesList);