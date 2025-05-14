import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const isDesktop = () => window.matchMedia('(min-width: 768px)').matches;

export function animateSectionsOnView() {
  if (!isDesktop()) return;
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
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  });
}

export function animateTestimonialOnView() {
  if (!isDesktop()) return;
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

export function animateListItemsOnView() {
  const lists = document.querySelectorAll<HTMLElement>('.list, .faq_list');

  lists.forEach((list) => {
    const children = Array.from(list.children) as HTMLElement[];
    gsap.fromTo(
      children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.2, // délai entre chaque item
        scrollTrigger: {
          trigger: list,
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  });
}
