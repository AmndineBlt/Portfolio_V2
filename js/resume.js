// Gestion d'apparition au clique
const showMyResume = {
    init() {
        // Sélectionne les boutons et les contenus des onglets
        const tabBtns = document.querySelectorAll(".tab-btn");
        const tabContents = document.querySelectorAll(".resume-tab-content");

        if (tabBtns.length === 0 || tabContents.length === 0) {
            console.error("Onglets ou contenus introuvables.");
            return;
        }

        // Ajoute les événements pour chaque bouton
        tabBtns.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                // Désactive tous les contenus et boutons
                tabContents.forEach(content => content.classList.remove("active"));
                tabBtns.forEach(button => button.classList.remove("active"));

                // Active le bouton et le contenu correspondant
                btn.classList.add("active");
                tabContents[index].classList.add("active");
            });
        });
    },
};

export default showMyResume;


