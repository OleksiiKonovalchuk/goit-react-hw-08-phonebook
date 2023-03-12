import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import css from './inputField.module.scss';

const InputField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor={id}>
        {label}
      </label>
      <input className={css.input} id={id} onChange={handleChange} {...props} />
    </div>
  );
};
export default InputField;
