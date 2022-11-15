export default class Accordion {
	constructor( domNode ) {
		this.rootEl = domNode;
		this.buttonEl = this.rootEl.querySelector( 'button[aria-expanded]' );

		const controlsId = this.buttonEl.getAttribute( 'aria-controls' );
		this.contentEl = document.getElementById( controlsId );

		// Set initial state
		this.buttonEl.setAttribute( 'aria-expanded', 'false');
		this.open = false;
		this.contentEl.setAttribute( 'hidden', '' );

		// Add event listeners
		this.buttonEl.addEventListener( 'click', this.onButtonClick.bind( this ) );
	}

	onButtonClick() {
		this.toggle( ! this.open );
	}

	toggle( open ) {
		// Don't do anything if the open state doesn't change
		if ( open === this.open ) {
			return;
		}

		// Update the internal state
		this.open = open;

		// Handle DOM updates
		this.buttonEl.setAttribute( 'aria-expanded', `${open}` );
		if ( open ) {
			this.contentEl.removeAttribute( 'hidden' );
		} else {
			this.contentEl.setAttribute( 'hidden', '' );
		}
	}

	// Add public open and close methods for convenience
	open() {
		this.toggle( true );
	}

	close() {
		this.toggle( false );
	}
}
