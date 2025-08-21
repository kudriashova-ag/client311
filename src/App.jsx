import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from './thunks/articleThunks';

const App = () => {
    const dispatch = useDispatch();
    const articles = useSelector((state)=>state.articles);

    useEffect(() => {
        dispatch(getArticles())
    }, [dispatch]);


    return (
        <div>
            { articles.data.map(article => <h3 key={article.id}>{article.title}</h3>) }
        </div>
    );
}

export default App;
