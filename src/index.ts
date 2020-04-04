/**
 * Tech stack collapsing segments
 */

/**
 * When a segment is clicked, toggle css class to open/close segment
 */
function handleSegmentClick(this: HTMLElement): void {
  console.log("here")
  this.classList.toggle('segment--open');
}

const segments = document.getElementsByClassName('segment') as HTMLCollectionOf<
  HTMLElement
>;
for (let i = 0; i < segments.length; i++) {
  segments[i].onclick = handleSegmentClick;
}

/**
 * Map
 */

/**
 * Display map
 * The map is initially hiddent
 * This function first hides the map icon then expands the map for effet
 */
function displayMap(): void {
  const mapIcon = document.querySelector('.map__icon');
  mapIcon.classList.add('map__icon--hidden');
  const map = document.querySelector('.contact__map');
  map.classList.remove('contact__map--hidden');

  setTimeout(() => {
    map.classList.remove('contact__map--minimized');
  }, 500);
}

/**
 * Detect is element has scrolled into view
 */
function isScrolledIntoView(element: Element): boolean {
  const rect = element.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  return isVisible;
}

/**
 * Debouncer used to prevent excessive scroll computations
 */
let scrollDebounce;
/**
 * Detect whether the contact section has been intersected and if so displays the map
 */
function mapIntersectionListener(): void {
  clearTimeout(scrollDebounce);
  scrollDebounce = setTimeout(() => {
    const element = document.querySelector('.map__icon');
    if (isScrolledIntoView(element)) {
      window.removeEventListener('scroll', mapIntersectionListener);
      displayMap();
    }
  }, 50);
}

window.addEventListener('scroll', mapIntersectionListener);
