import React from "react";

export default function Caption({ save, next, card }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const caption = document.querySelector(".caption--input").value;
    card.caption = caption;
    save(card);
  };

  return (
    <form className="caption" onSubmit={handleSubmit}>
      <input
        id="caption_box"
        type="text"
        placeholder="Cat-ption Me"
        className="caption--input"
      />

      <div className="caption--buttons">
        <button className="caption--btn" type="submit">
          {"💾 "}Save To Collection
        </button>
        <button className="caption--btn" onClick={next}>
          Get Next Card{" ⇨"}
        </button>
      </div>
    </form>
  );
}
