/**
 * WordPress dependencies.
 */
import {
	RichText,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const Save = ( { attributes } ) => {
	const { accordionTitle } = attributes;
	const { accordionId }    = attributes;
	const blockProps         = useBlockProps.save();
	const innerBlocksProps   = useInnerBlocksProps.save( blockProps );
	const truncId            = accordionId?.slice( - 8 );
	const TitleTag           = attributes?.accordionTitleTag ?? 'h3';

	return (
		<>
			<TitleTag className={'accordion-title'}>
				<button
					className="accordion-trigger"
					id={ `accordion-item-${ truncId }` }
					aria-controls={ `accordion-content-${ truncId }` }
					aria-expanded="false"
				>
					<RichText.Content
						tagName="span"
						className="accordion-title-content"
						value={ accordionTitle ?? __( 'Accordion Title' ) }
					/>
					<span className="accordion-icon"/>
				</button>
			</TitleTag>
			<div
				{ ...innerBlocksProps }
				id={ `accordion-content-${ truncId }` }
				role="region"
				aria-hidden="true"
				aria-labelledby={ `accordion-item-${ truncId }` }
			/>
		</>
	);
};
export default Save;
