# Accordion block

A simple accordion block for WordPress. There are a few notable issues with the current implementation. One being that the [`RichText`](https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/rich-text/README.md) component still shows formatting toolbar, which makes it hard to edit the Accordion Title (toggle).

Most of the markup follows the [W3C ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion.html).
