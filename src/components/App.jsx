// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "redux/operations";
import styled from "styled-components";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

const Header = styled.div`
display: flex;
justify-content: center;
align-items: center
`;

export const App = () => {
  // const { error, isLoading, Contactss } = useSelector((state) =>
  //   state.Contacts
  // );
  // const dispatch = useDispatch();
  //
  // const loadContacts = () => dispatch(fetchContacts());
  //
  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }
  //
  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <div
      style={{
        minHeight: "200px",
        margin: "30px auto",
        boxSizing: "border-box",
        backgroundColor: "lightblue",
        padding: "10px",
      }}
    >
      <Header>
        <h2>Phonebook</h2>
      </Header>
      <ContactForm />

      <Header>
        <h2>Contacts</h2>
      </Header>
      <Filter />
      <ContactList />
    </div>
  );
};
