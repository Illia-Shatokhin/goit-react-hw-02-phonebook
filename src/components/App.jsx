import css from './App.module.css';
import { Component } from 'react';
import { HeadText } from './head-text/HeadText';
import { ContactsList } from './contacts-list/ContactsList';
import { PhonebookForm } from './phonebook-form/PhonebookForm';
import { LabelInput } from './label-input/LabelInput';
import { filterByName } from './filterByName';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'Edik Ros', number: '645-17-79' },
    ],
    filter: '',
  };

  filteredArrOfContacts = [];

  handleInputChangeFilter = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.filteredArrOfContacts = [
      ...filterByName(this.state.contacts, e.target.value),
    ];
  };

  setAppState = obj => {
    this.setState(obj);
  };

  render() {
    return (
      <div className={css.container}>
        <HeadText title="Phonebook" />
        <PhonebookForm
          contacts={this.state.contacts}
          setAppState={this.setAppState}
        />
        <HeadText title="Contacts" />
        <LabelInput
          value={this.state.filter}
          handleInputChange={this.handleInputChangeFilter}
          type="text"
          name="filter"
          labelName="Find contacts by name"
        />
        <ContactsList
          options={
            this.state.filter.length === 0
              ? this.state.contacts
              : this.filteredArrOfContacts.length === 0
              ? [{ name: 'No contacts', number: '', id: '0' }]
              : this.filteredArrOfContacts
          }
        />
      </div>
    );
  }
}
