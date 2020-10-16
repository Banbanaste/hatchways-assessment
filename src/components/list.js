import React, { useState } from "react";

// components
import StudentCard from "./studentCard";

// stylesheets
import "../styles/App.css";
import "../styles/input.css";

// helpers
import filteredList from "../helpers/filterSearchHelper";

function List({ students, handleTagInput }) {
  // state init
  // name input value
  // tag input value
  const [filterInput, setFilterInput] = useState();
  const [tagInput, setTag] = useState();

  const filteredListRes = filteredList(students, filterInput, tagInput);

  // input change hanlers
  const handleFilterChange = (e) => {
    setFilterInput(e.target.value);
  };

  const handleTagInputChange = (e) => {
    setTag(e.target.value);
  };

  return (
    <div className="appCard">
      <input
        className="filterInput"
        id="name-input"
        placeholder="Search by name"
        onChange={handleFilterChange}
      />
      <input
        className="filterInput"
        id="tag-input"
        placeholder="Search by tags"
        onChange={handleTagInputChange}
      />
      {filteredListRes?.map((student) => (
        <StudentCard
          studentInfo={student}
          key={student.id}
          handleTagInput={handleTagInput}
        />
      ))}
    </div>
  );
}

export default List;
