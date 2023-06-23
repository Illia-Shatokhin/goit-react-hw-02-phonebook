import css from './ContactListItem.module.css';

export const ContactListItem = ({ option }) => {
  return (
    <li className={css.listItem}>
      {option.name}: {option.number}
    </li>
  );
};
