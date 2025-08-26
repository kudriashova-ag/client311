import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../thunks/articleThunks";
import Loader from "../components/Loader";
const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  if (articles.status === "loading") {
    return <Loader />;
  }

  return (
    <div>
      {articles.data.map((article) => (
        <h3 key={article.id}>{article.title}</h3>
      ))}
    </div>
  );
};

export default Articles;
