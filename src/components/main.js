import React from "react";
import memesdata from "../memesdata";
export default function Main() {
  let image;
  function clickHandle() {
    let num = Math.random() * 100;
    num = Math.floor(num);
    image = memesdata.data.memes[num].url;
    console.log(image);
  }
  return (
    <main>
      <div action="" className="form">
        <input placeholder="Upper Text" type="text" className="text" />

        <input placeholder="Lower Text" type="text" className="text" />
        <button className="submit-btn" onClick={clickHandle}>
          Get New Meme 🖼️
        </button>
      </div>
      <img className="meme-image" src={`${image}`} alt="" />
    </main>
  );
}
