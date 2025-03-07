// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reverse = ""
    for(i=str.length-1;i>=0;i--){
        reverse += str[i]
    }
    return reverse
}

module.exports = reverse;
