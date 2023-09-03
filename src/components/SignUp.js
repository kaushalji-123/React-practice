import React from 'react';
import Button from './button';

const SignUp = () => {
  return (
    <div>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <Button text="Sign Up" />
    </div>
  );
};

export default SignUp;