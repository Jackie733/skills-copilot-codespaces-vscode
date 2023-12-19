// Create web server
var express = require('express');
var app = express();
// Create a router object
var router = express.Router();
// Create a route to handle incoming requests
router.get('/', function(request, response) {
    response.send('GET route on things.');
});
// Create a route to handle POST requests
router.post('/', function(request, response) {
    response.send('POST route on things.');
});
// Export this router to use in our index.js
module.exports = router;
