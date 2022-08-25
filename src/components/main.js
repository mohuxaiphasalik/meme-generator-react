import React from "react";
export default function Main() {
  const [memeData, setMemeData] = React.useState({
    upperText: "",
    lowerText: "",
    imgUrl: "https://i.imgflip.com/9ehk.jpg",
  });
  const [allMemesData, setAllMemesData] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemesData(data.data.memes));
  }, []);
  function clickHandle() {
    let num = Math.random() * 100;
    num = Math.floor(num);
    const newUrl = allMemesData[num].url;
    console.log(newUrl);
    setMemeData((prevImg) => ({
      ...prevImg,
      imgUrl: newUrl,
    }));
  }
  function handleChange(event) {
    setMemeData((prevImg) => {
      return {
        ...prevImg,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <main>
      <div action="" className="form">
        <input
          placeholder="Upper Text"
          type="text"
          name="upperText"
          value={memeData.upperText}
          className="text"
          onChange={handleChange}
        />

        <input
          placeholder="Lower Text"
          name="lowerText"
          value={memeData.lowerText}
          type="text"
          className="text"
          onChange={handleChange}
        />
        <button className="submit-btn" onClick={clickHandle}>
          Get New Meme 🖼️
        </button>
      </div>

      <div className="meme">
        <img className="meme-image" src={memeData.imgUrl} alt="" />
        <h2 className="meme-text top">{memeData.upperText}</h2>
        <h2 className="meme-text bottom">{memeData.lowerText}</h2>
      </div>
    </main>
  );
}
