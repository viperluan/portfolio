/**
 * Function of this repository:
 *
 * https://github.com/origamid/publico/blob/main/scroll-suave-para-link-interno-javascript-puro/scroll-suave-final/js/app.js
 */

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
const smoothScrollTo = (endX: number, endY: number, duration?: number) => {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time: number, from: number, distance: number, duration: number) => {
    if ((time /= duration / 2) < 1) return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);

    if (time >= duration) {
      clearInterval(timer);
    }

    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

const getScrollTopByHref = (element: EventTarget & HTMLAnchorElement, document: Document) => {
  const id = element.getAttribute('href') as string;

  return (document.querySelector(id) as HTMLElement)?.offsetTop;
};

const scrollToPosition = (positionY: number, duration?: number) => {
  smoothScrollTo(0, positionY, duration);
};

export const scrollToIdOnClick = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  document: Document,
  duration?: number
) => {
  event.preventDefault();

  const position = getScrollTopByHref(event.currentTarget, document) - 30;

  scrollToPosition(position, duration);
};
