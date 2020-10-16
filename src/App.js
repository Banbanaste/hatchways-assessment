import React, { useEffect, useState } from "react";

// components
import List from "./components/list";

function App() {
  // init state
  // track student info list
  const [students, setStudents] = useState();

  useEffect(() => {
    // initial api fetch
    // state initializaion from api res
    // add tags to each student object
    fetch("https://api.hatchways.io/assessment/students")
      .then((res) => res.json())
      .then((data) => {
        const stateData = data.students.map((student) => {
          return { ...student, tags: [] };
        });
        setStudents(stateData);
      });
  }, []);

  // tag input handler
  // located here to update the master state (students)
  const handleTagInput = (studentID, studentObj) => {
    const addTagToList = students.map((student) => {
      if (student.id === studentID) {
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
