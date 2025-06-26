import React from 'react';

const Register = () => {
  return (
    <div className="register-container">
      <h2>User Registration</h2>
      <form>
        <input type="text" placeholder="Name" required /><br />
        <input type="email" placeholder="Email" required /><br />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
