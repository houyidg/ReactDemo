import React, {
	View,
	Text,
	TouchableOpacity
} from 'react-native';
import firstPage from './component/firstPage';//MyListView
import MyListView from './component/mListView';//MyListView
class Splash extends React.Component {
	_pageChange() {
		this.props.navigator.push({
			title: 'firstPage',
			component: firstPage
		})
	}
	_listView() {
	this.props.navigator.push({
		title: 'MyListView',
		component: MyListView
	})
	}
	_scrollView() {
		this.props.navigator.push({
			title: 'firstPage',
			component: firstPage
		})
	}
	_drawerLayoutAndroid() {
		this.props.navigator.push({
			title: 'firstPage',
			component: firstPage
		})
	}
	render() {

const styles = {
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
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
			<View style={{ flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF' }}>
				<Text style={styles.title}>Splash Page</Text>

				<TouchableOpacity onPress={this._pageChange.bind(this)}>
					<Text style={styles.instructions}>pageChange</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={this._listView.bind(this)}>
					<Text style={styles.instructions}>listView</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={this._scrollView.bind(this)}>
					<Text style={styles.instructions}>scrollView</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={this._drawerLayoutAndroid.bind(this)}>
					<Text style={styles.instructions}>drawerLayoutAndroid</Text>
				</TouchableOpacity>
			</View>
		);
	}
}


export default Splash;