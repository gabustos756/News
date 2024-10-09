import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  const handleSearch = () => {
    if (location.pathname === "/") {
      onSearch(searchTerm.trim()); 
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">NewsApp</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search news..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
