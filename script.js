const projects = [
  {
    title: "Spielentwicklung mit 3D-Druck",
    team: "3 Schüler",
    details:
      "Ihr entwickelt ein Spiel in einem Online-Programm auf einer Webseite. Nach der Fertigstellung druckt ihr passende Elemente als 3D-Modelle aus.",
    material: "Online-Programm, 3D-Druck",
    category: "Digital",
      "Die Gruppe entwickelt ein Spiel in einem Online-Programm auf einer Webseite. Nach Fertigstellung werden Elemente des Spiels als 3D-Modelle ausgedruckt.",
    material: "Online-Programm, 3D-Druck",
  },
  {
    title: "Solarsystem als 3D-Modell",
    team: "2 Schüler",
    details:
      "Ihr habt mit demselben Online-Programm ein Solarsystem modelliert und als 3D-gedrucktes Exemplar umgesetzt. So könnt ihr alle Planeten anschauen.",
    material: "Online-Programm, 3D-Druck",
    category: "3D-Druck",
      "Mit demselben Online-Programm wurde ein Solarsystem modelliert und als 3D-gedrucktes Exemplar umgesetzt. Alle Planeten können betrachtet werden.",
    material: "Online-Programm, 3D-Druck",
  },
  {
    title: "Flughafen Zürich als Holzmodell",
    team: "2 Schüler",
    details:
      "Ihr habt den Flughafen Zürich als 1:1-Nachbau in Holz gestaltet. Dafür habt ihr Farben, Leim und weitere Werkmaterialien eingesetzt.",
    material: "Holz, Farben, Leim",
    category: "Modellbau",
      "Die Gruppe hat den Flughafen Zürich als 1:1-Nachbau in Holz gestaltet. Dafür nutzten sie Farben, Leim und weitere Werkmaterialien.",
    material: "Holz, Farben, Leim",
  },
  {
    title: "Big Ben und weitere Türme",
    team: "3 Schüler",
    details:
      "Mit Karton, Toilettenrollen und Leim habt ihr den Big Ben nachgebaut. Zusätzlich baut ihr noch weitere unterschiedliche Türme.",
    material: "Karton, Toilettenrollen, Leim",
    category: "Modellbau",
      "Mit Karton, Toilettenrollen und Leim entstand ein Nachbau des Big Ben. Zusätzlich wurden weitere unterschiedliche Türme gebaut.",
    material: "Karton, Toilettenrollen, Leim",
  },
  {
    title: "Altstadt von Sitten in Minecraft",
    team: "Schülergruppe",
    details:
      "In Minecraft habt ihr die Altstadt von Sitten nachgebaut. Ausserdem fügt ihr mittelalterliche Türme hinzu und baut sie weiter aus.",
    material: "Minecraft",
    category: "Gaming",
      "Im Spiel Minecraft wurde die Altstadt von Sitten nachgebaut. Ergänzt wurde das Projekt durch mittelalterliche Türme.",
    material: "Minecraft",
  },
  {
    title: "Jack Daniel’s Designlampe",
    team: "2 Schüler",
    details:
      "Ihr stellt eine kreative Lampe aus Holz, Farbe und einer Jack Daniel’s Flasche her. Das Endprodukt ist eine dekorative kleine Lampe mit Holzrahmen.",
    material: "Holz, Farbe, Jack Daniel’s Flasche",
    category: "Design",
      "Die Gruppe baute eine kreative Lampe aus Holz, Farbe und einer Jack Daniel’s Flasche. Das Ergebnis ist eine dekorative kleine Lampe mit Holzrahmen.",
    material: "Holz, Farbe, Jack Daniel’s Flasche",
  },
  {
    title: "Kleiner Schaft aus Ölfass",
    team: "2 Schüler",
    details:
      "Aus einem ca. 1000-Liter-Ölfass baut ihr einen kleinen Schaft mit Holzverkleidung im Inneren.",
    material: "Ölfass, Holz",
    category: "Upcycling",
      "Aus einem ca. 1000-Liter-Ölfass wurde ein kleiner Schaft mit Holzverkleidung im Inneren gebaut.",
    material: "Ölfass, Holz",
  },
];

const projectGrid = document.getElementById("projectGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.getElementById("filterButtons");
const resultText = document.getElementById("resultText");

const projectCount = document.getElementById("projectCount");
const teamCount = document.getElementById("teamCount");
const materialCount = document.getElementById("materialCount");

let currentFilter = "Alle";
let searchValue = "";

const categories = ["Alle", ...new Set(projects.map((project) => project.category))];

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

updateStats();
createFilterButtons();
renderProjects();

projects.forEach((project, index) => {
  const card = document.createElement("article");
  card.className = "project-card";

  card.innerHTML = `
    <p class="project-number">Projekt ${index + 1}</p>
    <h3 class="project-title">${project.title}</h3>
    <p class="project-tech">${project.team}</p>
    <p class="project-description">${project.details}</p>
    <p class="project-material"><strong>Material/Tool:</strong> ${project.material}</p>
  `;

  projectGrid.appendChild(card);
});
