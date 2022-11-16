/* WordPress dependencies */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

const TEMPLATE = [ [ 'wpe/accordion-item' ] ];

function Accordion() {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: TEMPLATE,
		template: TEMPLATE,
		templateLock: false
	} );

	return (
		<div { ...innerBlocksProps }></div>
	);
}

export default Accordion;
