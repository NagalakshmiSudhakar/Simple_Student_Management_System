
const inputElement = document.getElementById("myInput");
const store = document.getElementById("Store");

function updateStudent() {
    const students = JSON.parse(localStorage.getItem("students")) || [];

    store.innerHTML = "";

    students.forEach(function(name, index) {
        const student = document.createElement("p");
        student.textContent = (index + 1) + ". " + name;
        store.appendChild(student);
    });
}

function Add() {
    const name = inputElement.value.trim();

    if (name === "") {
        alert("Please enter the student name");
        return;
    }

    const students = JSON.parse(localStorage.getItem("students")) || [];

    students.push(name);

    localStorage.setItem("students", JSON.stringify(students));

    inputElement.value = "";

    // Refresh the list only if it is currently visible
    if (store.style.display !== "none") {
        updateStudent();
    }
}

function Delete() {
    const students = JSON.parse(localStorage.getItem("students")) || [];

    if (students.length === 0) {
        alert("No students to delete");
        return;
    }

    students.pop();

    localStorage.setItem("students", JSON.stringify(students));

    if (store.style.display !== "none") {
        updateStudent();
    }
}

function viewStudent() {
    if (store.style.display === "none") {
        store.style.display = "block";
        updateStudent();
    } else {
        store.style.display = "none";
    }
}
