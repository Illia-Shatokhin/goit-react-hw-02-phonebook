import css from './noContactsMessage.module.css';

export const NoContactsMessage = ({ name }) => {
  return <p className={css.message}>No contacts with name: {name}</p>;
};
