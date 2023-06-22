import css from './PhonebookForm.module.css';

export const PhonebookForm = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
      <button type="submit">Add contact</button>
    </form>
  );
};
