/*********************************************************************
 * @author Casper Faelens
 * @created 15/02/2018
 * @modified 15/02/2018
 * @copyright Copyright © 2016-2017 Artevelde University College Ghent
 * @function mqflskdhfmkqs
 *********************************************************************/
alert('just kidding there was no trojan horse');
let number = prompt (' geef een getal in ');
let text = 'het getal dat je invoerde was ' + number;
document.write (text);

let amountdigits = number.length;
let text2 = `het getal is ${amountdigits} karakters lang`; //zorg hier dat je de juiste let gebruikt
document.write('<br>'); //br bestaat niet in js dus je moet het schrijven in html vandaar de '<>'
document.write (text2);

let number1 = parseFloat(prompt ('geef een eerste getal in')); //parseInt zorgt ervoor dat de getallen effectief worden opgeteld en niet dat ze aan elkaar plakken Int staat voor intieger of geheel getal
let number2 = parseFloat(prompt ('geef een tweede getal in')); // parseFloat zorgt ervoor dat je kan rekenen met kommagetallen maar de komma moet wel als een punt geschreven worden anders wordt alles wat na de komma komt genegeerd
let som = number1 +number2;
document.write('<br>');
document.write ( `de som van de twee getallen is ${som}`); //nu gaan de getallen gewoon aan elkaar vastplakken en niet echt opgeteld worden dus moeten we het ozetten naar een inteiger of geheel getal

let i=7;
console.log(i); // 7 --> want ongewijzigd
console.log(i++); // want eerst gelogd, dan pas 1 aan toegevoegd
console.log(i); //8, is toegevoegd in voorgaande statement
console.log(++i); //9, ééntje toevoegen, dan loggen

let students = ['Yentl', 'Steff', 'Casper', 'Ona', 'Bloempje']; //dit is een array, een variable met meerdere waarden.
let name = students [0];
students.push('Simon');
students[2] = 'Gilles'; //veranderd 'Casper' naar 'Gilles4
students[2] = students [3]; //nu staat 'Ona' op zowel index 2 als index 3
console.log(students[2]);

document.write('<br>');
document.write(students.length);
document.write('<br>');
document.write(students[0] + " " + students[2] + " " + students[4]);

let seconds = prompt ('voer een aantal seconden in');
let hours = Math.floor(seconds/3600);
let min = Math.floor((seconds%3600)/60);
let sec = Math.floor((seconds%3600)%60);
let text4 = hours + "u " + min + "m " + sec + "s ";
document.write('<br>');
document.write(text4);