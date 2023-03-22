/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

// WP 6.2 aka React 18 Approach.
//import { createRoot } from '@wordpress/element';
//const target = document.getElementById('app-root');
//const root = render( target, target );
//root.render(<h3>React SUCKS</h3>);

// WP 6.1 aka React 17 Approach.
import { render } from '@wordpress/element';
const target = document.getElementById('app-root');
render( <h3>React SUCKS</h3>, target );
