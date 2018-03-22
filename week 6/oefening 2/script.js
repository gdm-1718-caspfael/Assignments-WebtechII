const getJSON = function(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      let status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

getJSON('https://evelienrutsaert.github.io/recourses/recipes.json'), function(error,data){

for (let i = 0; i < data.length; i++) {
    console.log(data);
    
}};