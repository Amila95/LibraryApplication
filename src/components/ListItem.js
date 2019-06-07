import React, {Component} from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '../components/action';


class ListItem extends Component{
    componentWillUpdate(){
        LayoutAnimation.spring();
    }
    renderDescription(){
         if( this.props.expanded){
            return(
                <CardSection>
                <Text style={{flex:1}}>{this.props.library.item.description}</Text>
                </CardSection>
            )
         }
    }
    render(){
        const { titleStyle} = styles;
        const { id, title} = this.props.library.item;
        return(
            <TouchableWithoutFeedback
            onPress={()=>this.props.selectLibrary(this.props.library.item.id)}
            >
                <View>
            <CardSection>
                
            <Text style={titleStyle}>{this.props.library.item.title}</Text>
        </CardSection>
        {this.renderDescription()}
        </View>
        </TouchableWithoutFeedback>
        ); 
    }
}
const styles = {
    titleStyle:{
        fontSize:15,
        paddingLeft:10
    }
};
mapStateToProps= (state, ownProps) =>{
    const expanded = state.selectedLibraryId === ownProps.library.item.id;
    return{
        expanded
    }
};


export default connect(mapStateToProps,actions)(ListItem);