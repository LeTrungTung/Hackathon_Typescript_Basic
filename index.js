var root = document.querySelector("#root");
root.innerHTML = "<h1>Xin chào rikket</h1>";
var Sex;
(function (Sex) {
    Sex[Sex["MALE"] = 0] = "MALE";
    Sex[Sex["FEMALE"] = 1] = "FEMALE";
})(Sex || (Sex = {}));
var students = [
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
function generateTable(students) {
    var tableHTML = "\n      <table>\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Age</th>\n            <th>Sex</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n    ";
    students.forEach(function (student, index) {
        var sexStr = student.sex === Sex.MALE ? "MALE" : "FEMALE";
        tableHTML += "\n        <tr>\n          <td>".concat(student.name, "</td>\n          <td>").concat(student.age, "</td>\n          <td>").concat(sexStr, "</td>\n          <td>\n          <button onclick=\"handleEdit(").concat(index, ")\">Edit</button>\n          </td>\n        </tr>\n      ");
    });
    tableHTML += "\n        </tbody>\n      </table>\n    ";
    return tableHTML;
}
var handleEdit = function (index) {
    var editForm = document.getElementById("editStudentForm");
    var student = students[index];
    var editNameInput = document.getElementById("editName");
    var editAgeInput = document.getElementById("editAge");
    var editGenderInput = document.getElementById("editGender");
    editNameInput.value = student.name;
    editAgeInput.value = student.age.toString();
    editGenderInput.value = student.sex.toString();
    editForm.onsubmit = function (event) {
        event.preventDefault();
        var editedName = editNameInput.value.trim();
        var editedAge = parseInt(editAgeInput.value);
        var editedSex = parseInt(editGenderInput.value);
        if (editedName && !isNaN(editedAge) && !isNaN(editedSex)) {
            var editedStudent = {
                name: editedName,
                age: editedAge,
                sex: editedSex,
            };
            students[index] = editedStudent;
            var root1_1 = document.querySelector("#root1");
            root1_1.innerHTML = generateTable(students);
        }
    };
};
// Function để thêm mới sinh viên
function addStudent(event) {
    event.preventDefault();
    var nameInput = document.querySelector("#name");
    var ageInput = document.querySelector("#age");
    var genderInput = document.querySelector("#gender");
    var newStudent = {
        name: nameInput.value,
        age: parseInt(ageInput.value),
        sex: parseInt(genderInput.value),
    };
    students.push(newStudent);
    var root1 = document.querySelector("#root1");
    root1.innerHTML = generateTable(students);
    // Reset form
    nameInput.value = "";
    ageInput.value = "";
    genderInput.selectedIndex = 0;
}
// Lắng nghe sự kiện submit của form
var form = document.querySelector("#studentForm");
form.addEventListener("submit", addStudent);
// Lắng nghe sự kiện submit của form thêm mới sinh viên
var form = document.querySelector("#studentForm");
form.addEventListener("submit", addStudent);
// Get the root element and insert  the table
var root1 = document.querySelector("#root1");
root1.innerHTML = generateTable(students);
