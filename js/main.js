// Import des fonctions nécessaires depuis le module timeline.js
import { timeline } from './timeline.js';

const app = {
  init() {
    timeline.isItemInView(),
    timeline.callbackFunc(),
  // Create and add timeline
  window.addEventListener("load", timeline.createTimeline);
  window.addEventListener("resize", timeline.createTimeline);
  window.addEventListener("scroll", timeline.createTimeline);
  }
}



document.addEventListener('DOMContentLoaded', app.init)





