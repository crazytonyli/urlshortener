var shortener = {
  "providers": [
    { "index": 0, "url":"http://goo.gl", "name":"google"}
  ],
  "shorten": function(index, url) {
    if (arguments.length == 2) {
      if ("string" == typeof index) {
        index = parseInt(index);
      }
      var func = shortener[ shortener.providers[ index ].name ];
      if (func) {
        return func(url);
      }
    }
  },
  "google": function(url) {
    return "http://www.google.com";
  }
};

