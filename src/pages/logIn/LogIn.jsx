import { useDispatch } from 'react-redux';

import { fetchPostUserLogIn } from '../../redax/operations';

import { InputField } from '../../components/shared/InputField/InputField';
import { Btn } from '../../components/shared/Button/Button';
import fields from 'components/shared/InputField/fields';

import { LogInForm } from '../logIn/LogIn.styled';

export const LogIn = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const userData = { email, password };

    dispatch(fetchPostUserLogIn(userData));
    form.reset();
  };

  return (
    <div>
      <LogInForm onSubmit={onSubmit}>
        <InputField {...fields.email} />
        <InputField {...fields.password} />
        <Btn type={'submit'} btnName={'LogIn'} />
      </LogInForm>
    </div>
  );
};
