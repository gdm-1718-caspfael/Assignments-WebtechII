let myName = 'Casper Raoul Faelens';
let myJob = 'Sailor';
let myAge = 21;

console.log(
    `My name is ${myName} and I am a ${myJob}.
I am ${myAge} years old.`
)

/********************** */

let btn = document.getElementById('button');
btn.addEventListener('click', function() 
{
let color = document.querySelector('input[name="color"]:checked');

btn.className = `btn ${(color) ? color.value : 'btn-warning'}`;
});
/*
hier boven is de short version van dit hieronder
if(color){
    btn.className = 'btn ' + color.value;
}
else {
    btn.className = 'btn ' + 'btn-warning'
}})*/

/**************************** */


