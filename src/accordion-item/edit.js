/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import {
	useInnerBlocksProps,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';

/**
 * Constants.
 */
const TEMPLATE = [ [ 'core/paragraph', { placeholder: 'Add content…' } ] ];

function AccordionItem( { attributes, setAttributes, clientId } ) {
	const { accordionTitle } = attributes;
	const blockProps         = useBlockProps();
	const innerBlocksProps   = useInnerBlocksProps( blockProps, {
		template: TEMPLATE,
		templateLock: false,
	} );

	const parent = useSelect(
		( select ) => select( 'core/block-editor' ).getBlockParents( clientId ),
		[ clientId ]
	);

	const TitleTag = parent?.attributes?.accordionTitleTag ?? 'h3';

	return (
		<div { ...blockProps }>
			<TitleTag>
				<button
					className="accordion-trigger"
					onClick={ ( event ) => event.preventDefault() }
				>
					<RichText
						tagName="span"
						aria-label={ __(
							'Add accordion title',
							'wpe-accordion'
						) }
						className="accordion-title"
						value={ accordionTitle ?? __(
							'Accordion Toggle Title',
							'wpe-accordion'
						) }
						onChange={ ( newAccordionTitle ) =>
							setAttributes( {
								accordionTitle: newAccordionTitle,
								accordionId: clientId,
							} )
						}
					/>
					<span className="accordion-icon"/>
				</button>
			</TitleTag>
			<div className={ 'wp-block-wpe-accordion-item__inner' }>
				{ innerBlocksProps.children }
			</div>
		</div>
	);
}

export default AccordionItem;
