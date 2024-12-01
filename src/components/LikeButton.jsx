import React, { useState, useEffect } from "react";
import { AiFillLike } from "react-icons/ai";

const LikeButton = () => {
  const [clicks, setClicks] = useState(0);

  // Load the initial number of clicks from localStorage
  useEffect(() => {
    const savedClicks = localStorage.getItem("clicks");
    if (savedClicks) {
      setClicks(Number(savedClicks));
    }
  }, []);

  // Update the clicks in state and localStorage
  const handleClick = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);
    localStorage.setItem("clicks", newClicks);
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Heart Button */}
      <button
        onClick={handleClick}
        className="text-white text-3xl hover:text-cyan-400 focus:outline-none"
      >
        <AiFillLike />
      </button>
      {/* Display Clicks */}
      <span className="text-xl">{clicks} Likes</span>
    </div>
  );
};

export default LikeButton;
