import React, { useState, useEffect } from "react";
import { fetchNews } from "../../services/newsApi";
import "./Home.css";
import NewsCard from "../../components/newsCard/NewsCard";
import Header from "../../components/header/Header";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("latest");

  useEffect(() => {
    loadNews(searchTerm);
  }, [searchTerm]);

  const loadNews = async (keyword) => {
    setLoading(true);
    const news = await fetchNews(keyword);
    setArticles(news);
    setLoading(false);
  };

  const handleSearch = async (keyword) => {
    setLoading(true);
    const results = await fetchNews(keyword);
    setArticles(results);
    setLoading(false);
  };

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      const initialArticles = await fetchNews();
      setArticles(initialArticles);
      setLoading(false);
    };
    loadNews();
  }, []);

  return (
    <div>
      <Header onSearch={handleSearch} />
      <div className="home-container">
        <main>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <section className="news-grid">
              {articles.length > 0 ? (
                articles
                  .filter(
                    (article) =>
                      article.urlToImage && article.urlToImage !== "removed"
                  ) // Filtra las noticias que no tienen imagen o la imagen es "removed"
                  .map((article, index) => (
                    <NewsCard key={index} article={article} />
                  ))
              ) : (
                <p>No news found. Try another search term.</p>
              )}
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default Home;
