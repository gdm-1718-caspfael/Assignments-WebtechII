
let strong=document.getElementsByTagName("strong");
/*strong.addEventListener(mousehover, function(e){
    event.target.style.color = "pink";
})*/
let anchorTags, stronTags, spanTags;

anchorTags=document.getElementsByTagName('a');
strongTags=document.getElementsByTagName('strong');
spanTags=document.getElementsByTagName('span');
//eerste anchor tag uit de array van anchorTags halen
let linkElement=anchorTags[0]

//event toepassen
linkElement.addEventListener('mouseover', function(){
    console.log('test');
})