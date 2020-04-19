import React from "react";

const SearchBox = ({ seacrhChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 b--green bg-lightest-blue"
        type="search"
        placeholder="seacrh robots"
        onChange={seacrhChange}
      />
    </div>
  );
};

export default SearchBox;
