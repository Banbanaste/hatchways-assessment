import React, { useState, useEffect } from "react";

// stylesheets
import "../styles/studentCard.css";

export default function StudentCard({ studentInfo, handleTagInput }) {
  const [studentInfoState, setStudentInfo] = useState(studentInfo);
  const [showGrades, setShowGrades] = useState(false);
  const [tagInput, setTagInput] = useState();
  let {
    id,
    company,
    email,
    firstName,
    lastName,
    pic,
    skill,
  } = studentInfoState;

  const handleGrades = () => {
    const grades = studentInfoState.grades;

    const parsedGrades = grades.map((grade) => parseInt(grade));

    const reducedGrades = parsedGrades.reduce((total, next) => {
      total += next;
      return total;
    }, 0);

    const average = reducedGrades / parsedGrades.length;

    setStudentInfo((s) => ({ ...s, grades: parsedGrades, average }));
  };

  const handleShowState = () => {
    setShowGrades(!showGrades);
  };

  const handleTagSubmission = (e) => {
    if (e.keyCode == 13) {
      const newTagArray = [...studentInfoState.tags, tagInput];
      setStudentInfo((s) => ({ ...s, tags: newTagArray }));
      handleTagInput(id, studentInfoState);
      e.target.value = "";
    }
  };

  const handleTagChange = (e) => {
    setTagInput(e.target.value);
  };

  useEffect(() => {
    handleGrades();
  }, []);

  return (
    <div className="studentCard">
      <img
        className="userPic"
        src={pic}
        alt={`${firstName} ${lastName} user pic`}
      />
      <div className="cardBody">
        <h2>{`${firstName} ${lastName}`}</h2>
        <ul className="userInfoList">
          <li>Email: {email}</li>
          <li>Company: {company}</li>
          <li>Skill: {skill}</li>
          <li>Average: {studentInfoState.average}%</li>
        </ul>
        {showGrades && (
          <>
            <ul className="gradeList">
              {studentInfoState.grades.map((grade) => {
                const testNum = studentInfoState.grades.indexOf(grade);
                return (
                  <li key={testNum}>
                    Test {testNum + 1}: <span>{grade}%</span>
                  </li>
                );
              })}
            </ul>
            <div className="tagList">
              {studentInfoState.tags?.map((tag) => (
                <span className="studentTag">{tag}</span>
              ))}
            </div>
            <input
              id="add-tag-input"
              className="tagInput"
              placeholder="Add a tag"
              onChange={handleTagChange}
              onKeyDown={handleTagSubmission}
            />
          </>
        )}
      </div>
      <h2 onClick={handleShowState} className="showIcon expand-btn">
        {!showGrades ? "+" : "-"}
      </h2>
    </div>
  );
}
