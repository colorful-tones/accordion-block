/**
 * WordPress dependencies
 */
import { useInnerBlocksProps, RichText, useBlockProps, store as blockEditorStore } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Constants
 */
const TEMPLATE = [
	[ 'core/paragraph', { placeholder : 'Add content…' } ],
];


function AccordionItem( { attributes, setAttributes, clientId } ) {
	const { accordionTitle } = attributes;
	const { accordionId } = attributes;
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		template: TEMPLATE,
		templateLock: false,
	} );

	return(
		<>
			<h3 { ...innerBlocksProps }>
				<button
					className='accordion-trigger'
					onClick={ ( event ) => event.preventDefault() }
				>
					<RichText
						tagName='span'
						aria-label={ __( 'Add accordion title' ) }
						className='accordion-title'
						withoutInteractiveFormatting
						value={ !! accordionTitle ? accordionTitle : __( 'Accordion Toggle Title' ) }
						onChange={ ( newAccordionTitle ) =>
							setAttributes( { accordionTitle: newAccordionTitle, accordionId: clientId } )
						}
					/>
					<span className='accordion-icon'></span>
				</button>
			</h3>
			<div { ...innerBlocksProps }></div>
		</>
	);
}

export default AccordionItem;
