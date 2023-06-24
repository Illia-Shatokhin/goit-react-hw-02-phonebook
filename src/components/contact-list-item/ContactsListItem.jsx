import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';

export const ContactListItem = ({ option, children }) => {
  return (
    <li className={css.listItem}>
      {option.name} : {option.number} {children}
    </li>
  );
};

ContactListItem.propTypes = {
  option: PropTypes.object,
  children: PropTypes.element,
};
