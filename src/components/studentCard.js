import React, { useState, useEffect } from "react";

// components
import "./gradesAndTags";

// stylesheets
import "../styles/studentCard.css";
import GradesAndTags from "./gradesAndTags";

// helpers
import handleGrades from "../helpers/gradesHelper";

export default function StudentCard({ studentInfo, handleTagInput }) {
  // init state management for:
  // single student object,
  // truthy/falsy showGrades,
  // tagInput value
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

  // state and input submission handlers
  const handleShowState = () => {
    setShowGrades(!showGrades);
  };

  const handleTagSubmission = (e) => {
    if (e.keyCode === 13) {
      const newTagArray = [...studentInfoState.tags, tagInput];
      setStudentInfo((s) => ({ ...s, tags: newTagArray }));
      handleTagInput(id, studentInfoState);
      e.target.value = "";
    }
  };

  const handleTagChange = (e) => {
    setTagInput(e.target.value);
  };

  // parse grades on initial render
  useEffect(() => {
    handleGrades(studentInfo, setStudentInfo);
  }, [studentInfo]);

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
          <GradesAndTags
            studentInfoState={studentInfoState}
            handleTagChange={handleTagChange}
            handleTagSubmission={handleTagSubmission}
          />
        )}
      </div>
      <h2 onClick={handleShowState} className="showIcon expand-btn">
        {!showGrades ? "+" : "-"}
      </h2>
    </div>
  );
}
