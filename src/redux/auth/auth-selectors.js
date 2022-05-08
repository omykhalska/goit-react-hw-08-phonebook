const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserEmail = state => state.auth.user.email;

const getIsRefreshing = state => state.auth.isRefreshing;

const getIsError = state => state.auth.isError;

const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  getIsRefreshing,
  getIsError,
};

export default authSelectors;
