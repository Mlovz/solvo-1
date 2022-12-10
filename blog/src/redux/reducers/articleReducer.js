const articleState = {
  articles: [],
};

const articleReducer = (state = articleState, action) => {
  switch (action.payload) {
    case "GET":
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};

export default articleReducer;
