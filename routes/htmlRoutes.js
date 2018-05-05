
var path = require('path');
//HTML ROUTES


module.exports = function (app) {
    
// Basic route that sends the user first to the AJAX Page
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});
//home page route
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));    
});
}
