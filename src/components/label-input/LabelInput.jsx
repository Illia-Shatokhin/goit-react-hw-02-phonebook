import css from './LabelInput.module.css';

export const LabelInput = ({ handleInputChange, value }) => {
  return (
    <label>
      <span>Name</span>
      <input
        onChange={handleInputChange}
        value={value}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
};
