var falcor = require('falcor');
var falcorExpress = require('falcor-express');
var Router = require('falcor-router');

var express = require('express');
var _ = require('lodash');
var app = express();

app.use(express.static('.'));

// Have Express request index.html
var $ref = falcor.Model.ref;

var eventsData = {
    locationsById: {
      1: {
        city: "Salt Lake City",
        state: "Utah"
      },
      2: {
        city: "Las Vegas",
        state: "Nevada"
      },
      3: {
        city: "Minneapolis",
        state: "Minnesota"
      },
      4: {
        city: "Walker Creek Ranch",
        state: "California"
      }
    },
    events: [
      {
        name: "ng-conf",
        description: "The worlds best Angular Conference",
        location: $ref('locationsById[1]')
      },
      {
        name: "React Rally",
        description: "Conference focusing on Facebook's React",
        location: $ref('locationsById[1]')
      },
      {
        name: "ng-Vegas",
        description: "Two days jam-packed with Angular goodness with a focus on Angular 2",
        location: $ref('locationsById[2]')
      },
      {
        name: "Midwest JS",
        description: "Midwest JS is a premier technology conference focused on the JavaScript ecosystem.",
        location: $ref('locationsById[3]')
      },
      {
        name: "NodeConf",
        description: "NodeConf is the longest running community driven conference for the Node community.",
        location: $ref('locationsById[4]')
      }
    ]
  };

app.use('/model.json', falcorExpress.dataSourceRoute(function(req, res) {
return new Router([
    {
    // Our route needs to match a pattern of integers that
    // are used as eventIds
    route: "events[{integers:eventIds}]['name', 'description']",
    get: function(pathSet) {

        var results = [];

        // Above we specified an eventIds identifier that is an
        // array of ids which we can loop over
        pathSet.eventIds.forEach(function(eventId) {

        // Next, an array of key names that map is held at pathSet[2]
        pathSet[2].map(function(key) {

            // We find the event the cooresponds to the current eventId
            var eventRecord = eventsData.events[eventId];

            // Finally we push a path/value object onto
            // the results array
            results.push({
            path: ['events', eventId, key],
            value: eventRecord[key]
            });
        });          
        });

        return results;
    }      
    }
]);
}));

app.listen(3000);
console.log("Listening on http://localhost:3000");