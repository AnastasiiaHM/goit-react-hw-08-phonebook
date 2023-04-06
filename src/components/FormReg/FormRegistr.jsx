import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/authOperation';

const FormRegister = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      FormRegister
      <h1>registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            type="text"
            autoComplete="off"
            placeholder="Enter your name"
            onChange={handleChange}
            value={name}
          ></input>
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            autoComplete="off"
            placeholder="Enter your email"
            onChange={handleChange}
            value={email}
          ></input>
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            autoComplete="off"
            placeholder="Enter your password"
            onChange={handleChange}
            value={password}
          ></input>
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
export default FormRegister;
