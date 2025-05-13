import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function animateSectionsOnView() {
  const selectors = ['.section_benefices', '.section_features', '.section_faq'];
  const elements = document.querySelectorAll<HTMLElement>(selectors.join(','));

  elements.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%', // quand le haut de la section atteint 80% du viewport
          toggleActions: 'play reverse play reverse', // joue l'animation une seule fois
        },
      }
    );
  });
}

export function animateTestimonialOnView() {
  const testimonials = document.querySelectorAll<HTMLElement>('.section_testimonial');

  testimonials.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  });
}
