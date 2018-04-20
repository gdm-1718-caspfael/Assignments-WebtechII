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
let input = document.getElementById('isbnSearchInput');
let button = document.getElementById('btnSearchBook');
button.addEventListener('click',function(){
  getJSON('https://www.booknomads.com/api/v0/isbn/'+input.value, function(error, data){
    
  });
});

