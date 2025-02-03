import React, { useState, useEffect } from 'react';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const apiKey = 'cdd73614de5b40a1a4c4228bd4ea48c0'; // Get your NewsAPI key from https://newsapi.org/
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles.slice(0, 3)); // Limit to 3 articles
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <p>Loading articles...</p>;
  }

  return (
    <div>
      <h2>Latest Articles</h2>
      <div className="articles-container">
        {articles.map((article) => (
          <div key={article.title} className="article-card">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
