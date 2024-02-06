import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #5F50DE;
    overflow: hidden;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 40px; /* Increase padding to increase the size of the form */
  width: 500px; /* Increase width to increase the size of the form */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Label = styled.label`
  font-size: 16px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const UploadButton = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  padding: 15px; /* Increase padding to increase the size of the button */
  background-color: #5F50DE; /* Change button color to #5F50DE */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function DocumentUpload() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <FormContainer>
          <Form>
            <Label>Name:</Label>
            <Input type="text" placeholder="Enter your name" />

            <Label>Phone Number:</Label>
            <Input type="tel" placeholder="Enter your phone number" />

            <Label>Upload Document:</Label>
            <UploadButton type="file" />

            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
        </FormContainer>
      </Container>
    </>
  );
}
