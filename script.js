const projects = [
  {
    title: "Spielentwicklung mit 3D-Druck",
    team: "3 Schüler",
    details:
      "Die Gruppe entwickelt ein Spiel in einem Online-Programm auf einer Webseite. Nach Fertigstellung werden Elemente des Spiels als 3D-Modelle ausgedruckt.",
    material: "Online-Programm, 3D-Druck",
  },
  {
    title: "Solarsystem als 3D-Modell",
    team: "2 Schüler",
    details:
      "Mit demselben Online-Programm wurde ein Solarsystem modelliert und als 3D-gedrucktes Exemplar umgesetzt. Alle Planeten können betrachtet werden.",
    material: "Online-Programm, 3D-Druck",
  },
  {
    title: "Flughafen Zürich als Holzmodell",
    team: "2 Schüler",
    details:
      "Die Gruppe hat den Flughafen Zürich als 1:1-Nachbau in Holz gestaltet. Dafür nutzten sie Farben, Leim und weitere Werkmaterialien.",
    material: "Holz, Farben, Leim",
  },
  {
    title: "Big Ben und weitere Türme",
    team: "3 Schüler",
    details:
      "Mit Karton, Toilettenrollen und Leim entstand ein Nachbau des Big Ben. Zusätzlich wurden weitere unterschiedliche Türme gebaut.",
    material: "Karton, Toilettenrollen, Leim",
  },
  {
    title: "Altstadt von Sitten in Minecraft",
    team: "Schülergruppe",
    details:
      "Im Spiel Minecraft wurde die Altstadt von Sitten nachgebaut. Ergänzt wurde das Projekt durch mittelalterliche Türme.",
    material: "Minecraft",
  },
  {
    title: "Jack Daniel’s Designlampe",
    team: "2 Schüler",
    details:
      "Die Gruppe baute eine kreative Lampe aus Holz, Farbe und einer Jack Daniel’s Flasche. Das Ergebnis ist eine dekorative kleine Lampe mit Holzrahmen.",
    material: "Holz, Farbe, Jack Daniel’s Flasche",
  },
  {
    title: "Kleiner Schaft aus Ölfass",
    team: "2 Schüler",
    details:
      "Aus einem ca. 1000-Liter-Ölfass wurde ein kleiner Schaft mit Holzverkleidung im Inneren gebaut.",
    material: "Ölfass, Holz",
  },
];

const projectGrid = document.getElementById("projectGrid");

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
