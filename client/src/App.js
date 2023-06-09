import axios from "axios";
import "./App.css";
import { FaSearch } from "react-icons/fa";
import { FcSpeaker } from "react-icons/fc";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [searchWord, setSearchWord] = useState("");

  function getMeaning() {
    axios
      .get(`http://localhost:8000/search/${searchWord}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        if (err.response.data.status === 404) {
          alert("Word not found");
          setData(null);
        }
      });
  }

  function playAudio() {
    let audio = new Audio(data.phonetics[0].audio);
    audio.play();
  }

  return (
    <div className="App">
      <h1>Free Dictionary</h1>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        />
        <button
          onClick={() => {
            getMeaning();
          }}
        >
          <FaSearch size="20px" />
        </button>
      </div>
      {data && (
        <div className="showResults">
          <h2>
            {data.word}{" "}
            <button
              onClick={() => {
                playAudio();
              }}
            >
              <FcSpeaker size="26px" />
            </button>
          </h2>
          <h4>Parts of speech:</h4>

          <p>{data.meanings[0].partOfSpeech}</p>

          <h4>Definition:</h4>

          <p>{data.meanings[0].definitions[0].definition}</p>

          <h4>Example:</h4>

          <p>{data.meanings[0].definitions[0].example}</p>
        </div>
      )}
    </div>
  );
}

export default App;
