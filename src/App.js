import React, { useEffect, useState } from "react";

// components
import List from "./components/list";

function App() {
  const [students, setStudents] = useState();

  useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
      .then((res) => res.json())
      .then((data) => {
        const stateData = data.students.map((student) => {
          return { ...student, tags: [] };
        });
        setStudents(stateData);
      });
  }, []);

  const handleTagInput = (studentID, studentObj) => {
    const addTagToList = students.map((student) => {
      if (student.id == studentID) {
        return studentObj;
      } else {
        return student;
      }
    });
    setStudents(addTagToList);
  };

  return <List students={students} handleTagInput={handleTagInput} />;
}

export default App;
