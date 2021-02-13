import React from 'react';
import {
	FlatList,
	Image,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
// import LoadingIcon from "../components/LoadingIcon";
// import Icon from '../components/Icon';
// import * as MountainActions from "../store/actions/mountainsActions";
// import { bindActionCreators, compose } from "redux";
// import { connect } from "react-redux";
// import { firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

const styles = StyleSheet.create({
	mountainContainer: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: "#efefef",
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderWidth: 0.5,
		borderTopColor: "#aaa",
		borderBottomColor: "#aaa",
	},
	mountainImg: {
		borderRadius: 40,
		width: 80,
		height: 80,
		borderColor: "#aaa",
		borderWidth: 1,
		marginRight: 15,
	},
	mountainTitle: {
		color: "#000",
		fontSize: 22,
		lineHeight: 28,
		flexGrow: 2,
	},
	mountainArrow: {
		color: "#000",
		fontSize: 30,
		marginBottom: -3,
	}
});

const MOUNTAINS = [
	{
		name: 'Eldora Mountain',
		region: 'Nederland, CO',
		iconPath: 'https:/hosting.someurl.com/pixelimages/dfklnalefnalk;fea;lfjae;lfja;lwejf'
	},
	{
		name: 'Wolf Creek',
		region: 'Pagosa Springs, CO',
		iconPath: 'https:/hosting.someurl.com/pixelimages/dfklnalefnalk;fea;lfjae;lfja;lwejf'
	},
	{
		name: 'Copper Mountain',
		region: 'Silverthorns, CO',
		iconPath: 'https:/hosting.someurl.com/pixelimages/dfklnalefnalk;fea;lfjae;lfja;lwejf'
	},
	{
		name: 'Arapahoe Basin',
		region: 'Aspen, CO',
		iconPath: 'https:/hosting.someurl.com/pixelimages/dfklnalefnalk;fea;lfjae;lfja;lwejf'
	},
	{
		name: 'Cook Ski Resort',
		region: 'Aspen, CO',
		iconPath: 'https:/hosting.someurl.com/pixelimages/dfklnalefnalk;fea;lfjae;lfja;lwejf'
	},
	{
		name: 'Loveland Resort',
		region: 'Loveland, CO',
		iconPath: 'https:/hosting.someurl.com/pixelimages/dfklnalefnalk;fea;lfjae;lfja;lwejf'
	},
	{
		name: 'Vail Resort',
		region: 'Vail, CO',
		iconPath: 'https:/hosting.someurl.com/pixelimages/dfklnalefnalk;fea;lfjae;lfja;lwejf'
	},
	{
		name: 'Purgatory',
		region: 'Durango, CO',
		iconPath: 'https:/hosting.someurl.com/pixelimages/dfklnalefnalk;fea;lfjae;lfja;lwejf'
	},
	{
		name: 'Keystone',
		region: 'Aspen, CO',
		iconPath: 'https:/hosting.someurl.com/pixelimages/dfklnalefnalk;fea;lfjae;lfja;lwejf'
	},
];

const MountainList = (props) => {
	const { navigation } = props;
// useEffect(() => {
	// props.getMountains();
// }, [])

	return (
		<FlatList
			data={MOUNTAINS}
			keyExtractor=  {(item, idx) => idx.toString()}
			renderItem={(item, idx) => (
				<TouchableOpacity onPress={() => navigation.navigate('Mountain Details', { name: item.item.name })}>
					<View style={styles.mountainContainer}>
						{/* <Image source={{ uri: "/assets/images/mountains/arapahoe_basin.jpg" }} /> */}
						<Text style={styles.mountainTitle}>
							{item.item.name}
						</Text>
						{/* <Icon
							name={Platform.OS === "ios" ? "ios-arrow-forward" : "md-arrow-forward"}
							style={styles.mountainArrow}
						/> */}
					</View>
				</TouchableOpacity>
			)}
		// 		<Button
		// 	title="Go to Details"
		// 	onPress={() => navigation.navigate('Mountain Details')}
		/>
	);
};

		// return !isLoaded(this.props.mountains) ? <LoadingIcon/> :
		// 	isEmpty(this.props.mountains) ? <Text>Mountains List Is Empty</Text> :
		// 		<FlatList
		// 			data={this.props.mountains}
		// 			keyExtractor={(item, idx) => idx.toString()}
		// 			renderItem={(item, idx) => (
		// 				<TouchableOpacity onPress={() => this._onPress(item.item)}>
		// 					<View style={styles.mountainContainer}>
		// 						<Image source={{uri: "/assets/images/mountains/arapahoe_basin.jpg"}}/>
		// 						<Text style={styles.mountainTitle}>
		// 							{item.item.name}
		// 						</Text>
		// 						<Icon
		// 							name={Platform.OS === "ios" ? "ios-arrow-forward" : "md-arrow-forward"}
		// 							style={styles.mountainArrow}
		// 						/>
		// 					</View>
		// 				</TouchableOpacity>
		// 			)}
		// 		/>;

	// _onPress = (mountain) => {
	// 	this.props.navigation.navigate("Details", {mountain});
	// }

// const mapStateToProps = state => ({
// 	loading: state.mountains.loading,
// 	mountains: state.firestore.ordered.mountains,
// });

// const mapDispatchToProps = dispatch => bindActionCreators(MountainActions, dispatch);

// export default compose(
// 	firestoreConnect(['mountains']),
// 	connect(mapStateToProps, mapDispatchToProps),
// )(Mountains);
export default MountainList;