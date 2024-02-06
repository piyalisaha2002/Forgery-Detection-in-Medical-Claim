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
  // height: 100vh; /* Adjusted to 75vh for the top 3/4 */
  height:100vh;
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
    top: 100px; /* Adjusted to start at the top */
    left: 0;
    z-index:1;
  }

  /* Add the white background for the bottom 1/4 (25vh) */
  &:after {
    content: "";
    width: 100%;
    height: 35vh; /* Adjusted to 25vh for the bottom 1/4 */
    background-color: white;
    position: absolute;
    bottom: 0; /* Positioned at the bottom */
    left: 0;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  position: absolute;
  top: 30px;
  width: 100%;
`;
const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-size:20px;
  margin: 0 30px; /* Adjust the margin to control the spacing between links */
  font-weight:300px;
  font-family:"Fira Sans",Sans-serif;
  &:hover {
    color: #b4aff0;
  }
`;
const Circle1 = styled.div`
  width: 150px;
  height: 150px;
  top:150px;
  right:300px;
  border-radius: 50%;
  position:absolute;
  background: linear-gradient(to right, #6482DF, #7176DF, #8F6BE0);
  z-index:1;
`;
const Circle2 = styled.div`
  width: 430px;
  height: 600px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #628AEF, #696FE5, #6E5EE0);
  position: absolute;
  top: 45%;
  right: -300px;
  transform: translateY(-50%);
`;

const Subtitle = styled.h2`
  color: white;
  font-family: "Fira Sans", sans-serif;
  font-weight: 300; /* Decrease the font weight */
  text-transform: titlecase; /* Convert text to uppercase */
  font-size: 50px; /* Increase the font size */
  position: absolute;
  top: 150px; /* Adjust the top position to place it below the Document Matcher title */
  left: 130px; /* Adjust the left position to center it on the left side */
  margin: 0;
  z-index: 1; /* Set a higher z-index to ensure it's displayed on top of other content */

`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 230px;
  margin: 0 -15px; /* Negative margin to create spacing between cards */
`;
const Card = styled.div`
  width: 240px;
  height: 230px;
  // background:linear-gradient(to bottom right, ##3C88DC,#9968C2, #A763BE );
  background: linear-gradient(to bottom right, #3C88DC, #6F76CE, #9968C2, #A763BE);
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  z-index: 6;
  top: 40px;
  margin: 0 30px; /* Center horizontally */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  font-size: 25px;
  color: #333;
  text-align: center;
  line-height: 1.4;
`;

const CardTitle = styled.h2`
  font-size: 25px;
  font-weight:30px;
  color:white;
  margin-bottom: 10px; /* Add margin below the title for spacing */
`;
export default function Dash(){
    return(
        <>
            <GlobalStyle/>
            <PageContainer>
            
            <Subtitle>Dashboard</Subtitle>
            <LinksContainer>
  <NavLink href="#">Home</NavLink>
  <NavLink href="#">About Us</NavLink>
  <NavLink href="#">Services</NavLink>
  <NavLink href="#">Contact</NavLink>
  
</LinksContainer>
<Circle1/>
<Circle2/>
<Container>
      <Card>
        <CardTitle>Search Your Documents</CardTitle>
      </Card>
      <Card>
       <CardTitle>Check Status</CardTitle> 
      </Card>
      <Card>
      <CardTitle>Feedback</CardTitle> 
      </Card>
      
    </Container>
            </PageContainer>
        </>
    )
}