import React from 'react';
import style from './ContactList.module.css';
import ContactItem from './ContactItem';
import { connect } from 'react-redux';
import {
  contactsOperations,
  contactsSelectors,
} from '../../redux/contactsItems';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ol>
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={style.listItem}>
          <ContactItem
            name={name}
            number={number}
            onClick={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ol>
  );
};

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

const mapStateToProps = state => ({
  contacts: contactsSelectors.getfilteredContacts(state),
});

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getVisibleContacts(items, filter),
// });

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
