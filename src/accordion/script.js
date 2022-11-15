import Accordion from './accordion';

export { Accordion };

export default Accordion;

// Init accordions
const accordions = document.querySelectorAll( '.wp-block-wpe-accordion h3' );

accordions.forEach( ( accordionEl ) => {
	new Accordion( accordionEl );
} );
