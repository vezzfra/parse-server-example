
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define('sendNotification', function(req, res) {
  var jsonBody = {
    app_id: "f9b9293b-9e2e-451e-bc78-d6ced90b5742",
    include_player_ids: [req.params.code],
    contents: {en: "Nuova attivazione"},
    data: {foo: "bar"}
  };

  Parse.Cloud.httpRequest({
    method: "POST",
    url: "https://onesignal.com/api/v1/notifications",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(jsonBody)
  }).then(function (httpResponse) {
     console.log(httpResponse);
  }, function (httpResponse) {
     console.log(httpResponse);
  });
});
