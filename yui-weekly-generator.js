var data = require('/Users/derek/Downloads/yui-weekly');
var listID = null;
var listCards = 0;
var greenCards = 0;

data.lists.forEach(function (list) {
	if (list.name === 'March 29th, 2013') {
		listID = list.id;
	}
});

data.cards.forEach(function (card) {
	if (card.idList === listID) {
		listCards++;
		card.labels.forEach(function (label) {
			if (label.color === "green") {
				greenCards++;
				console.log('\n\n * ' + card.desc );
			}
		});
	}
});

console.log('\n---');
console.log('Total cards: ' + listCards);
console.log('Green cards: ' + greenCards);
console.log('---\n');