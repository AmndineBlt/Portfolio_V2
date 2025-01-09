//-------------------------------Script Timeline-------------------------------//
// Sélectionne les éléments de la timeline
const timelineItems = document.querySelectorAll(".timeline li");

// Vérifie si un élément est visible dans la fenêtre
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

// Ajoute la classe "show" aux éléments visibles
function revealTimelineItems() {
  timelineItems.forEach((item) => {
    if (isElementInViewport(item)) {
      item.classList.add("show");
    }
  });
}

// Écoute les événements
["load", "resize", "scroll"].forEach((event) =>
  window.addEventListener(event, revealTimelineItems)
);

