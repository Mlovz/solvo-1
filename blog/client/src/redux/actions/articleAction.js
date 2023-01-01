import { api } from "api";
import { ALERT } from "redux/types/alertTypes";
import { ARTICLE_TYPES } from "redux/types/articleTypes";

export const getArticles = () => async (dispatch) => {
  try {
    dispatch({ type: ALERT, payload: { loading: true } });

    const res = await api.get("/api//home/articles");

    dispatch({ type: ARTICLE_TYPES.GET_ARTICLES, payload: res.data.articles });

    dispatch({ type: ALERT, payload: { loading: false } });
  } catch (err) {}
};

export const addArticle = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: ALERT, payload: { loading: true } });

    const res = await api.post("/api/article", data);

    if (res.data) {
      dispatch({ type: ARTICLE_TYPES.ADD_ARTICLE, payload: data });
      navigate("/");

      dispatch({ type: ALERT, payload: { loading: false } });
    }
  } catch (err) {
    dispatch({ type: ALERT, payload: { loading: false } });
  }
};
