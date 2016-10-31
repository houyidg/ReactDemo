import React, {
	View,
	Text,
	TouchableOpacity
} from 'react-native';
import MyListView from './component/mListView';//MyListView
import firstPage from './component/firstPage';//MyListView
import propsStatus from './component/propsStatus';//MyListView
import netRequest from './component/netRequest';//MyListView
// import progressBarView from './component/progressBarView';//MyListView
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
	_progressBar() {
		this.props.navigator.push({
			title: 'MyListView',
			component: MyListView
		})
	}
	_drawerLayoutAndroid() {
		this.props.navigator.push({
			title: 'firstPage',
			component: firstPage
		})
	}
	propsStatus() {
		this.props.navigator.push({
			title: 'propsStatus',
			component:propsStatus
		})
	}
	netRequest() {
		this.props.navigator.push({
			title: 'netRequest',
			component:netRequest
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

				<TouchableOpacity onPress={this.propsStatus.bind(this)}>
					<Text style={styles.instructions}>propsStatus</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={this._progressBar.bind(this)}>
					<Text style={styles.instructions}>progressBar</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={this.netRequest.bind(this)}>
					<Text style={styles.instructions}>netRequest</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={this._drawerLayoutAndroid.bind(this)}>
					<Text style={styles.instructions}>drawerLayoutAndroid</Text>
				</TouchableOpacity>
			</View>
		);
	}
}


export default Splash;