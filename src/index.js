/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

import { createRoot } from '@wordpress/element';

console.debug("createRoot", createRoot);

const target = document.getElementById('app-root');
const root = createRoot( target );

root.render(<h3>React SUCKS</h3>);