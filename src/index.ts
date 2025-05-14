import './index.css';

import {
  animateListItemsOnView,
  animateSectionsOnView,
  animateTestimonialOnView,
} from './utils/animation';
import { initializeCheckboxStates } from './utils/checkboxState';
import { loadFinsweetCookieConsent, loadMultiStep } from './utils/loadScript';

// Charger Finsweet Cookie Consent le plus tôt possible
loadFinsweetCookieConsent();

// Initialise les états des checkboxes et lance l'animation des sections
function init() {
  initializeCheckboxStates();
  animateSectionsOnView();
  animateTestimonialOnView();
  animateListItemsOnView();
}

// S'assure que le DOM est complètement chargé
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  // Si le DOM est déjà chargé, on initialise directement
  init();
}

// Charger Multi Step après le DOM
document.addEventListener('DOMContentLoaded', () => {
  loadMultiStep();
});
