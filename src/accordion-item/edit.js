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

	const TitleTag = useSelect(
		( select ) => {
			const parent           = select( 'core/block-editor' )?.getBlockParents( clientId );
			const parentAttributes = select( 'core/block-editor' )?.getBlockAttributes( parent );

			return parentAttributes?.accordionTitleTag;
		},
		[ clientId ]
	) ?? 'h3';

	if ( attributes?.accordionTitleTag !== TitleTag ) {
		setAttributes( { accordionTitleTag: TitleTag } );
	}

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
						placeholder={ accordionTitle ?? __(
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
