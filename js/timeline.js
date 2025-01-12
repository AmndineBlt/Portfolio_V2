// timeline.js

export const timeline = {
  // Sélectionner les éléments de la timeline
  timelineItems: document.querySelectorAll(".timeline li"),
  
  isItemInView(item) {
    console.log(item);
    
    let rect = item.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },
  
  callbackFunc() {
    console.log(timeline.timelineItems);
    
    timeline.timelineItems.forEach(element => {
      if (timeline.isItemInView(timeline.timelineItems[i])) {
        timeline.timelineItems[i].setAttribute('data-aos', "fade-right");
      }
    });
  },
  
};

console.log(timeline.timelineItems);