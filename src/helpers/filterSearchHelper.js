export default function filteredList(students, filterInput, tagInput) {
  return students?.filter((student) => {
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
}
