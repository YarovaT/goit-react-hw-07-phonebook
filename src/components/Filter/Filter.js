import React from 'react';
import './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsAction from '../../redux/contactsItems/contacts-actions';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      {' '}
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event =>
    dispatch(contactsAction.searchContacts(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
