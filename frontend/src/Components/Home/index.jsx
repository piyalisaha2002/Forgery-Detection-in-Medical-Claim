import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #5F50DE; /* Set background color for the body */
    overflow: hidden; /* Hide scrollbars */
  }
`;
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: linear-gradient(to bottom, #5F50DE, #7757E3);
  position: relative;

  /* Add a very thin white line from the top */
  &::before {
    content: "";
    width: 100%;
    height: 0.5px; /* Adjust the height for a very thin line */
    background-color: #6C62E1;
    position: absolute;
    top: 100px; /* Adjust the top position as needed */
    left: 0;
    z-index:1;
  }
`;

const Circle1 = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(to right, #587FDD, #6B78DD, #7E71DD, #8A6DDD);
  position: absolute;
  top: calc(0.33% - 20px); /* 1/3rd is cut from the top */
  left: 60px;
`;

const Circle2 = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(to left, #7286ED, #7474E8, #7560E3); /* Right to left gradient */
  position: absolute;
  top: calc(85.33% - 20px); /* 1/3rd is cut from the top */
  left: 1px;
`;

const Circle3 = styled.div`
  width: 700px; /* Adjust the size as needed */
  height: 600px; /* Adjust the size as needed (half of the width) */
  border-radius: 50%;
  background: linear-gradient(to bottom, #5E61DE, #6D55E1,#7657E3); /* Smooth gradient transition */
  position: absolute;
  top: calc(50% - 220px); /* Center vertically */
  left: calc(50% - 350px); /* Center horizontally */
`;
const Circle4 = styled.div`
  width: 400px; /* Adjust the size as needed */
  height: 400px; /* Adjust the size as needed */
  border-radius: 50%;
  background: linear-gradient(to right, #618BF0, #6382ED, #6679E9); /* Left to right gradient */
  position: absolute;
  top: 40px; /* Adjust the top position for placement in the top-right corner */
  right: -200px; /* Adjust the right position for placement in the top-right corner */
  clip-path: polygon(0 0, 80% 0, 80% 100%, 0 100%); /* Crop the right 20% */
`;
const Circle5 = styled.div`
  width: 130px; /* Adjust the size as needed */
  height: 130px; /* Adjust the size as needed */
  border-radius: 50%;
  background: linear-gradient(to bottom right, #32B4F2, #6096DE, #6C8ED9, #877DCE, #9871C6); /* Top left to right bottom gradient */
  position: absolute;
  bottom: 40px; /* Adjust the bottom position for placement in the right bottom corner */
  right: 100px; /* Adjust the right position for placement in the right bottom corner */
  z-index:5;
`;
const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  position: absolute;
  top: 30px;
  font-size:20px;
  width: 100%;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  margin: 0 30px; /* Adjust the margin to control the spacing between links */
  font-weight:300px;
  font-family:"Fira Sans",Sans-serif;
  &:hover {
    color: #b4aff0;
  }
`;
const Title = styled.h1`
  color: white;
  font-family: "Fira Sans", sans-serif;
  font-weight: 300; /* Decrease the font weight */
  text-transform: uppercase; /* Convert text to uppercase */
  font-size: 20px; /* Decrease the font size */
  position: absolute;
  top: 250px; /* Adjust the top position as needed */
  left: 330px; /* Adjust the left position to center it on the left side */
  margin: 0;
  z-index: 1; /* Set a higher z-index to ensure it's displayed on top of other content */
`;
const Subtitle = styled.h2`
  color: white;
  font-family: "Fira Sans", sans-serif;
  font-weight: 300; /* Decrease the font weight */
  text-transform: titlecase; /* Convert text to uppercase */
  font-size: 70px; /* Increase the font size */
  position: absolute;
  top: 290px; /* Adjust the top position to place it below the Document Matcher title */
  left: 130px; /* Adjust the left position to center it on the left side */
  margin: 0;
  z-index: 1; /* Set a higher z-index to ensure it's displayed on top of other content */

  &::after {
    content: "";
    width: 26%;
    height: 4px;
    background: linear-gradient(to right, #8E7DE8, #B0A4EE, #D4CDF6, #F1EFFC, #FDFCFF);
    position: absolute;
    bottom: -5px; /* Adjust the position of the line relative to the subtitle */
    top:200px;
    left: 240px;
    z-index: -1; /* Place the line behind the text */
    mask: linear-gradient(to right, transparent 0%, white 15%, white 85%, transparent 100%);
  }
`;

const ImageWrapper = styled.div`
  
  position: absolute;
  z-index: 2; /* Adjust the z-index as needed */
  
   .img1{
    width:200px;
    height:300px;
    z-index:5;
  }
   .img2{
    width: 650px; /* Adjust the width as needed */
    height: 450px; /* Maintain aspect ratio */
  }
`;

const LoginButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 20px 50px;
  font-size: 16px;
  cursor: pointer;
  position: fixed;
  bottom: 110px;
  left: 350px;
  margin: 20px;
  z-index: 1;

  transition: all 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #7256E2;
    color: white;
    transform: scale(1.1); /* Increase size on hover */
  }
`;

export default function Content(){
  return (
    <>
      <GlobalStyle />
      <PageContainer>
      <Title>Document Matcher</Title>
      <LinksContainer>
  <NavLink href="#">Home</NavLink>
  <NavLink href="#">About Us</NavLink>
  <NavLink href="#">Services</NavLink>
  <NavLink href="#">Contact</NavLink>
  
</LinksContainer>

        <Circle1 />
        <Circle2 />
        <Circle3 />
        <Circle4/>
        <Circle5/>
        <Title>Document Matcher</Title>
        <Subtitle>Create Your Online <br/><span style={{ marginLeft:'180px'  ,fontWeight: 100 }}> Success</span></Subtitle>
       
        <ImageWrapper style={{ top: "350px", left: "730px",  zIndex: 3  }}>
          <img className="img1" src="./images/phone-noshadow-1.png" alt="Image 1" />
        </ImageWrapper>
        <ImageWrapper style={{ top: "150px", left: "830px" ,  zIndex: 2}}>
          <img className="img2" src="./images/web-noshadow.png" alt="Image 2" />
        </ImageWrapper>
      </PageContainer>
    </>
  );
};

