const getIsLoggin = state => state.auth.isLoggin;

const getUserName = state => state.auth.user.name;

const authSelectors = {
  getIsLoggin,
  getUserName,
};
export default authSelectors;
