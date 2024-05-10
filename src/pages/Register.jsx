import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hook/useAuth';

const Register = () => {
  const {handleSubmit, register, reset} = useForm();

const createUser = useAuth();

  const Submit = data => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
    createUser(url, data);
    reset ({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
    })
  };

  return (
    <div>
      <form onSubmit={handleSubmit(Submit)}>
        <div>
          <label htmlFor="firstName">FirstName: </label>
          <input {...register('firstName')} type="text" id="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">LastName: </label>
          <input {...register('lastName')} type="text" id="lastName" />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input {...register('email')} type="email" id="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone: </label>
          <input {...register('phone')} type="text" id="phone" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input {...register('password')} type="password" id="password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
