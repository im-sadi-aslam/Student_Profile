let students = [
  {
    name: "Hureen Durrani",
    age: 20,
    course: "Web Development",
    email: "ayesha@example.com",
    image: "https://st.depositphotos.com/35744008/55780/i/450/depositphotos_557803448-stock-photo-front-portrait-beautiful-teenage-girl.jpg"
  },
  {
    name: "Roshaan Raza",
    age: 22,
    course: "Computer Science",
    email: "ali@example.com",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxN4tAGSyXoCbnlMAXWblfUGyI-SpopwxO3GwJgnV4IGY8GLwLeDR0ZKNs_rHeBgFgEU&usqp=CAU"
  }
];

const cardContainer = document.getElementById("cardContainer");
const form = document.getElementById("studentForm");
const toggleModeBtn = document.getElementById("toggleMode");
let editIndex = null;

toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleModeBtn.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

function displayCards() {
  cardContainer.innerHTML = "";
  students.forEach((student, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${student.image}" alt="${student.name}">
      <div class="info">
        <h2>${student.name}</h2>
        <p><strong>Age:</strong> ${student.age}</p>
        <p><strong>Course:</strong> ${student.course}</p>
        <p><strong>Email:</strong> ${student.email}</p>
      </div>
      <div class="actions">
        <button class="edit-btn" onclick="editStudent(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
      </div>
    `;
    cardContainer.appendChild(card);
  });
}

displayCards();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newStudent = {
    name: form.name.value,
    age: form.age.value,
    course: form.course.value,
    email: form.email.value,
    image: form.image.value
  };

  if (editIndex === null) {
    students.push(newStudent);
  } else {
    students[editIndex] = newStudent;
    editIndex = null;
  }

  form.reset();
  displayCards();
});

function deleteStudent(index) {
  if (confirm("Are you sure you want to delete this student?")) {
    students.splice(index, 1);
    displayCards();
  }
}

function editStudent(index) {
  const student = students[index];
  form.name.value = student.name;
  form.age.value = student.age;
  form.course.value = student.course;
  form.email.value = student.email;
  form.image.value = student.image;
  editIndex = index;
}
