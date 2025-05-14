import './index.css';

import {
  animateListItemsOnView,
  animateSectionsOnView,
  animateTestimonialOnView,
} from './utils/animation';
import { initializeCheckboxStates } from './utils/checkboxState';
import { loadFinsweetCookieConsent, loadMultiStep } from './utils/loadScript';

// Script cookie consent and multi step form
loadFinsweetCookieConsent();
loadMultiStep();

function init() {
  initializeCheckboxStates();
  animateSectionsOnView();
  animateTestimonialOnView();
  animateListItemsOnView();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
