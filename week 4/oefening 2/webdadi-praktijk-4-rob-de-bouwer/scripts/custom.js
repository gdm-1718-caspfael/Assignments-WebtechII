/*//div element aanmaken
let brick = document.createElement('div');
//klasse toevoegen
brick.className = 'brick brick-yellow';
//de muur declareren
let wall = document.getElementById ('wall-1');
//div (steen) toevoegen aan div met id wall [-] (muur)
wall.appendChild(brick); */


function createBrick(color) {
//div element aanmaken
let brick = document.createElement('div');
//klasse toevoegen
brick.className = 'brick brick-' + color;
return brick;
}

function addBrickToWall(color, wallNumber) {
    //<div id="wall-1" class"wall">
    let wallId= 'wall-' + wallNumber;
    //element ophalen (juiste muur ophalen)
    let wall = document.getElementById(wallId);
    //steentje maken voor de muur
    let newBrick = createBrick(color);
    //steentje toevoegen aan de muur
    wall.appendChild(newBrick);
}

function RemoveBrickFromWall(color, wallNumber) {
let wall = document.getElementById('wall-'+wallNumber);

let bricks= document.getElementsByClassName('brick-'+color);
if(bricks.length > 0){
    wall.removeChild(bricks[0]); 
    if (bricks.length==0) {
        alert('De muur is volledig gesloopt');
    }  
}    
}
let amountYellow = document.getElementsByClassName('brick-yellow');
let amountBlack = document.getElementsByClassName('brick-black');
let amountOrange = document.getElementsByClassName('brick-orange');
let amountBlue = document.getElementsByClassName('brick-blue');
let amountBricks = [amountYellow.length,amountBlack.length,amountOrange.length,amountBlue.length];

function helpRobCalculate (){
    //aantal stenen bepalen
    if (amountYellow.length==1) {
        document.getElementById('wall-1-amountstones').innerHTML='1 steen'
    } else {
        document.getElementById('wall-1-amountstones').innerHTML=amountYellow.length + ' stenen'
    }

    if (amountBlack.length==1) {
        document.getElementById('wall-2-amountstones').innerHTML='1 steen'
    } else {
        document.getElementById('wall-2-amountstones').innerHTML=amountBlack.length + ' stenen'
    }

    if (amountBlack.length==1) {
        document.getElementById('wall-3-amountstones').innerHTML='1 steen'
    } else {
        document.getElementById('wall-3-amountstones').innerHTML=amountOrange.length + ' stenen'
    }
    
    if (amountBlack.length==1) {
        document.getElementById('wall-4-amountstones').innerHTML='1 steen'
    } else {
        document.getElementById('wall-4-amountstones').innerHTML=amountBlue.length + ' stenen'
    }
//kostprijs bepalen
    let costYellow=(amountYellow.length*2)
    let costBlack=(amountBlack.length*7.5)
    let costOrange=(amountOrange.length*9)
    let costBlue=(amountBlue.length*0.30)
    document.getElementById('cost-yellow').innerHTML='€ '+ (amountYellow.length*2);
    document.getElementById('cost-black').innerHTML='€ '+ (amountBlack.length*7.5);
    document.getElementById('cost-orange').innerHTML='€ '+ (amountOrange.length*9);
    document.getElementById('cost-blue').innerHTML='€ '+ (amountBlue.length*0.30);
    document.getElementById('cost-total').innerHTML='€ '+(costYellow + costBlack +costOrange +costBlue);

    let biggest = 0;
    let biggestWall;
    if(amountYellow.length > biggest) {
        biggest = amountYellow.length;
        biggestWall = 'geel';
    }
    
    if(amountBlack.length > biggest) {
        biggest = amountBlack.length;
        biggestWall = 'zwart';
    }

    if(amountOrange.length > biggest) {
        biggest = amountOrange.length;
        biggestWall = 'oranje';
    }

    if(amountBlue.length > biggest) {
        biggest = amountBlue.length;
        biggestWall = 'blauw';
    }

    document.getElementById('wall-biggest') .innerHTML='De ' + biggestWall + ' muur is het grootst.' 
/*
//de grootste bepalen
    if (Math.max(amountBricks=amountYellow.length)) {
     document.getElementById('wall-biggest') .innerHTML='De gele muur is het grootst.'  
     if (Math.max(amountBricks=amountBlack.length)) {
        document.getElementById('wall-biggest') .innerHTML='De zwarte muur is het grootst.'  
        if (Math.max(amountBricks=amountOrange.length)) {
            document.getElementById('wall-biggest') .innerHTML='De oranje muur is het grootst.' 
            if(Math.max(amountBricks=amountBlue.length)) {
                document.getElementById('wall-biggest') .innerHTML='De blauwe muur is het grootst.'  
               } 
           }
       }
    }
    */
    
    
}





    
