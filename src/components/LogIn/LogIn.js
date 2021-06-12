import React from 'react';
import { useForm } from 'react-hook-form';

const LogIn = () => {
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
        <>
        <h3 className="fw-bold">Log In</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Email"
            type="text"
            {...register("email", {
              required: "Email is required!",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <small style={{ color: "red" }}>{errors.email.message}</small>
          )}
          <input
            placeholder="Password"
            type="password"
            {...register("password", { required: "Password is required!" ,
            pattern: {
              value:
              /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: `Minimum eight characters,one letter, one number`,
            },
           })}
          />
          {errors.password && (
            <small style={{ color: "red", textAlign:'center'}}>{errors.password.message}</small>
          )}
          <button type="submit">Log In</button>
        </form>
       </>
    );
};

export default LogIn;