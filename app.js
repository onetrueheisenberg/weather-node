var request = require("request");

request({
    url : "https://maps.googleapis.com/maps/api/geocode/json?address=%221111%20langdon%20street%22&key=AIzaSyDZayLPv9WVv-Uv1rA0XHjzu1ZUgLZ9uvg",
    json : true
}, function(error, response, body) {
    console.log(body);
});