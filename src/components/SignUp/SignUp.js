import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
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
    );
};

export default SignUp;