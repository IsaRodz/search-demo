import React from "react";

function ResultItem({ item }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, ipsam?</p>
      </div>
    </div>
  );
}

export default ResultItem;
