
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define('send', function(req, res) {
 
  var jsonBody = {
    app_id: "f9b9293b-9e2e-451e-bc78-d6ced90b5742",
    filters: [{"field": "tag", "key": "user", "relation": "=", "value": req.params.cs}],
    contents: {en: `Nuova attivazione: ${req.params.mission} per ${req.params.cs}`},
    ios_sound: "allarme_areu.mp3",
    android_sound: "allarme_areu"
  };

  
  Parse.Cloud.httpRequest({ 
  url: "https://onesignal.com/api/v1/notifications", 
  method: "POST", 
  headers: { 
    "Content-Type": "application/json;charset=utf-8",
    "Authorization": "Basic ZjYxMzdjMTQtNTkzNS00MjEwLTg3NTgtZWRlYTllMDNkM2Ri" 
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

Parse.Cloud.define('sendEmail' function(req,res) {
  var username = req.params.get('email');
  var password = req.params.get('pass');
  var nome = req.params.get('name');
  var cognome = req.params.get('surname');
  
  Parse.Cloud.httpRequest({
    url: "https://api.mailjet.com/v3/send",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "e7b7e9e69e309a866df37cb23324b9a0:63726ad3ea14d52a33e30ad1c124a421"
    },
    body: '{"FromEmail":"info@portaleagentibwt.it","FromName":"BWT Italia Srl","Subject":"La tua termocamera sta arrivando","Text-part":`Gentile Sig. ${nome} ${cognome},\ngrazie alla spesa effettuata il Suo agente ha registrato a suo nome una termocamera professionale per smartphone Flir One Pro!\n I premi verranno spediti al termine della promozione, se nel frattempo vuole conoscere il prodotto e verificare lo stato della richiesta può connettersi al portale https://tracking.portaleagentibwt.it e inserire le seguenti credenziali:\nUsername: ${username}\nPassword: ${password}.`, "Html-part":"","Recipients":["Email":`${username}`]}',
    success: function(httpResponse) {
      response.success("sent");
    }, 
    error: function(httpResponse) { 
      response.error('Failed with: ' + httpResponse.status); 
    }
  });
});
