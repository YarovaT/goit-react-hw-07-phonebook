import axios from 'axios';
import { toast } from 'react-toastify';
// import { v4 as uuidv4 } from 'uuid';
import * as contactsAction from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:3000';

const fetchContacts = () => async dispatch => {
  dispatch(contactsAction.fetchContactsRequest());

  try {
    const { data } = await axios.get(`/contacts`);

    dispatch(contactsAction.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(contactsAction.fetchContactsError(error));
    toast.error(error.message);
  }
};

const addContact = (name, number) => async dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(contactsAction.addContactRequest());

  try {
    const { data } = await axios.post('/contacts', contact);

    dispatch(contactsAction.addContactSuccess(data));
  } catch (error) {
    dispatch(contactsAction.addContactError(error));
    toast.error(error.message);
  }
};

const deleteContact = contactId => async dispatch => {
  dispatch(contactsAction.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);

    dispatch(contactsAction.deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(contactsAction.deleteContactError(error));
    toast.error(error.message);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, fetchContacts };
