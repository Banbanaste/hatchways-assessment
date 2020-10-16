import React from "react";

export default function GradesAndTags({
  studentInfoState,
  handleTagSubmission,
  handleTagChange,
}) {
  return (
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
  );
}
