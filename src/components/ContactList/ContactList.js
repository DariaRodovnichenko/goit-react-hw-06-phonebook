import {
  ContactInfo,
  ContactItem,
  DeleteBtn,
  ListOfContacts,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ListOfContacts>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          <ContactInfo>{contact.name + ': ' + contact.number}</ContactInfo>
          <DeleteBtn
            type="button"
            name="deleteBtn"
            onClick={() => onDelete(contact.id)}
          >
            Delete
          </DeleteBtn>
        </ContactItem>
      ))}
    </ListOfContacts>
  );
};
