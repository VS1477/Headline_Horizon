import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Card from './Card';
import Comments from './Comments';
import Subscribe from './Subscribe';
import Footer from './Footer';

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const API_KEY = "9c3ed8ee95884dec979460a60f96675b";

  const getData = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    const jsonData = await response.json();
    let dt = jsonData.articles.slice(0, 10);
    setNewsData(dt);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  const userInput = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <nav>
        <div>
          <h1>Headline Horizon</h1>
        </div>
        <div className="searchBar">
          <input type="text" placeholder="Search News" value={search} onChange={handleInput} />
          <button onClick={getData}>Search</button>
        </div>
        <div>
          <Link to="/contact">
            <button >Contact Us</button>
          </Link>
          <Link to="/subscribe">
            <button style={{ marginLeft: '50px' }}>Subscribe</button>
          </Link>
        </div>
      </nav>
      <div>
        <p className="head">Your Daily Source for News and Perspective</p>
      </div>
      <div className="categoryBtn">
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="entertainment">Entertainment</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="fitness">Fitness</button>
      </div>
      <div>
        {newsData ? <Card data={newsData} /> : null}
      </div>
      <Comments />
      <Footer/>
    </div>
  );
};

export default Newsapp;
