/**
 * Reveals the applet after message display
 * 
 * @param {external:Node} sender The sending emitter
 * @returns nothing
 * @external Node modifies class lists
 */

import { successMessage, errorMessage } from './constants';

export function returnToForm(sender) {
  // arg sender can be used for improved UX
  setTimeout(() => {
    successMessage.classList.add('is-hidden');
    errorMessage.classList.add('is-hidden');
  }, 2000);
}
