export const LoginPage = () => {
  return (
    <>
      <p>
        Accessing this application requires a login, please enter your
        credentials below!
      </p>
      <form name="loginForm" autoComplete="off">
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Enter password" />
        <button type="button">Sign In</button>
      </form>
    </>
  );
};
