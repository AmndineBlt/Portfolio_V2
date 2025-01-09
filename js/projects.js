// js/projects.js









// Gestion base de données
const projects = [
    { title: "Projet 1", description: "Description rapide du projet 1", link: "#" },
    { title: "Projet 2", description: "Description rapide du projet 2", link: "#" },
    { title: "Projet 3", description: "Description rapide du projet 3", link: "#" },
    { title: "Projet 4", description: "Description rapide du projet 4", link: "#" },
];

const allProjectsButton = document.querySelector("#projects button");
const projectsContainer = document.querySelector("#projects .grid");

allProjectsButton.addEventListener("click", () => {
    projectsContainer.innerHTML = ""; // Effacer l'ancien contenu
    projects.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.className = "bg-white rounded-lg shadow-lg p-6";
        projectCard.innerHTML = `
            <h3 class="text-xl font-semibold">${project.title}</h3>
            <p class="text-gray-600">${project.description}</p>
            <a href="${project.link}" class="text-blue-600 underline mt-2 block">Voir plus</a>
        `;
        projectsContainer.appendChild(projectCard);
    });
});