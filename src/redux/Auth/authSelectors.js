const getLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

export const selectIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;

const authSelectors = {
  getLoggedIn,
  getUserName,
  selectIsFetchingCurrentUser,
};
export default authSelectors;
