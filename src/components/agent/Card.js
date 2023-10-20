import React from "react";

function NewsCard({imageSrc }) {
  return (
    <div className="bg-white overflow-hidden shadow-lg w-full sm:w-64 md:w-80 lg:w-80">
      <img
        src={imageSrc}
        alt="Manual"
        className="w-100 object-cover"
        style={{width: "inherit !important"}}
      />
    </div>
  );
}

export default NewsCard;
