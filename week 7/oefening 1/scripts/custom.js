// functie expressie om JSON-request via url uit te voeren
const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

// easy versie
//variabele met gegevens
////const lastName = 'Demuytere';

// url met dynamische parameters
//const url = 'http://api.icndb.com/jokes/random?firstName=' + firstname + '&lastName=' + lastName;

/* getJSON(url, function(error, data) {
    
        document.write(data.value.joke);
    })




//intermediate versie
let voornaam = prompt("Vul hier je voornaam in");
let achternaam = prompt("Vul hier je achternaam in");

const url2 = 'http://api.icndb.com/jokes/random?firstName=' + voornaam + '&lastName=' + achternaam;

//JSON FUNCTIE OPROEPEN, BINNEN DE CALLBACK MANIPULEREN WE DE VERKREGEN DATA
getJSON(url2, function(error, data) {

    document.write(data.value.joke);
})
*/


//skilled versie


//knop declareren
let button = document.getElementById("buttonMakeJoke");

//functie expressie om JSON-request via url uit te voeren
const factslist =  document.getElementById('facts');

button.addEventListener('click', function() {
    //waardes uit de elementen halen
    let firstName = document.getElementById("firstNameField").value;
    let lastName = document.getElementById("lastNameField").value;

    //url met dynamische parameters
    const url = 'http://api.icndb.com/jokes/random?firstName=' + firstName + '&lastName=' + lastName;

    getJSON(url, function(error, data){

        //schrijf de fact in het venster
        //document.write('<li>'+data.value.joke+'</li>');
        const listItem =  document.createElement('li');
        listItem.textContent = data.value.joke;
        factslist.appendChild(listItem);
    });

})









