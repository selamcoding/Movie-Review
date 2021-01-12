const intialSate = {
  data: [],
};

const RootReducer = (state = intialSate, action) => {
  if (action.type === "mov") {
    return {
      ...state,
      data: state.data.concat(action.data),
    };
  }

  return state;
};

export default RootReducer;
