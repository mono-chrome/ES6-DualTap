/**
 * Displays loading spinner
 * 
 * @param {external:Node} sender Sending emitter
 * @returns nothing
 * @external Node modifies class list
 * 
 * @requires {loading} via constants module
 */

import { loading } from './constants';

export function showLoader(sender) {
  // arg sender can be used for improved UX
  loading.classList.remove('is-hidden');
}
