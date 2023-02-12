import styled from "styled-components";

export const StyledContact = styled.div`
  margin-top: 120px;
`;

export const Form = styled.form`
  width: 85%;
  margin: auto;
`;
export const ContactInput = styled.input`
  border: 1px solid gray;
  margin: 19px auto;
  display: block;
  padding: 10px;
  width: 70%;
  font-size: 19px;
  outline:0;
  &:focus{
  outline:1px solid green;
  }
`;
export const ContactTextArea = styled(ContactInput)`
  height: 120px;
`;
export const ContactSub = styled(ContactInput)`
  transition: 0.4s ease-out;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;
