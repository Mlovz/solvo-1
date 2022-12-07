const initialState = {
  error: "",
  success: "",
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALERT":
      return {
        ...state,
        error: action.payload.error,
        success: action.payload.success,
      };
    default:
      return state;
  }
};

export default alertReducer;
