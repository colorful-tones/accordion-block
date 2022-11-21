/* WordPress dependencies */
import {
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
} from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const TEMPLATE = [ [ 'wpe/accordion-item' ] ];

function Accordion( { attributes, setAttributes } ) {
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
				<PanelRow>
					<SelectControl
						label={ __( '', '' ) }
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
						onChange={ ( value ) =>
							setAttributes( { accordionTitleTag: value } )
						}
					/>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	</>;
}

export default Accordion;
