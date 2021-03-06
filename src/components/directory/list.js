import React, {Component} from 'react';
import {Container, Header, Left, Body, Right, Button, Title,} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native'



const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

export default class List extends Component {


  render() {
    return (
      <TouchableWithoutFeedback onPress={()=>{this.props.redirect('TagEditor')}}>
        <View style={{flexDirection:'row', width:'95%', alignSelf:'center'}} >
          <View style={{flex:1, justifyContent:'center', }}>
            <Icon style={{alignSelf:'center'}} name={'chevron-right'} color={'white'} size={25}/>
          </View>
          <View style={{flex:9}}>
            <View style={styles.listStyle}>
              <Text style={styles.title}>{this.props.name}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>

    );
  }
}


const styles = StyleSheet.create({
  listStyle: {
    borderBottomColor: "#fff",
    paddingBottom:10,
    alignSelf:'center',
    borderBottomWidth:2,
    width:'90%',
    marginBottom:20
  },
  title: {
    color:'white',
    fontSize:20,
    alignSelf:'center',
    fontFamily: 'HelveticaNeue',
    fontWeight:'bold'
  }

})