import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const onSubmit = (data, e) => {
        e.target.reset();
        alert(JSON.stringify(data));
      };
  return (
    <div className="login-form">
      <div className="form-container">
        <div className="left-content">
          <h3 className="p-4">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          {...register('Name', {
            required: 'this is a required',
            minLength: {
              value: 4,
              message: 'Min length is 4',
            },
          })}
          type='text'
        />
        {errors.Name && errors.Name.message}
        <input
          placeholder="Email"
          type="text"
          {...register('email', {
            required: 'this is required',
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && errors.email.message}
        <button type="submit">Submit</button>
      </form>
          <div className="pt-5 d-flex justify-content-center align-items-center flex-column">
            <strong className="pb-3">Sign in with social network</strong>
            <button className="social-signin facebook">
              Log in with facebook
            </button>
            <button className="social-signin github">Log in with GitHub</button>
            <button className="social-signin google">
              Log in with Google+
            </button>
          </div>
        </div>
        <div className="right-content">
          <h2>this is right</h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
