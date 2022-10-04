import React from "react";
import styled from "styled-components";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MenuItem from "./MenuItem";

// This is to get the screenHeight of the device the user will use
const screenHeight = Dimensions.get("window").height;

// Here started the component using class instead of function
class Menu extends React.Component {
	state = {
		// here I'm using the dynamic value of the heigh of the user's screen
		top: new Animated.Value(screenHeight),
	};
	componentDidMount() {
		Animated.spring(this.state.top, {
			toValue: 0,
			useNativeDriver: false,
		}).start();
	}
	// 2 - created the function toggleMenu to activate the close buttom.
	//This function uses the Animated library and animate to the value 900, the inicial state, closed is the value 0.
	toggleMenu = () => {
		Animated.spring(this.state.top, {
			toValue: screenHeight,
			useNativeDriver: false,
		}).start();
	};

	render() {
		return (
			<AnimatedContainer style={{ top: this.state.top }}>
				<Cover>
					<Image source={require("../assets/background2.jpg")} />
					<Title>Pedro Elton</Title>
					<Subtitle>Mobile DEV, UI & UX Designer</Subtitle>
				</Cover>
				<TouchableOpacity
					onPress={this.toggleMenu}
					style={{
						position: "absolute",
						top: 137,
						left: "50%",
						marginLeft: -22,
						zIndex: 1,
					}}
				>
					<CloseView>
						<Ionicons name="ios-close" size={32} color="#546bfb" />
					</CloseView>
				</TouchableOpacity>
				<Content>
					<Wrapper>
						{items.map((item, index) => (
							<TouchableOpacity key={index}>
								<MenuItem
									icon={item.icon}
									title={item.title}
									text={item.text}
								/>
							</TouchableOpacity>
						))}
					</Wrapper>
				</Content>
			</AnimatedContainer>
		);
	}
}

export default Menu;

const Image = styled.Image`
	position: absolute;
	width: 100%;
	height: 100%;
`;

const Title = styled.Text`
	margin-top: 20px;
	color: white;
	font-size: 24px;
	font-weight: 600;
`;

const Subtitle = styled.Text`
	font-size: 14px;
	color: rgba(255, 255, 255, 0.7);
	margin-top: 8px;
`;

const Container = styled.View`
	position: absolute;
	background: white;
	align-self: center;
	min-height: 100%;
	width: 100%;
	z-index: 100;
	border-radius: 10px;
	overflow: hidden;
`;

const CloseView = styled.View`
	width: 44px;
	height: 44px;
	border-radius: 22px;
	background: white;
	justify-content: center;
	align-items: center;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
	height: 160px;
	background: black;
	justify-content: center;
	align-items: center;
`;

const Content = styled.Text`
	height: ${screenHeight};
	background: #f0f3f5;
`;

const Wrapper = styled.View`
	padding: 50px;
`;

const items = [
	{
		icon: "ios-settings",
		title: "Account",
		text: "Settings",
	},
	{
		icon: "ios-card",
		title: "Billing",
		text: "Payments",
	},
	{
		icon: "ios-compass",
		title: "Learn React",
		text: "Start course",
	},
	{
		icon: "ios-exit",
		title: "Log out",
		text: "See you soon!",
	},
];
