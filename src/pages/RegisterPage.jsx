export const RegisterPage = () => {
  return (
    <>
      <p>Don't have an account? Register one!</p>
      <form name="registerForm" autoComplete="off">
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Enter password" />
        <button type="button">Register</button>
      </form>
    </>
  );
};
