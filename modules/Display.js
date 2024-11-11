import { Grade } from "./Grade.js";

export function displayAllStudents(school) {
  let studentHtml = "";
  const students = school.students;

  students.forEach((student, index) => {
    const studentSubjectsMap = student.subjects
      .map((subject) => subject.name)
      .join(", ");

    studentHtml += `<p>Student ${index + 1}: ${student.name} </p>`;
    studentHtml += `<p>Age: ${student.age}</p>`;
    studentHtml += `<p>Gender: ${student.gender}`;
    studentHtml += `<p>Subjects: ${studentSubjectsMap} </p>`;
    studentHtml += "-------------------------------------------------------";
  });

  const studentsDiv = document.getElementById("studentNames");
  const nrOfStudentsDiv = document.getElementById("nrOfStudents");

  if (studentsDiv) {
    studentsDiv.innerHTML = studentHtml;
  }

  if (nrOfStudentsDiv) {
    nrOfStudentsDiv.innerHTML = `There are: ${students.length} students at ${school.name}. <br> -------------------------------------------------------`;
  }
}

export function displayAllTeachers(school) {
  let teacherHtml = "";
  const teachers = school.teachers;

  teachers.forEach((teacher, index) => {
    const teacherSubjectsMap = teacher.subjects
      .map((subject) => subject.name)
      .join(", ");

    teacherHtml += `<p>Teacher ${index + 1}: ${teacher.name} </p>`;
    teacherHtml += `<p>Teaches in subjects: ${teacherSubjectsMap} </p>`;
    teacherHtml += "-------------------------------------------------------";
  });

  const teachersDiv = document.getElementById("teacherNames");
  const nrOfTeachersDiv = document.getElementById("nrOfTeachers");

  if (teachersDiv) {
    teachersDiv.innerHTML = teacherHtml;
  }

  if (nrOfTeachersDiv) {
    nrOfTeachersDiv.innerHTML = `There are: ${teachers.length} teachers teaching at ${school.name}. <br> -------------------------------------------------------`;
  }
}

export function populateStudentSelect(school) {
  const selectElement = document.getElementById("studentsToRelegate");
  if (!selectElement) return;

  selectElement.innerHTML = "";

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Select a student";
  selectElement.appendChild(defaultOption);

  school.students.forEach((student) => {
    const option = document.createElement("option");
    option.value = student.name;
    option.textContent = student.name;
    selectElement.appendChild(option);
  });
}
