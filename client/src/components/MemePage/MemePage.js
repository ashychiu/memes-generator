import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import addCaption from "../../assets/images/add-caption.png";
import "./MemePage.scss";

function MemePage({ list }) {
  const { memeId } = useParams();
  const [draft, setDraft] = useState("");
  const [caption, setCaption] = useState("");

  const meme = list.find((item) => item.id === memeId);

  if (!meme) {
    return (
      <div className="caption">
        <p>Meme not found.</p>
        <Link to="/" className="caption__goback">
          Go back
        </Link>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!draft.trim()) {
      alert("Please type something...");
      return;
    }
    setCaption(draft);
    setDraft("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="caption">
        <img
          className="caption__add-caption"
          src={addCaption}
          alt="Add a caption"
        />
        <div className="caption__stage">
          <img className="caption__image" src={meme.url} alt={meme.name} />
          <p className="caption__text">{caption}</p>
        </div>

        <label htmlFor="text-box1">Type here ...</label>
        <input
          name="userInput"
          id="text-box1"
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
        <button className="caption__button" type="submit">
          Generate meme
        </button>
        <Link to="/" className="caption__goback">
          Go back
        </Link>
      </div>
    </form>
  );
}

export default MemePage;
