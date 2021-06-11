import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./UserLogIn.css";
const UserLogIn = () => {
  const [isClick, setIsClick] = useState(false) ;
  const {
    register,
    formState: { errors },
    getValues,
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
       {
         isClick? 
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
         :
        <>
         <h3 className="fw-bold">Sign Up</h3>
         <form onSubmit={handleSubmit(onSubmit)}>
               <input
               placeholder="Full Name"
               type="text"
               {...register('name', {
                 required: 'Name is a required',
                 minLength: {
                   value: 4,
                   message: 'Name Must be 4 characters and more',
                 },
                 pattern:{
                   value:
                   /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                   message: "Name Contains Letter"
                 },
               })}
             />
           {errors.name && (
             <small style={{ color: "red" }}>{errors.name.message}</small>
           )}
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
           
       <input
       placeholder="Confirm Password"
       type="password"
         {...register('passwordConfirmation',{
           required: 'Please confirm password!',
           validate: {
             matchesPreviousPassword: (value) => {
               const { password } = getValues();
               return password === value || 'Passwords should match!';
             },
           },
         })}
       />
       {errors.passwordConfirmation && (
         <small style={{ color: 'red' }}>
           {errors.passwordConfirmation.message}
         </small>
       )}
           <button type="submit">Sign Up</button>
         </form>
        </>
       }
          <div className="pt-3 d-flex justify-content-center align-items-center flex-column">
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
        <div className="right-content p-4 d-flex justify-content-center align-items-center">
          {
            isClick? <div>
            <h2 className='fw-bold'>Hello, Friend!</h2>
            <p>Enter your personal details and start journey with us</p>
            <button onClick={() => setIsClick(!isClick)} className='btn btn-outline-light'>Sign Up</button>
          </div> : <div>
            <h2 className='fw-bold'>Welcome Back!</h2>
            <p>To keep connected with us please login with your personal info</p>
            <button onClick={() => setIsClick(!isClick)} className='btn btn-outline-light'>Login</button>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default UserLogIn;
