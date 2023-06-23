import css from './LabelInput.module.css';

export const LabelInput = ({
  handleInputChange,
  value,
  placeholder,
  type,
  name,
  pattern,
  title,
  labelName,
}) => {
  return (
    <label className={css.label}>
      <span className={css.span}>{labelName}</span>
      <input
        className={css.input}
        onChange={handleInputChange}
        placeholder={placeholder}
        value={value}
        type={type}
        name={name}
        pattern={pattern}
        title={title}
        required
      />
    </label>
  );
};
