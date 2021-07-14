import React, { useState } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Review = ({ people }) => {
  const [index, setIndex] = useState(0);

  const setIndexBigger = () => {
    if (index < people.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const setIndexSmaller = () => {
    if (index === 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleRightClick = () => {
    setIndexBigger();
  };
  const handleLeftClick = () => {
    setIndexSmaller();
  };
  const handleRandomlick = () => {
    const newIndex = Math.floor(Math.random() * 4);
    console.log(newIndex);
    setIndex(newIndex);
    if (index === newIndex) {
      setIndexBigger();
    } else {
      setIndexSmaller();
    }
  };
  return (
    <React.Fragment>
      <div>
        <div key={people[index].id}>
          <img src={people[index].image} alt={people[index].name} />
          <h3 className="name">{people[index].name}</h3>
          <p className="job">{people[index].job}</p>
          <p className="text">{people[index].text}</p>
        </div>
        <a>
          <FaChevronLeft onClick={handleLeftClick} />
        </a>
        <FaChevronRight onClick={handleRightClick} />
        <br />
        <button onClick={handleRandomlick}>Random review</button>
      </div>
    </React.Fragment>
  );
};

export default Review;
