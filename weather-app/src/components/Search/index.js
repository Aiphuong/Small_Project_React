import React from "react";

const Search = (props) => {
  const { submit, value, change } = props;
  console.log(value)

  return (
    <div className="hero">
      <div className="container">
        <form action="#" className="find-location" onSubmit={submit}>
          <input
            type="text"
            placeholder="Find your location..."
            value={value}
            onChange={change}
          />
          <input type="submit" onChange={change} />
        </form>
      </div>
    </div>
  );
};

export default Search;
