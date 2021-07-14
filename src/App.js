import React from "react";
import data from "./data";
import Review from "./Review";

const App = () => {
  return (
    <React.Fragment>
      <div className="App">
        <h1>Our Reviews</h1>
        <div className="line" />
        <Review people={data} />
      </div>
    </React.Fragment>
  );
};

export default App;
