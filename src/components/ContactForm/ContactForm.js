import { useState } from 'react';
import React from 'react';
import style from './ContactForm.module.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import contactsActions from '../../redux/contactsItems/contacts-actions';

function ContactForm({ contacts, onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputOnChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    if (e.currentTarget.name === '') {
      toast.info('Fill in the input fields name and number!');
      return;
    }

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      toast.warn(`${name} is already in phonebook !`);
      return;
    }

    onSubmit({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={style.formGroup}>
        <label>
          Name{' '}
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleInputOnChange}
          />
        </label>

        <label>
          Number{' '}
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleInputOnChange}
          />
        </label>
      </div>

      <Button type="submit" variant="contained" startIcon={<AddIcon />}>
        Add contact
      </Button>
    </form>
  );
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsActions.addContacts(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
