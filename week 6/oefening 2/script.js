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


getJSON('https://evelienrutsaert.github.io/recourses/recipes.json', function(error,data){
    if (error) {
        return error;
    }
    for (let i = 0; i < data.length; i++) {
        console.log(data);
        
    }
});