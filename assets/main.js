var key = 'J2guxkMvAQKdzU41tKhoRYWYcwnYin2dCa4A5AILDTjbLQFD4J';
var url = 'http://api.tumblr.com/v2/tagged?tag=gif&callback=?&api_key=' + key;
var body = $('body');
var imgs = [];

$.getJSON(url, function(data) {
  for (var i = 0; i < 20; i++) {
    var url = data.response[i].photos[0].original_size.url;
    var img = document.createElement('img');
    img.src = url;
    img.width = 100;
    body.append(img);
    imgs = imgs.concat(img);
  }  
});
