import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";

const Card = ({ title, image, logo, caption, subtitle }) => (
	<Container>
		<Cover>
			<Image source={image} />
			<Title>{title}</Title>
		</Cover>
		<Content>
			<Logo source={logo} resizeMode="contain" />
			<Wrapper>
				<Caption>{caption}</Caption>
				<Subtitle>{subtitle}</Subtitle>
			</Wrapper>
		</Content>
	</Container>
);

export default Card;

const Content = styled.View`
	height: 80px;
	padding-left: 20px;
	flex-direction: row;
	align-items: center;
`;

const Logo = styled.Image`
	width: 44px;
	height: 44px;
`;

const Wrapper = styled.View`
	margin-left: 10px;
`;

const Caption = styled.Text`
	color: #3c4560;
	font-size: 20px;
	font-weight: 600;
`;

const Subtitle = styled.Text`
	color: #b8bece;
	font-size: 15px;
	font-weight: 600;
	text-transform: uppercase;
	margin-top: 4px;
`;

const Container = styled.View`
	background-color: #fff;
	width: 315px;
	height: 280px;
	border-radius: 14px;
	margin-top: 20px;
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
	margin-left: 20px;
`;

const Cover = styled.View`
	width: 100%;
	height: 200px;
	border-top-left-radius: 14px;
	border-top-right-radius: 14px;
	overflow: hidden;
`;

const Image = styled.Image`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
`;

const Title = styled.Text`
	color: #fff;
	font-size: 24px;
	font-weight: 700;
	margin-top: 20px;
	margin-left: 20px;
	width: 170px;
`;
