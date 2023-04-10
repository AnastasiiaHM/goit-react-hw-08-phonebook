import { useDispatch } from 'react-redux';

import { fetchPostNewUser } from '../../redax/operations';

import { InputField } from '../../components/shared/InputField/InputField';
import fields from '../../components/shared/InputField/fields';
import { Btn } from '../../components/shared/Button/Button';

import { RegisterForm } from '../register/register.styled';

export const Register = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const user = { name, email, password };

    dispatch(fetchPostNewUser(user));
    form.reset();
  };

  return (
    <RegisterForm onSubmit={onSubmit}>
      <InputField {...fields.name} />
      <InputField {...fields.email} />
      <InputField {...fields.password} />
      <Btn type={'submit'} btnName={'Sign up'} />
    </RegisterForm>
  );
};
