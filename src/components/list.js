import React, { useEffect, useState } from "react";

// components
import StudentCard from "./studentCard";

// stylesheets
import "../styles/App.css";
import "../styles/input.css";

function List({ students, handleTagInput }) {
  const [filterInput, setFilterInput] = useState();
  const [tagInput, setTag] = useState();

  const filteredList = students?.filter((student) => {
    const name = student.firstName + " " + student.lastName;
    const tag = student.tags.join("").toLowerCase();
    const standardizedName = name.toLowerCase();
    if (!filterInput && tagInput) {
      if (tag.includes(tagInput)) {
        return student;
      }
    } else if (!tagInput && filterInput) {
      if (standardizedName.includes(filterInput)) {
        return student;
      }
    } else if (filterInput && tagInput) {
      if (standardizedName.includes(filterInput) && tag.includes(tagInput)) {
        return student;
      }
    } else if (!filterInput && !tagInput) {
      return student;
    }
  });

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
      {filteredList?.map((student) => (
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
