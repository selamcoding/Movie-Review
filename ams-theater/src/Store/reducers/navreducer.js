const intialSate = {
  admin: false,
};
const adminReducer = (state = intialSate, action) => {
  if (action.type === "loginig") {
    return {
      ...state,
      admin: true,
    };
  }
  return state;
};
export default adminReducer;
