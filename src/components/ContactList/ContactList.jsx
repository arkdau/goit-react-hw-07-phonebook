import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { getContact, getStatusFilter } from "./../../redux/selectors";
// import * as localStorage from "./../../storage";
import { Contact } from "./../Contact/Contact";
// import { addContact } from "./../../redux/actions";
import { fetchContacts, setStatusFilter } from "./../../redux/operations";

const getVisibleContacts = (contacts, statusFilter) => {
  console.log("statusFilter: ", statusFilter.text);

  return (
    statusFilter
      ? contacts.filter((item) => item.name.includes(statusFilter.text))
      : contacts
  );
};

function ContactList() {
const {filtr, error, isLoading, contacts } = useSelector((state) =>
  state.contacts
);

  const dispatch = useDispatch();

  // const contacts = useSelector(getContact);
  // const statusFilter = useSelector(getStatusFilter);
  const statusFilter = filtr;

  const visibleContacts = getVisibleContacts(contacts, statusFilter);

  console.log("ContactList-contact: ", contacts);
  console.log("contactList-visibleContacts: ", visibleContacts);
  console.log("contactList-statusFilter: ", statusFilter);





  useEffect(() => {
    dispatch(fetchContacts());
    // const upContacts = localStorage.load("contacts");
    // upContacts.map((item) => {
    //   return dispatch(addContact(item.name, item.number));
    // });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // localStorage.save("contacts", contacts);
  }, [contacts]);

  return (
    <>
      <ul>
        {(visibleContacts || []).map((item) => {
          return (
            <li key={item.id}>
              <Contact contact={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ContactList;
