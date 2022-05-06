const getIsLoggedIn = state => state.auth.auth.isLoggedIn;

const getUserName = state => state.auth.auth.user.name;

const authSelectors = { getIsLoggedIn, getUserName };

export default authSelectors;
