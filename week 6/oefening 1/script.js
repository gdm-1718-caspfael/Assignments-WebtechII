// declaratie van de overview
const parkingOverview = document.getElementById('parking-overview');

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

// get json data
getJSON('https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json', function(error, data) {
    let div = document.getElementById('parking-overview');
    // show error
    if(error) {
        
        // do something here

        return false;
    }

    // loop through all parking places
    for(let i = 0; i < data.length; i++) {

        // current parking object
        let parking = data[i];
        let divEl =document.createElement('div');
        parkingOverview.appendChild(divEl);
        divEl.innerHTML = '<h2>' + parking.description + '</h2>'+ '<br>' +'<ul>'+ '<li>'+'Capaciteit: '+parking.parkingStatus.totalCapacity+'</li>'+'<li>'+ 'Beschikbaar: ' +parking.parkingStatus.availableCapacity+'</li>'+ '</ul>';
        //let divStyle = document.
        divEl.className = 'parking';
        parking.parkingStatus.totalCapacity.className = 'parking li';
        parking.parkingStatus.availableCapacity = 'parking li';
    
        
   // do magic here
    }
});




