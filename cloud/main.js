
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define('send', function(req, res) {
 
  var jsonBody = {
    app_id: "f9b9293b-9e2e-451e-bc78-d6ced90b5742",
    include_player_ids: [req.params.code],
    contents: {en: `Nuova attivazione: ${req.params.mission} per ${req.params.cs}`},
    ios_sound: "allarme_areu.mp3"
  };

  
  Parse.Cloud.httpRequest({ 
  url: "https://onesignal.com/api/v1/notifications", 
  method: "POST", 
  headers: { 
    "Content-Type": "application/json;charset=utf-8"//, 
    //"Authorization": "Basic ZjYxMzdjMTQtNTkzNS00MjEwLTg3NTgtZWRlYTllMDNkM2Ri" 
  }, 
  body: JSON.stringify(jsonBody), 
  success: function(httpResponse) { 
    response.success("sent"); 
  }, 
  error: function(httpResponse) { 
    response.error('Failed with: ' + httpResponse.status); 
  } 
});
 
});
