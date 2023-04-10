import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { Input, InputWrap } from '../InputField/InputField.styled';

export const InputField = ({ label, onChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);
  return (
    <InputWrap>
      <label htmlFor={id}>{label}</label>
      <Input onChange={onChange} id={id} {...props} />
    </InputWrap>
  );
};
