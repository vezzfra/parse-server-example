
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.deifne('send', function(request, response) {

var promise = new Parse.Promise();

var jsonBody = { 
  app_id: "f9b9293b-9e2e-451e-bc78-d6ced90b5742", 
  include_player_ids: [request.params.code],
  contents: {en: "Nuova attivazione"}
};

Parse.Cloud.httpRequest({
    method: "POST",
    url: "https://onesignal.com/api/v1/notifications",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "Authorization": "Basic ZjYxMzdjMTQtNTkzNS00MjEwLTg3NTgtZWRlYTllMDNkM2Ri"
    },
    body: JSON.stringify(jsonBody)
  }).then(function (httpResponse) {
    promise.resolve(httpResponse)
  },
  function (httpResponse) {
    promise.reject(httpResponse);
});

return promise;
};
