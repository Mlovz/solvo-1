import { ARTICLE_TYPES } from "../types/articleTypes";

const initialState = {
  posts: [],
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_TYPES.GET_ARTICLES:
      return {
        ...state,
        posts: action.payload.reverse(),
      };

    case ARTICLE_TYPES.ADD_ARTICLE:
      return {
        ...state,
        posts: [action.payload, , ...state.posts],
      };
    default:
      return state;
  }
};

export default articleReducer;
