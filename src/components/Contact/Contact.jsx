import { useDispatch } from "react-redux";
import { deleteContact, fetchDelContacts } from "./../../redux/operations";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  // const handleDelete = () => dispatch(deleteContact(contact.id));
  const handleDelete = () => dispatch(fetchDelContacts(contact.id));

  return (
    <div>
      {contact.name}: {contact.phone}
      <button
        type="button"
        onClick={handleDelete}
      >
        Remove
      </button>
    </div>
  );
};
