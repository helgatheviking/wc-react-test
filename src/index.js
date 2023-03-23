/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

import { createRoot, render } from '@wordpress/element';

// React 18 uses createRoot, but is not available until WordPress 6.2 so test if import is undefined.
if ( createRoot ) {
    createRoot( target ).render( <h3>React SUCKS</h3> );
} else {
    render( <h3>React SUCKS</h3>, target );
}

