import React from "react";
import "./NewsCard.css";

const NewsCard = ({ article }) => {
  const { title, description, url, urlToImage, author } = article;

  const truncatedDescription = description && description.length > 100 ? 
    description.substring(0, 100) + '...' : description;

  return (
    <div className="news-card">
      {urlToImage && <img src={urlToImage} alt={title} />}
      <div className="news-card-content">
        <h3>{title}</h3>
        <p>{truncatedDescription}</p>
      </div>
      <div className="news-card-footer">
        <span>{author || "Unknown"}</span>
        <a href={url} target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
    </div>
  );
};

export default NewsCard;
