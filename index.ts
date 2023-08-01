let root: any = document.querySelector("#root");
root.innerHTML = "<h1>Xin chào rikket</h1>";

enum Sex {
  MALE,
  FEMALE,
}

interface Student {
  name: string;
  age: number;
  sex: Sex;
}

let students: Student[] = [
  {
    name: "Trần Khoa",
    age: 25,
    sex: Sex.MALE,
  },
  {
    name: "Quách Trường Tân",
    age: 40,
    sex: Sex.MALE,
  },
  {
    name: "Lương Hồng Ngọc",
    age: 35,
    sex: Sex.FEMALE,
  },
  // Add more students here as needed
];

function generateTable(students: Student[]) {
  let tableHTML = `
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
    `;

  students.forEach((student, index) => {
    const sexStr = student.sex === Sex.MALE ? "MALE" : "FEMALE";
    tableHTML += `
        <tr>
          <td>${student.name}</td>
          <td>${student.age}</td>
          <td>${sexStr}</td>
          <td>
          <button onclick="handleEdit(${index})">Edit</button>
          </td>
        </tr>
      `;
  });

  tableHTML += `
        </tbody>
      </table>
    `;

  return tableHTML;
}
const handleEdit = (index) => {
  const editForm = document.getElementById("editStudentForm");
  const student = students[index];

  const editNameInput = document.getElementById("editName");
  const editAgeInput = document.getElementById("editAge");
  const editGenderInput = document.getElementById("editGender");

  editNameInput.value = student.name;
  editAgeInput.value = student.age.toString();
  editGenderInput.value = student.sex.toString();

  editForm.onsubmit = function (event) {
    event.preventDefault();

    const editedName = editNameInput.value.trim();
    const editedAge = parseInt(editAgeInput.value);
    const editedSex = parseInt(editGenderInput.value);

    if (editedName && !isNaN(editedAge) && !isNaN(editedSex)) {
      const editedStudent = {
        name: editedName,
        age: editedAge,
        sex: editedSex,
      };
      students[index] = editedStudent;
      let root1 = document.querySelector("#root1");
      root1.innerHTML = generateTable(students);
    }
  };
};

// Function để thêm mới sinh viên
function addStudent(event: Event) {
  event.preventDefault();

  const nameInput: HTMLInputElement = document.querySelector("#name");
  const ageInput: HTMLInputElement = document.querySelector("#age");
  const genderInput: HTMLSelectElement =
    document.querySelector("#gender");

  const newStudent: Student = {
    name: nameInput.value,
    age: parseInt(ageInput.value),
    sex: parseInt(genderInput.value),
  };

  students.push(newStudent);
  let root1: any = document.querySelector("#root1");
  root1.innerHTML = generateTable(students);

  // Reset form
  nameInput.value = "";
  ageInput.value = "";
  genderInput.selectedIndex = 0;
}

// Lắng nghe sự kiện submit của form
const form: HTMLFormElement = document.querySelector("#studentForm");
form.addEventListener("submit", addStudent);

// Lắng nghe sự kiện submit của form thêm mới sinh viên
const form: HTMLFormElement = document.querySelector("#studentForm");
form.addEventListener("submit", addStudent);

// Get the root element and insert  the table
let root1: any = document.querySelector("#root1");
root1.innerHTML = generateTable(students);
