/**
 * Displays error message
 * 
 * @param {string} error Optional return string of the error
 * @returns nothing
 * @external Node modifies class lists
 * 
 * @requires {loading, errorMessage} via constants module
 */

import { loading, errorMessage } from './constants';

export function showError(error) {
  setTimeout(() => {
    errorMessage.classList.remove('is-hidden');
    loading.classList.add('is-hidden');
  }, 400);
}
