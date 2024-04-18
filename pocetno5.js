var myString = '   Lorem ipsum dolor sit amet  ipsum ';

console.log(myString)
var duljina = myString.length;
console.log('Duljina teksta je: ' + duljina + ' zankova');
console.log(typeof duljina);
console.log('Znak na mjestu 12 je: ' + myString.charAt(12));
console.log(myString.trim());
console.log(myString.trimEnd());
console.log(myString.indexOf('ipsum'));
console.log(myString.replace('ipsum', 'moj novi string'));
console.log(myString.replaceAll('ipsum', 'moj novi string'));
console.log(myString.toUpperCase());
console.log(myString.substring(12,10));
console.log(myString.substring(12,myString.length));
var myNiz=myString.split('');
console.log('kraj');
