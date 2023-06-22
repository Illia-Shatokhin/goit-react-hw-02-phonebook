import { Component } from 'react';
import { nanoid } from 'nanoid';
import { HeadText } from './head-text/HeadText';
import { ContactsList } from './contacts-list/ContactsList';
import { PhonebookForm } from './phonebook-form/PhonebookForm';
import { LabelInput } from './label-input/LabelInput';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  // Vasya Oblomov

  addContact = e => {
    e.preventDefault();
    const newContact = [{ name: this.state.name, id: nanoid() }];

    const newArrOfContacts = [...this.state.contacts, ...newContact];
    this.setState({ contacts: newArrOfContacts, name: '' });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <HeadText title="Phonebook" />
        <PhonebookForm onSubmit={this.addContact}>
          <LabelInput
            value={this.state.name}
            handleInputChange={this.handleInputChange}
          />
        </PhonebookForm>
        <HeadText title="Contacts" />
        <ContactsList options={this.state.contacts} />
      </div>
    );
  }
}
