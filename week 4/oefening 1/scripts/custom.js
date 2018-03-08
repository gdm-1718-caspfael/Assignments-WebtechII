
let strong=document.getElementsByTagName("strong");

let anchorTags, stronTags, spanTags;

anchorTags=document.getElementsByTagName('a');
strongTags=document.getElementsByTagName('strong');
spanTags=document.getElementsByTagName('span');
//eerste anchor tag uit de array van anchorTags halen
let linkElement=anchorTags[0]

//event toepassen
linkElement.addEventListener('mouseover', function(){
   let firstStrongTag = strongTags[0];
   firstStrongTag.style.color = 'orange';

   strongTags[1].style.color ='orange';

   for (let i=0; i<spanTags.length; i++){
       spanTags[i].style.color = 'purple';
   }
})
linkElement.addEventListener('mouseout', function(){
    let firstStrongTag = strongTags[0];
    firstStrongTag.style.color = '';
   
    strongTags[1].style.color ='';

    for (let i=0; i<spanTags.length; i++){
        spanTags[i].style.color = '';
    }
 })