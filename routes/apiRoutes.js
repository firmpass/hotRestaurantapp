
var tableArray = require('../tables.js');
var waitlistArray = require('../waitlist.js');
//HTML ROUTES


module.exports = function (app) {
    
// Basic route that sends the user first to the AJAX Page
app.get("/api/tables", function(req, res) {
   res.json(tableArray);
   console.log(tableArray);
   console.log("Table hit");
});

// Basic route that sends the user first to the AJAX Page
app.get("/api/waitlist", function(req, res) {
    res.json(waitlistArray);
    console.log(waitlistArray);
    console.log("waitlist link hit");
 });

 app.post("/api/tables", function(req, res) {
  
    if (tableArray.length < 5) {
      tableArray.push(req.body);
      res.json(true);
    }
    else {
      waitlistArray.push(req.body);
      res.json(false);
    }
  });


}