import React from 'react';
import style from './ContactList.module.css';
import ContactItem from './ContactItem';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contactsItems/contacts-actions';

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

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
