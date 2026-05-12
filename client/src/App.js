import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MemesList from "./components/MemesList/MemesList";
import MemePage from "./components/MemePage/MemePage";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

function App() {
  const [memesList, setMemesList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/memes`)
      .then((response) => setMemesList(response.data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <p>Failed to load memes: {error}</p>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MemesList list={memesList} />} />
        <Route path="/meme/:memeId" element={<MemePage list={memesList} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
