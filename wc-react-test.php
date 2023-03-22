<?php
/**
 * Plugin Name:       WC React Test
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Kathy
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wc-react-test
 *
 * @package           create-block
 */

function kia_add_app_root_to_product() {
    wp_enqueue_script( 'wc-react-test' );
    echo '<div id="app-root">TEST</div>';
}
add_action( 'woocommerce_before_add_to_cart_form', 'kia_add_app_root_to_product' );


function kia_register_scripts() {

	$script_url  = untrailingslashit( plugin_dir_url( __FILE__ ) ) . '/build/index.js';

    $script_asset_path = untrailingslashit( plugin_dir_path( __FILE__ ) ) . '/build/index.asset.php';

    $script_asset      = file_exists( $script_asset_path )
        ? require $script_asset_path
        : array(
            'dependencies' => array(),
            'version'      => '1.0',
        );

    wp_register_script(
        'wc-react-test',
        $script_url,
        $script_asset[ 'dependencies' ],
        $script_asset[ 'version' ],
        true
    );

}
add_action( 'wp_enqueue_scripts', 'kia_register_scripts' );