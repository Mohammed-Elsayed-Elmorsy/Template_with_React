import {
  StyledContact,
  Form,
  ContactInput,
  ContactTextArea,
  ContactSub
} from "./contactStyle";
import Header from "../../components/Header/Header";
const Contact = () => {
  return (
    <div>
      <Header />
      <StyledContact>
        <h2>Drop Me A Line</h2>
        <Form>
          <ContactInput type='text' placeholder='User Name'/>
          <ContactInput type='email' placeholder=' E-Mail' />
          <ContactInput type='text' placeholder='Subject' />
          <ContactTextArea placeholder='Message' />
          <ContactSub type='submit' value='Submit'/>
        </Form>
      </StyledContact>
    </div>
  );
};

export default Contact;
