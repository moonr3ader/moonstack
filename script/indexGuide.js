const form = document.getElementById("projectForm");
const projectList = document.getElementById("projectList");

// Default projects (from your original table)
const defaultProjects = [
  {
    name: "Odd or Even Number Version 1",
    link: "oddEven.html",   // ✅ no "lesson/"
    start: "2025-09-10",
    end: "2025-09-10",
    remarks: "Did as part of Logic Building Exercise"
  },
  {
    name: "Odd or Even Number Version 2",
    link: "oddEven2.html",
    start: "2025-09-10",
    end: "2025-09-10",
    remarks: "Used ChatGPT to enhance the style, same logic though"
  },
  {
    name: "Basic HTML Form",
    link: "formPractice.html",
    start: "2025-09-11",
    end: "2025-09-11",
    remarks: "HTML Forms Basic Structure"
  },
  {
    name: "Advanced HTML Form",
    link: "advanceFormPractice.html",
    start: "2025-09-11",
    end: "2025-09-11",
    remarks: "Advanced HTML Form practice"
  },
  {
    name: "Online Survey Form",
    link: "surveyform.html",
    start: "2025-09-11",
    end: "2025-09-11",
    remarks: "Create a simple, interactive Online Survey Form using only HTML"
  }
];

// ✅ Initialize projects (merge default + stored)
function initializeProjects() {
  let storedProjects = JSON.parse(localStorage.getItem("projects"));

  if (!storedProjects) {
    // First load → save defaults into localStorage
    localStorage.setItem("projects", JSON.stringify(defaultProjects));
    return defaultProjects;
  }

  return storedProjects;
}

// Load projects
function loadProjects() {
  let projects = initializeProjects();
  projectList.innerHTML = "";

  projects.forEach((proj, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td><a href="${proj.link}" target="_blank">${proj.name}</a></td>
      <td>${proj.start}</td>
      <td>${proj.end}</td>
      <td>${proj.remarks}</td>
      <td><button onclick="removeProject(${index})">Remove</button></td>
    `;

    projectList.appendChild(row);
  });
}

// Save projects
function saveProjects(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}

// Add new project
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newProject = {
    name: document.getElementById("projectName").value,
    link: document.getElementById("projectLink").value,
    start: document.getElementById("startDate").value,
    end: document.getElementById("endDate").value,
    remarks: document.getElementById("remarks").value
  };

  let projects = initializeProjects();
  projects.push(newProject);

  saveProjects(projects);
  loadProjects();
  form.reset();
});

// Remove project
function removeProject(index) {
  let projects = initializeProjects();
  projects.splice(index, 1);
  saveProjects(projects);
  loadProjects();
}

// Initialize
loadProjects();