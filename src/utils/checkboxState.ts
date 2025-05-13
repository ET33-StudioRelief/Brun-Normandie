export function initializeCheckboxStates(): void {
  const checkboxes = document.querySelectorAll<HTMLInputElement>('.w-checkbox-input');

  checkboxes.forEach((checkbox) => {
    // Fonction pour mettre à jour l'état visuel
    const updateState = (): void => {
      const label = checkbox.closest('.hero_form-input');
      if (!label) return;

      if (checkbox.checked) {
        label.classList.add('is-checked');
      } else {
        label.classList.remove('is-checked');
      }
    };

    // Met à jour à l'initialisation
    updateState();

    // Met à jour à chaque changement
    checkbox.addEventListener('change', updateState);
  });
}
