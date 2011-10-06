var shortener = {
  "providers": [
    { "index": 0, "url":"http://goo.gl", "name":"google"}
  ],
  "shorten": function(index, url, callback) {
    if (arguments.length == 3) {
      if ("string" == typeof index) {
        index = parseInt(index);
      }
      var func = shortener[ shortener.providers[ index ].name ];
      if (func) {
        func(url, callback);
      }
    }
  },
  "google": function(url, callback) {
    $.ajax({
        "url": "https://www.googleapis.com/urlshortener/v1/url",
        "contentType": "application/json",
        "type": "POST",
        "data": "{\"longUrl\": \"" + url + "\"}",
        "dataType": "json",
        "success": function(data) {
          callback(data[ "id" ], data[ "longUrl" ]);
        }
        });
  }
};

