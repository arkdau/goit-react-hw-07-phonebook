// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "redux/operations";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

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
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
