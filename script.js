const projects = [
  {
    title: "Intelligentes Gewächshaus",
    tech: "Arduino, Sensorik, C++",
    description:
      "Automatisierte Steuerung von Licht, Temperatur und Bewässerung für Pflanzen im Klassenzimmer.",
  },
  {
    title: "Lern-App für Mathematik",
    tech: "HTML, CSS, JavaScript",
    description:
      "Interaktive Aufgaben mit Sofort-Feedback zur Vorbereitung auf Klassenarbeiten.",
  },
  {
    title: "Mini-Roboter mit Linienverfolgung",
    tech: "Mikrocontroller, Robotik",
    description:
      "Ein Roboterfahrzeug, das mithilfe von Infrarotsensoren selbstständig einer Linie folgt.",
  },
  {
    title: "Schulnetzwerk-Visualisierung",
    tech: "Python, Netzwerktechnik",
    description:
      "Grafische Darstellung der Geräte im Schulnetz und Analyse von Verbindungswegen.",
  },
];

const projectGrid = document.getElementById("projectGrid");

projects.forEach((project) => {
  const card = document.createElement("article");
  card.className = "project-card";

  card.innerHTML = `
    <h3 class="project-title">${project.title}</h3>
    <p class="project-tech">${project.tech}</p>
    <p class="project-description">${project.description}</p>
  `;

  projectGrid.appendChild(card);
});
