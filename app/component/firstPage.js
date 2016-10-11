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
import secondPage from './secondPage';

 class firstPage extends React.Component {
   	constructor(props) {
		super(props);
		this.state = {
			name: "123",
			age: null,
		}
	}
  	_openPage() {
		this.props.navigator.push({
      title: 'secondPage',
			component: secondPage,
			params: {
				name: this.state.name,
				age: this.state.age,
				changeMyAge: (age) => {
					this.setState({ age })
				}
			}
		})
	}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <Text style={styles.instructions} onPress={this._openPage.bind(this) }>
            secondPage
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  demo1(){
    
  }
}

const styles = StyleSheet.create({
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
});

export default firstPage;
