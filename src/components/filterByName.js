export function filterByName(contacts, value) {
  return contacts.filter(contact => {
    return contact.name.toLowerCase().startsWith(value);
  });
}
