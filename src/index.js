/**
 * Small ES6 Web Application to present the user with two buttons as well as
 * counters for each of the buttons. On tap, the button emits a POST via
 * an external Code.gs module to handle the POST and its data.
 * 
 * @author Sebastian T
 */

import { personA, personB, personACount, personBCount, sheetURL, postURL } from './components/constants';
import { showLoader } from './components/showLoader';
import { showError } from './components/showError';
import { showSuccess } from './components/showSuccess';

personA.addEventListener('submit', e => {
  e.preventDefault();
  showLoader(personA);
  fetch(postURL, { method: 'POST', body: new FormData(personA) })
    .then(response => showSuccess(response, personA))
    .catch(error => showError(error));
});

personB.addEventListener('submit', e => {
  e.preventDefault();
  showLoader(personB);
  fetch(postURL, { method: 'POST', body: new FormData(personB) })
    .then(response => showSuccess(response, personB))
    .catch(error => showError(error));
});

(function initLoad() {
  fetch(sheetURL)
    .then(response => {
      return response.json();
    })
    .then(data => {
      personACount.innerHTML = data.feed.entry[0].gsx$personA.$t;
      personBCount.innerHTML = data.feed.entry[0].gsx$personB.$t;
    });
})();
