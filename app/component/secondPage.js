/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {
  AppRegistry,
  Platform,
  Component,
  TouchableOpacity,
  StyleSheet,
  Navigator,
  View,
  Text
} from 'react-native';
import firstPage from './firstPage';
 class secondPage extends React.Component {
  render() {
    const styles = {
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
};
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TouchableOpacity style={{ flexDirection: 'row' }} 
            >
          <Text style={styles.instructions} onPress={this.demo1.bind(this) }>
            Demo1
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  demo1(){
    
  }
}


export default secondPage;

