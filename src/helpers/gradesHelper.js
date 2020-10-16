export default function handleGrades(studentInfoState, setStudentInfo) {
  const grades = studentInfoState.grades;

  const parsedGrades = grades.map((grade) => parseInt(grade));

  const reducedGrades = parsedGrades.reduce((total, next) => {
    total += next;
    return total;
  }, 0);

  const average = reducedGrades / parsedGrades.length;

  setStudentInfo((s) => ({ ...s, grades: parsedGrades, average }));
}
