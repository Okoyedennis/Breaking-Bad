import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./component/Header";
import "./App.css";
import CharacterGrid from "./component/CharacterGrid";
import Search from "./component/Search";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const results = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(results.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header query={query} />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
