const projects = [
  {
    title: "Spielentwicklung mit 3D-Druck",
    team: "3 Schüler",
    details:
      "Ihr entwickelt ein Spiel in einem Online-Programm auf einer Webseite. Nach der Fertigstellung druckt ihr passende Elemente als 3D-Modelle aus.",
    material: "Online-Programm, 3D-Druck",
  },
  {
    title: "Solarsystem als 3D-Modell",
    team: "2 Schüler",
    details:
      "Ihr habt mit demselben Online-Programm ein Solarsystem modelliert und als 3D-gedrucktes Exemplar umgesetzt. So könnt ihr alle Planeten anschauen.",
    material: "Online-Programm, 3D-Druck",
  },
  {
    title: "Flughafen Zürich als Holzmodell",
    team: "2 Schüler",
    details:
      "Ihr habt den Flughafen Zürich als 1:1-Nachbau in Holz gestaltet. Dafür habt ihr Farben, Leim und weitere Werkmaterialien eingesetzt.",
    material: "Holz, Farben, Leim",
  },
  {
    title: "Big Ben und weitere Türme",
    team: "3 Schüler",
    details:
      "Mit Karton, Toilettenrollen und Leim habt ihr den Big Ben nachgebaut. Zusätzlich baut ihr noch weitere unterschiedliche Türme.",
    material: "Karton, Toilettenrollen, Leim",
  },
  {
    title: "Altstadt von Sitten in Minecraft",
    team: "Schülergruppe",
    details:
      "In Minecraft habt ihr die Altstadt von Sitten nachgebaut. Ausserdem fügt ihr mittelalterliche Türme hinzu und baut sie weiter aus.",
    material: "Minecraft",
  },
  {
    title: "Jack Daniel’s Designlampe",
    team: "2 Schüler",
    details:
      "Ihr stellt eine kreative Lampe aus Holz, Farbe und einer Jack Daniel’s Flasche her. Das Endprodukt ist eine dekorative kleine Lampe mit Holzrahmen.",
    material: "Holz, Farbe, Jack Daniel’s Flasche",
  },
  {
    title: "Kleiner Schaft aus Ölfass",
    team: "2 Schüler",
    details:
      "Aus einem ca. 1000-Liter-Ölfass baut ihr einen kleinen Schaft mit Holzverkleidung im Inneren.",
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
