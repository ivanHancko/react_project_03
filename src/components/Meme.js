import React from "react";
import { useState } from "react";
import memesData from "../memesData.js";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  const [allMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form--input"
          placeholder="Top text"
          type="text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />

        <input
          className="form--input"
          placeholder="Bottom text"
          type="text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />

        <button onClick={getMemeImage} className="form--button" type="button">
          Get a new meme image 🖼
        </button>
      </form>
      <div className="meme">
        <img
          src={meme.randomImage}
          alt=""
          className="meme--image"
          name="randomImage"
        />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
