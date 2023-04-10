import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/authOperation';

const FormRegister = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.elements.name.value);
    dispatch(
      register({
        name: form.elements.name.value,

        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
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
          ></input>
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            autoComplete="off"
            placeholder="Enter your email"
          ></input>
        </label>
        <label>
          Password
          <input
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
export default FormRegister;
