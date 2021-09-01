import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContacts = createAction('contacts/add', ({ name, number }) => {
  return {
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
});

const deleteContacts = createAction('contacts/delete');
const searchContacts = createAction('contacts/search');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContacts, deleteContacts, searchContacts };
