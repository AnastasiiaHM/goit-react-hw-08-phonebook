import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/authOperation';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            onChange={handleChange}
            value={email}
            name="email"
            type="email"
            autoComplete="off"
            placeholder="Enter your email"
          ></input>
        </label>
        <label>
          Password
          <input
            onChange={handleChange}
            value={password}
            name="password"
            type="password"
            autoComplete="off"
            placeholder="Enter your password"
          ></input>
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};
export default LoginForm;
