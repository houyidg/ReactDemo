/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component,
  StyleSheet,
  Navigator,
  View,
  Text
} from 'react-native';


class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     showText: true
    };
    setInterval(()=>{
      this.setState({showText: !this.state.showText});
    },1000);
  }
  render() {
    //根据当前的标记 决定是否显示text内容
    let display = this.state.showText? this.props.text:'';
    return (
     <Text>{display}</Text>
    );
  }
}

class propsStatus extends React.Component{
  render(){
    return (
      <View>
        <Blink text='I like s y h!'/>
        <Blink text='Do u like it!'/>
        <Blink text='My life is full of beautiful!'/>
        <Blink text='I like s y h!'/>
        <Blink text='I like s y h!'/>
      </View>
    );
  }
}

export default propsStatus;
