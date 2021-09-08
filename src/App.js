import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import ContactForm from './components/ContactForm';
import { contactsOperations } from './redux/contactsItems';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div className="Container">
      <h1>Phonebook</h1>
      <ContactForm />

      <Filter />

      <h2>Contacts</h2>

      <ContactList />

      <ToastContainer
        position="top-center"
        autoClose={2000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
      />
    </div>
  );
}

export default App;
