import { ContactListItem } from 'components/contact-list-item/ContactsListItem';
import css from './ContactsList.module.css';
import { Button } from 'components/button/Button';
import PropTypes from 'prop-types';

export const ContactsList = ({
  options,
  contacts,
  setAppState,
  deleteContactById,
}) => {
  return (
    <ul className={css.list}>
      {options.map(option => (
        <ContactListItem key={option.id} option={option}>
          {option.name !== 'No contacts' && (
            <Button
              type="button"
              text="Delete"
              id={option.id}
              onClick={e => {
                deleteContactById(
                  e.target.getAttribute('id'),
                  contacts,
                  setAppState
                );
              }}
            />
          )}
        </ContactListItem>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  options: PropTypes.array,
  contacts: PropTypes.array,
  setAppState: PropTypes.func,
};
