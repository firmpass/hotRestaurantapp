
var tableArray = require('../tables.js');
//HTML ROUTES


module.exports = function (app) {
    
// Basic route that sends the user first to the AJAX Page
app.get("/api/tables", function(req, res) {
   res.json(tableArray);
   console.log(tableArray);
   console.log("Table hit");
});



}