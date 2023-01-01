import { ArticleCard, Heading } from "components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "redux/actions/articleAction";
import "./home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.article);

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  return (
    <div className="home">
      <Heading>Необычный блог</Heading>

      <div className="home_block">
        {posts?.map((article, index) => (
          <ArticleCard
            key={index}
            id={article._id}
            title={article.title}
            content={article.content}
            createdAt={article.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
