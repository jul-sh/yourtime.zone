// by https://coderwall.com/p/quv2zq/deparam-function-in-javascript-opposite-of-param

function deparam(querystring) {
  // remove any preceding url and split
  querystring = querystring.substring(querystring.indexOf("?") + 1).split("&");
  var params = {},
    pair,
    d = decodeURIComponent,
    i;
  // march and parse
  for (i = querystring.length; i > 0; ) {
    pair = querystring[--i].split("=");
    params[d(pair[0])] = d(pair[1]);
  }

  return params;
} //--  fn  deparam

export default deparam;
