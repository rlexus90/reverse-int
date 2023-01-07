module.exports = function reverse(n) {
	n = n.toString();
	n = n.split('');
	n = n.reverse();
	n = n.join('')
	return Number.parseInt(n)
}