/*********************************************************************
 * @author Casper Faelens
 * @created 25/02/2018
 * @modified 26/02/2018
 * @copyright Copyright © 2016-2017 Artevelde University College Ghent
 * @function mqflskdhfmkqs
 *********************************************************************/

let number=prompt ('voer een getal in')
//document.getElementById('number').innerHTML= number;
    if (number%2==0) {
        document.write('uw getal in even')
    } else {
        document.write('uw getal is oneven')
    };

    console.log('hello world');

    let values=['Casper','Lien','Ella'];
    console.log(values);

    document.write('<br>');
    //let percent = document.getElementById('percent').innerHTML;
    let percent = prompt ('voer een percentage in')
    function diplomaTitle(percent){
        if (percent<68 && percent>50) {
            return 'De student is op voldoende wijze geslaagd.';
        }
        else if (percent>=68 && percent<77) {
            return 'De student is met onderscheiding geslaagd.';
        }
        else if (percent>=77 && percent<85) {
            return 'De student is met groote onderscheiding geslaagd.';
        } 
        else if (percent>=85 && percent<90){
            return 'De student is met grootste onderscheiding geslaagd.';
        }
        else if (percent>90){
            return 'De student is met grootste onderscheiding en de gelukswensen van de examencomissie geslaagd.';
        }
        else {
            return 'De student is niet geslaagd.';
        }
    }
    document.write('<br>');
   