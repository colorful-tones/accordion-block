/* WordPress dependencies */
import { __ } from '@wordpress/i18n';
import { dispatch} from '@wordpress/data';
import { PanelBody, SelectControl } from '@wordpress/components';
import {
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';

const TEMPLATE = [ [ 'wpe/accordion-item' ] ];

function Accordion( { attributes, setAttributes, clientId } ) {
	const blockProps       = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: TEMPLATE,
		template: TEMPLATE,
		templateLock: false,
	} );

	return <>
		<div { ...innerBlocksProps } />
		<InspectorControls>
			<PanelBody
				title={ __( 'Accordion Settings', 'wpe-accordion' ) }
			>
				<SelectControl
					label={ __( 'Title HTML tag', 'wpe-accordion' ) }
					value={ attributes?.accordionTitleTag }
					options={ [
						{ label: 'h3', value: 'h3', isDefault: true },
						{ label: 'h4', value: 'h4' },
						{ label: 'h5', value: 'h5' },
						{ label: 'h6', value: 'h6' },
						{ label: 'p', value: 'p' },
						{ label: 'span', value: 'span' },
						{ label: 'div', value: 'div' },
					] }
					onChange={ ( value ) => {
						setAttributes( { accordionTitleTag: value } );

						const children = select( 'core/block-editor' ).getBlocksByClientId( clientId )[ 0 ].innerBlocks;

						children.forEach( child => {
							dispatch( 'core/block-editor' ).updateBlockAttributes( child?.clientId, { accordionTitleTag: value } );
						} );
					} }
				/>
			</PanelBody>
		</InspectorControls>
	</>;
}

export default Accordion;
