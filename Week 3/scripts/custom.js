
let boardSize= 8;
let board= '';
/** loop */
for(let y= 0; y< boardSize; y++){
    //x-as
    for(let x= 0; x< boardSize; x ++){
        //board += '#'
        if (((x+y) % 2)==0) {
            board+='#';
        } else {
            board+=' ';
        }
    }
    board += "\n"
}
console.log(board);

const password = 'Batman';
let guess=prompt ('What is the pasword?');
let amountTries=1;

if (password== guess) {
    document.write( 'goed zo rakker!')
} else {
    document.write ('wrong! try again!');
    amountTries ++ ;
}

document.write("<br/>"+"you tried "+ amountTries+" times" )
