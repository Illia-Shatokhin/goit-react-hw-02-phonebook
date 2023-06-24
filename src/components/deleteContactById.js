export function deleteContactById(id, contacts, setAppState) {
  const filteredArr = contacts.filter(contact => {
    return contact.id !== id;
  });
  setAppState({ contacts: filteredArr, filter: '' });
}
