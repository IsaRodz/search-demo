import React, { useRef } from "react";

function Searchbar({ onSearch }) {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchValue = inputRef.current.value;
    onSearch(searchValue);
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mb-4">
      <input ref={inputRef} className="form-control" type="text" placeholder="Search..." />
      <button className="btn btn-primary">Search</button>
    </form>
  );
}

export default Searchbar;
