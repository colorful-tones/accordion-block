<?php
/**
 * Plugin Name:       Accordion
 * Description:       An accordion block with collapsible sections
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.2
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wpe-accordion
 * Domain Path:       /languages
 *
 * @package           wpe-accordion
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @since 0.1.0
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function wpe_accordion_block_init() {
	register_block_type( __DIR__ . '/build/accordion-item' );
	register_block_type( __DIR__ . '/build/accordion' );
}

add_action( 'init', 'wpe_accordion_block_init' );

/**
 * Register scripts for our blocks.
 *
 * @since 0.1.0
 *
 * @return void
 */
function wpe_accordion_block_scripts() {
	wp_register_script( 'wpe-accordion-js', plugin_dir_url( __FILE__ ) . 'build/accordion/script.js', null, '0.1.2', true );
}

add_action( 'init', 'wpe_accordion_block_scripts' );

/**
 * Load plugin text domain.
 *
 * @since 0.1.2
 *
 * @return void
 */
function wpe_accordion_load_text_domain() {
	load_plugin_textdomain( 'wpe-accordion', false, basename( __DIR__ ) . '/languages' );
}

add_action( 'plugins_loaded', 'wpe_accordion_load_text_domain' );
