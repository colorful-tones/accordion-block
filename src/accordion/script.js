import Accordion from './accordion';

export { Accordion };

export default Accordion;

// Init accordions.
const accordions = document.querySelectorAll( '.wp-block-wpe-accordion .accordion-title' );

accordions.forEach( ( accordionEl ) => {
	new Accordion( accordionEl );
} );
