import React from "react";
import styled from "styled-components";

const Course = ({
	image,
	logo,
	caption,
	title,
	avatar,
	description,
	teacher,
}) => {
	return (
		<Container>
			<InnerContainer>
				<Cover>
					<Image source={image} />
					<Logo source={logo} resizeMode="contain" />
					<Caption>{caption}</Caption>
					<Title>{title}</Title>
				</Cover>
				<LowerContainer>
					<Avatar source={avatar} />
					<Wrapper>
						<Description>{description}</Description>
						<Detail>Taught by {teacher}</Detail>
					</Wrapper>
				</LowerContainer>
			</InnerContainer>
		</Container>
	);
};
export default Course;

const Cover = styled.View`
	height: 260px;
`;
const Avatar = styled.Image`
	width: 32px;
	height: 32px;
	background: black;
	border-radius: 16px;
	margin-right: 8px;
`;
const Description = styled.Text`
	color: #3c4560;
	font-size: 15px;
	font-weight: 500;
`;
const Detail = styled.Text`
	color: #b8bece;
	font-size: 13px;
	font-weight: 500;
	margin-top: 2px;
`;
const Container = styled.View`
	width: 100%;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
	padding: 20px;
`;

const InnerContainer = styled.View`
	background-color: #fff;
	width: 100%;
	min-height: 335px;
	border-radius: 14px;
	overflow: hidden;
`;
const Image = styled.Image`
	position: absolute;
	width: 100%;
	height: 260px;
`;
const LowerContainer = styled.View`
	flex-direction: row;
	padding: 20px;
`;
const Wrapper = styled.View`
	flex: 1;
	width: auto;
`;

const Logo = styled.Image`
	width: 48px;
	height: 48px;
	align-self: center;
	margin-top: 20px;
`;
const Caption = styled.Text`
	position: absolute;
	font-weight: 500;
	bottom: 80px;
	left: 20px;
	font-size: 15px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.8);
`;
const Title = styled.Text`
	position: absolute;
	bottom: 20px;
	left: 20px;
	font-size: 24px;
	font-weight: 600;
	color: #fff;
	width: 170px;
`;
