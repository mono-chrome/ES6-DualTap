/**
 * Displays success message, updates the counter and clears the message.
 * 
 * @param {json} response JSON via fetch
 * @param {external:Node} sender Sending emitter
 * @returns JSON
 * @external Node modifies class lists
 * @fires returnToForm() with external Node
 * 
 * @requires {loading, sheetURL, successMessage} vis constants module
 * @requires returnToForm()
 * @requires updateCount()
 */

import { loading, sheetURL, successMessage } from './constants';
import { returnToForm } from './returnToForm';
import { updateCount } from './updateCount';

export function showSuccess(response, sender) {
  fetch(sheetURL)
    .then(response => {
      return response.json();
    })
    .then(data => updateCount(data, sender));
  setTimeout(() => {
    successMessage.classList.remove('is-hidden');
    loading.classList.add('is-hidden');
    returnToForm(sender);
  }, 300);
}
