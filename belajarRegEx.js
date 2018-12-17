var paragraph = 'far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts!. Separated they! live in far away from Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small . When she reached the first hills! of the Italic Mountains,she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road!, the Line Lane. Pityful a rethoric question ran over her cheek!'

console.log(paragraph.match(/far/g))       

var message = 'Regex itu mudah!'
console.log(/[A-Z]/.test(message))

var messageAllLowerCase = 'regex itu susah!'
console.log(/[A-Z]/.test(messageAllLowerCase))

// Menggunaka RegExp Object
var regexPattern = new RegExp('[A-Z]')

var message = 'Regex itu mudah!'
console.log(regexPattern.test(message))

var messageAllLowerCase = 'regex itu susah!'
console.log(regexPattern.test(messageAllLowerCase))

// Split
var str = 'belajar regex itu menyenangkan'
console.log(str.split(/\s/))

// Replace
var stringAwal = 'Regex itu sangat susah!'
stringHasil = stringAwal.replace(/susah/, 'mudah')
console.log(stringHasil)

stringHasil = stringAwal.replace(/itu/, 'ini')
console.log(stringHasil)

// Match
var message = 'regex seru DEH!'
console.log(message.match(/e/))

console.log(message.match(/e/g))

console.log(message.match(/e/gi))

var string = 'Walaupun regex banyak mengandung simbol, tapi tidak serumit seperti !@#%^%#$*( , ^%&*!!^& dan !#*#$&*@%#';
console.log(string.match(/[a-z]+/gi))

// var newArray = 0
// if (newArray) {
// 	console.log('newArray bukan null!');
// } else {
// 	console.log('Tidak ada newArray, ini null!');
// }