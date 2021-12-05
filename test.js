import 'falcor';

var model = new falcor.Model({source: new falcor.HttpDataSource('/model.json')});

var start = Date.now();
var end;



for(let i = 0; i < 1000;i++){
  model
  .get(["events", [0], ["name", "description"]])
  .then(function(response) {
    document.getElementById('event-data').innerHTML = JSON.stringify(response, null, 2);
  });
  model
  .get(["events", [1], ["name", "description"]])
  .then(function(response) {
    document.getElementById('event-data').innerHTML = JSON.stringify(response, null, 2);
  });
  model
  .get(["events", [2], ["name", "description"]])
  .then(function(response) {
    document.getElementById('event-data').innerHTML = JSON.stringify(response, null, 2);
  });
  model
  .get(["events", [3], ["name", "description"]])
  .then(function(response) {
    document.getElementById('event-data').innerHTML = JSON.stringify(response, null, 2);
    end = Date.now();
    document.getElementById('counter').innerHTML = end -start;
  });
}

/*
for(let i = 0; i < 1000;i++){
fetch('http://localhost:3000/1', {
  method: 'GET',
  headers: {'Content-Type': 'application/json'}
}).then(response => {
  document.getElementById('event-data').innerHTML = JSON.stringify(response);
}).catch(err => {console.log(err);});

fetch('http://localhost:3000/2', {
  method: 'GET',
  headers: {'Content-Type': 'application/json'}
}).then(response => {
  document.getElementById('event-data').innerHTML = JSON.stringify(response);
}).catch(err => {console.log(err);});

fetch('http://localhost:3000/3', {
  method: 'GET',
  headers: {'Content-Type': 'application/json'}
}).then(response => {
  document.getElementById('event-data').innerHTML = JSON.stringify(response);
}).catch(err => {console.log(err);});

fetch('http://localhost:3000/4', {
  method: 'GET',
  headers: {'Content-Type': 'application/json'}
}).then(response => {
  document.getElementById('event-data').innerHTML = response;
  end = Date.now();
  document.getElementById('counter').innerHTML = end -start;
}).catch(err => {console.log(err);});
}
*/