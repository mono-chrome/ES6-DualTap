/**
 * Updates the column count for the respective button.
 * 
 * @param {JSON} data Insert via JSON fetch
 * @param {external:Node} sender Node return from clicked Person [A|B]
 * @returns nothing
 * @external Node modifies DOM
 */

export function updateCount(data, sender) {
  // IMPROVE {less DOM traversal}
  let senderName = sender.children.item(2).id;
  let dataFeed = data.feed.entry[0][`gsx$${senderName}`].$t;
  sender.children.item(2).innerHTML = dataFeed;
}