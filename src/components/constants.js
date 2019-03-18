/**
 * spreasheet set
 * @constant {sheetID} google sheet id (obtained from url)
 * @constant {workID} google worksheet id (obtained from share settings)
 * @constant {sheetURL} json feed url construct
 * @constant {postURL} external google script for POST
 */
export const sheetID = ''; // required
export const workID = ''; // required
export const sheetURL = `https://spreadsheets.google.com/feeds/list/${sheetID}/${workID}/public/values?alt=json`;
export const postURL = ''; // required | example => ./code.gs


/**
 * DOM set
 * @constant {personA} form element for person a
 * @constant {personB} form element for person a
 * @constant {personACount} counter for person a
 * @constant {personBCount} counter for person b
 * @constant {loadig} spinning loading svg element container
 * @constant {successMessage} success message container
 * @constant {errorMessage} error message container
 */
export const personA = document.forms['submit-A'];
export const personB = document.forms['submit-B'];
export const personACount = document.getElementById('count-A');
export const personBCount = document.getElementById('count-B');
export const loading = document.querySelector('.js-loading');
export const successMessage = document.querySelector('.js-success-message');
export const errorMessage = document.querySelector('.js-error-message');
