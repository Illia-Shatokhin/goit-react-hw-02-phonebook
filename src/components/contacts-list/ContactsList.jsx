import { ContactListItem } from 'components/contact-list-item/ContactsListItem';
import css from './ContactsList.module.css';

export const ContactsList = ({ options }) => {
  return (
    <ul className={css.list}>
      {options.map(option => (
        <ContactListItem key={option.id} option={option} />
      ))}
    </ul>
  );
};
