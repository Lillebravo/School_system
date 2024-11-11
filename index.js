import {
  displayAllStudents,
  displayAllTeachers,
  populateStudentSelect
} from "./modules/Display.js";
import { initializeSchool } from "./modules/Init.js";

document.addEventListener('DOMContentLoaded', () => {
  const { school, subjects } = initializeSchool();
  
  const schoolNameDiv = document.getElementById("schoolName");
  const relegateStudentButton = document.getElementById("relegateStudentButton");
  const studentsToRelegate = document.getElementById("studentsToRelegate");

  displayAllStudents(school);
  displayAllTeachers(school);
  populateStudentSelect(school);

  if (schoolNameDiv) {
    schoolNameDiv.innerHTML = school.name;
  }

  if (relegateStudentButton && studentsToRelegate) {
    relegateStudentButton.addEventListener('click', () => {
      const selectedStudent = studentsToRelegate.value;
      if (selectedStudent) {
        school.relegateStudent(selectedStudent);
        // Update displays after relegation
        displayAllStudents(school);
        populateStudentSelect(school);
        alert(`${selectedStudent} has been relegated from ${school.name}`);
      } else {
        alert("Please select a student to relegate");
      }
    });
  }

  // Example of grading a student
  const daniel = school.teachers.find(teacher => teacher.name === "Daniel");
  const johan = school.students.find(student => student.name === "Johan");

  if (daniel && johan) {
    // Grade the student in math
    const gradingResult = daniel.gradeStudent(johan, subjects.math, "A");
    console.log(gradingResult);

    // Verify the grade
    const grade = subjects.math.getStudentGrade(johan.name);
    console.log(`${johan.name}'s grade in ${subjects.math.name}:`, grade);

    // Get all of Johan's grades
    const allGrades = johan.getGrades();
    console.log(`All of ${johan.name}'s grades:`, allGrades);
  }
});