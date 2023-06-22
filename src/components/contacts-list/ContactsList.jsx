import css from './ContactsList.module.css';

export const ContactsList = ({ options }) => {
  return (
    <ul>
      {options.map(option => {
        return <li key={option.id}>{option.name}</li>;
      })}
    </ul>
  );
};
