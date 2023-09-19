import React from "react";
import { useState } from "react";
import "./style.css";
import axios from "axios";
import Loader from "./Loader/Loader";

function JokesContainer() {
  const [joke, setJoke] = useState("Random joke here...");

  const fetchJoke = async () => {
    try {
      setJoke("");
      const { data } = await axios.get("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      setJoke(data.joke);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h2 className="header">Dad Jokes</h2>
      <button className="btn" onClick={fetchJoke}>
        Tell me a joke
      </button>
      <div className="joke">{joke.trim().length ? joke : <Loader />}</div>
    </div>
  );
}

export default JokesContainer;
