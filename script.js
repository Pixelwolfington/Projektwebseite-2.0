let projects = [];

const projectGrid = document.getElementById("projectGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.getElementById("filterButtons");
const resultText = document.getElementById("resultText");

const projectCount = document.getElementById("projectCount");
const teamCount = document.getElementById("teamCount");
const materialCount = document.getElementById("materialCount");

let currentFilter = "Alle";
let searchValue = "";
let categories = ["Alle"];

function showError(message) {
  projectGrid.innerHTML = `
    <article class="project-card empty-state error-state">
      <h3 class="project-title">Daten konnten nicht geladen werden</h3>
      <p class="project-description">${message}</p>
    </article>
  `;
}

async function loadProjects() {
  try {
    const response = await fetch(`projects.json?v=${Date.now()}`);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    projects = await response.json();
    categories = ["Alle", ...new Set(projects.map((project) => project.category))];

    createFilterButtons();
    updateStats();
    renderProjects();
  } catch (error) {
    console.error(error);
    showError(
      "Bitte startet die Seite über einen lokalen Server (z. B. `python3 -m http.server`) und aktualisiert danach mit Strg+F5."
    );
  }
}

function updateStats() {
  projectCount.textContent = projects.length;
  teamCount.textContent = projects.length;

  const uniqueMaterials = new Set(
    projects.flatMap((project) =>
      project.material
        .split(",")
        .map((entry) => entry.trim().toLowerCase())
        .filter(Boolean)
    )
  );

  materialCount.textContent = uniqueMaterials.size;
}

function createFilterButtons() {
  filterButtons.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = category;
    button.className = "filter-button";

    if (category === currentFilter) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      currentFilter = category;
      renderProjects();
      updateActiveFilterButton();
    });

    filterButtons.appendChild(button);
  });
}

function updateActiveFilterButton() {
  const buttons = filterButtons.querySelectorAll(".filter-button");

  buttons.forEach((button) => {
    button.classList.toggle("active", button.textContent === currentFilter);
  });
}

function getFilteredProjects() {
  const query = searchValue.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesFilter =
      currentFilter === "Alle" || project.category === currentFilter;

    const text = `${project.title} ${project.team} ${project.details} ${project.material} ${project.category}`.toLowerCase();
    const matchesSearch = !query || text.includes(query);

    return matchesFilter && matchesSearch;
  });
}

function renderProjects() {
  const filteredProjects = getFilteredProjects();

  projectGrid.innerHTML = "";

  if (filteredProjects.length === 0) {
    projectGrid.innerHTML = `
      <article class="project-card empty-state">
        <h3 class="project-title">Kein Projekt gefunden</h3>
        <p class="project-description">Passt eure Suche oder den Filter an.</p>
      </article>
    `;
  } else {
    filteredProjects.forEach((project, index) => {
      const card = document.createElement("article");
      card.className = "project-card";

      card.innerHTML = `
        <p class="project-number">Projekt ${index + 1}</p>
        <p class="project-category">${project.category}</p>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-tech">${project.team}</p>
        <p class="project-description">${project.details}</p>
        <p class="project-material"><strong>Material/Tool:</strong> ${project.material}</p>
      `;

      projectGrid.appendChild(card);
    });
  }

  resultText.textContent = `${filteredProjects.length} von ${projects.length} Projekten sichtbar`;
}

searchInput.addEventListener("input", (event) => {
  searchValue = event.target.value;
  renderProjects();
});

loadProjects();
