import { Logs } from "expo";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";
import Course from "./components/Course";
import { NotificationIcon } from "./components/Icons";
import Logo from "./components/Logo";
import Menu from "./components/Menu";

export default function App() {
	return (
		<Container>
			<Menu />
			<StatusBar style="auto" />
			<ScrollView>
				<Avatar source={require("./assets/avatar.jpg")} />
				<TitleBar>
					<Title>Welcome back,</Title>
					<Name>Pedro Elton</Name>

					<NotificationIcon
						style={{ position: "absolute", right: 20, top: 5 }}
					/>
				</TitleBar>
				{/* CAROUSEL OF LOGOS */}
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					style={{ padding: 20, paddingLeft: 12, paddingTop: 30 }}
				>
					{/* LOOP THE IMAGES AND TEXT */}
					{logos.map((logos, index) => (
						<Logo
							image={logos.image}
							text={logos.text}
							key={index}
						/>
					))}
				</ScrollView>
				<Subtitle>Continue Learning</Subtitle>

				{/* CAROUSEL OF CARDS */}
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					style={{ paddingBottom: 30 }}
				>
					{cards.map((cards, index) => (
						<Card
							title={cards.title}
							image={cards.image}
							logo={cards.logo}
							caption={cards.caption}
							subtitle={cards.subtitle}
							key={index}
						/>
					))}
				</ScrollView>
				<Subtitle>Popular Courses</Subtitle>

				{courses.map((courses, index) => (
					<Course
						image={courses.image}
						logo={courses.logo}
						caption={courses.caption}
						title={courses.title}
						avatar={courses.avatar}
						description={courses.description}
						teacher={courses.teacher}
						key={index}
					/>
				))}
			</ScrollView>
		</Container>
	);
}
// STYLE USING STYLED COMPONENTS

const Container = styled.SafeAreaView`
	flex: 1;
	background-color: #f0f3f5;
`;

const Title = styled.Text`
	font-size: 16px;
	color: #b8bece;
	font-weight: 500;
`;

const Subtitle = styled.Text`
	color: #b8bece;
	font-weight: 600;
	font-size: 15px;
	margin-top: 20px;
	margin-left: 20px;
	text-transform: uppercase;
`;

const Name = styled.Text`
	font-size: 20px;
	color: #3c4560;
	font-weight: bold;
`;

const TitleBar = styled.View`
	width: 100%;
	padding-left: 80px;
`;

const Avatar = styled.Image`
	width: 44px;
	height: 44px;
	background: black;
	border-radius: 22px;
	position: absolute;
	top: 0;
	left: 0;
	margin-left: 20px;
`;

// ARRAY OF OBJECTS WITH THE CONTENT THAT POPULATES THE CAROUSEL OF LOGOS

const logos = [
	{
		image: require("./assets/logo-react.png"),
		text: "React",
	},
	{
		image: require("./assets/logo-figma.png"),
		text: "Figma",
	},
	{
		image: require("./assets/logo-framerx.png"),
		text: "FramerX",
	},
	{
		image: require("./assets/logo-xd.png"),
		text: "Xd",
	},
	{
		image: require("./assets/logo-sketch.png"),
		text: "Sketch",
	},
	{
		image: require("./assets/logo-swift.png"),
		text: "Swift",
	},
	{
		image: require("./assets/logo-xcode.png"),
		text: "XCode",
	},
	{
		image: require("./assets/logo-invision.png"),
		text: "Invision",
	},
	{
		image: require("./assets/logo-studio.png"),
		text: "Studio",
	},
];

const cards = [
	{
		title: "React Native for Designers",
		image: require("./assets/background11.jpg"),
		subtitle: "React Native",
		caption: "1 of 12 sections",
		logo: require("./assets/logo-react.png"),
	},
	{
		title: "UI & UX Design",
		image: require("./assets/background12.jpg"),
		subtitle: "Figma",
		caption: "2 of 12 sections",
		logo: require("./assets/logo-figma.png"),
	},
	{
		title: "UI Animations",
		image: require("./assets/background13.jpg"),
		subtitle: "FramerX",
		caption: "3 of 12 sections",
		logo: require("./assets/logo-framerx.png"),
	},
	{
		title: "Native Development",
		image: require("./assets/background14.jpg"),
		subtitle: "Swift UI",
		caption: "4 of 12 sections",
		logo: require("./assets/logo-swift.png"),
	},
];

const courses = [
	{
		title: "Prototype in InVision Studio",
		caption: "10 Sections",
		image: require("./assets/background13.jpg"),
		logo: require("./assets/logo-studio.png"),
		avatar: require("./assets/avatar.jpg"),
		description: "Learn advanced prototyping",
		teacher: "Meng To",
	},
	{
		title: "UI Design in Figma",
		caption: "12 Sections",
		image: require("./assets/background14.jpg"),
		logo: require("./assets/logo-figma.png"),
		avatar: require("./assets/avatar.jpg"),
		description:
			"Learn to design apps and websites using the best collaborative tool.",
		teacher: "Meng To",
	},
	{
		title: "React for Designers",
		caption: "12 Sections",
		image: require("./assets/background12.jpg"),
		logo: require("./assets/logo-react.png"),
		avatar: require("./assets/avatar.jpg"),
		description: "Learn to design and code a React site",
		teacher: "Meng To",
	},
	{
		title: "SwiftUI for Designers",
		caption: "11 Sections",
		image: require("./assets/background6.jpg"),
		logo: require("./assets/logo-swift.png"),
		avatar: require("./assets/avatar.jpg"),
		description: "Learn to design and code IOS APPs",
		teacher: "Meng To",
	},
];
