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
import NetUtil from "../util/NetUtil";

class netRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     dataText: 'aaa'
    };
  }
 _getJsonData(){
    NetUtil.get("https://facebook.github.io/react-native/movies.json",(ret)=>{
      //回调的结果处理;
      let title = ret.title;
       this.setState({ dataText:  title+"" });
  });
 }

  render() {
    this._getJsonData();
    return (
     <Text >{this.state.dataText}</Text>
    );
  }

   _onBack() {
        if (this.props.page === "Main") {
            EventListener.trigger("Drawer", "Open");
        } else {
            EventListener.trigger("RecordStop");
            singleton.getNav().pop();
        }
    }
}


export default netRequest;
