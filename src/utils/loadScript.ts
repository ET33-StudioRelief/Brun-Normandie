/**
 * Charge dynamiquement un script externe.
 * @param src URL du script à charger
 * @param attributes Attributs HTML à ajouter au script (optionnel)
 */
export function loadScript(src: string, attributes: Record<string, string> = {}): Promise<void> {
  return new Promise((resolve, reject) => {
    // Vérifie si le script est déjà présent
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    Object.entries(attributes).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Erreur lors du chargement du script: ${src}`));
    document.head.appendChild(script);
  });
}

export function loadFinsweetCookieConsent() {
  return loadScript('https://cdn.jsdelivr.net/npm/@finsweet/cookie-consent@1/fs-cc.js', {
    'fs-cc-mode': 'opt-in',
  });
}

export function loadMultiStep() {
  return loadScript('https://cdn.jsdelivr.net/gh/videsigns/webflow-tools@latest/multi-step.js');
}
