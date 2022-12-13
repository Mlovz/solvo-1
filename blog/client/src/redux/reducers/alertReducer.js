import { ALERT_TYPES } from "../types/alertTypes";

const initialState = {
  message: "",
  loading: false,
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALERT_TYPES.ERROR:
      return {
        ...state,
        loading: false,
        message: action.payload.error,
      };

    case ALERT_TYPES.SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.success,
      };

    case ALERT_TYPES.LOADING:
      return {
        ...state,
        loading: action.payload.loading,
      };

    default:
      return state;
  }
};

export default alertReducer;
