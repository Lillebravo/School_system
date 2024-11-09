document.addEventListener("DOMContentLoaded", () => {
  const schoolNameDiv = document.getElementById("schoolName");
  const relegateStudentButton = document.getElementById(
    "relegateStudentButton"
  );
  const studentsToRelegate = document.getElementById("studentsToRelegate");

  if (schoolNameDiv) {
    schoolNameDiv.innerHTML = school.name;
  }
});
