function setbackgroundcoloraccordingtotime(hours) {

  var backgroundgradient = "#3005B3";

  //18-19 night
  if (hours > 17 && hours < 20) {
    backgroundgradient = "background: #B48394!important; /* IE10+ */ background-image: -ms-linear-gradient(top, #78A7D6 0%, #B48394 100%)!important; /* Mozilla Firefox */ background-image: -moz-linear-gradient(top, #78A7D6 0%, #B48394 100%)!important; /* Opera */ background-image: -o-linear-gradient(top, #78A7D6 0%, #B48394 100%)!important; /* Webkit (Safari/Chrome 10) */ background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #78A7D6), color-stop(100, #B48394))!important; /* Webkit (Chrome 11+) */ background-image: -webkit-linear-gradient(top, #78A7D6 0%, #B48394 100%)!important; /* W3C Markup */ background-image: linear-gradient(to bottom, #78A7D6 0%, #B48394 100%)!important; background-repeat: no-repeat!important;";
  }
  //20-21 night
  else if (hours > 19 && hours < 22) {
    backgroundgradient = "background: #fd8841!important; /* IE10+ */ background-image: -ms-linear-gradient(top, #4D55A3 0%, #fd8841 100%)!important; /* Mozilla Firefox */ background-image: -moz-linear-gradient(top, #4D55A3 0%, #fd8841 100%)!important; /* Opera */ background-image: -o-linear-gradient(top, #4D55A3 0%, #fd8841 100%)!important; /* Webkit (Safari/Chrome 10) */ background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #4D55A3), color-stop(100, #fd8841))!important; /* Webkit (Chrome 11+) */ background-image: -webkit-linear-gradient(top, #4D55A3 0%, #fd8841 100%)!important; /* W3C Markup */ background-image: linear-gradient(to bottom, #4D55A3 0%, #fd8841 100%)!important; background-repeat: no-repeat!important;";
  }
  //22-4 night
  else if (hours > 21 || hours < 5) {
    backgroundgradient = "background: #182379!important; /* IE10+ */ background-image: -ms-linear-gradient(top, #0B121E 0%, #182379 100%)!important; /* Mozilla Firefox */ background-image: -moz-linear-gradient(top, #0B121E 0%, #182379 100%)!important; /* Opera */ background-image: -o-linear-gradient(top, #0B121E 0%, #182379 100%)!important; /* Webkit (Safari/Chrome 10) */ background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #0B121E), color-stop(100, #182379))!important; /* Webkit (Chrome 11+) */ background-image: -webkit-linear-gradient(top, #0B121E 0%, #182379 100%)!important; /* W3C Markup */ background-image: linear-gradient(to bottom, #0B121E 0%, #182379 100%)!important; background-repeat: no-repeat!important;";
  }
  //11-16 day
  else if (hours > 10 && hours < 17) {
    backgroundgradient = "background: #F5CE7E!important; /* IE10+ */ background-image: -ms-linear-gradient(top, #0E5BEE 0%, #F5CE7E 99%)!important; /* Mozilla Firefox */ background-image: -moz-linear-gradient(top, #0E5BEE 0%, #F5CE7E 99%)!important; /* Opera */ background-image: -o-linear-gradient(top, #0E5BEE 0%, #F5CE7E 99%)!important; /* Webkit (Safari/Chrome 10) */ background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #0E5BEE), color-stop(99, #F5CE7E))!important; /* Webkit (Chrome 11+) */ background-image: -webkit-linear-gradient(top, #0E5BEE 0%, #F5CE7E 99%)!important; /* W3C Markup */ background-image: linear-gradient(to bottom, #0E5BEE 0%, #F5CE7E 99%)!important; background-repeat: no-repeat!important;";
  }
  //17
  else if (hours > 16 && hours < 18) {
    backgroundgradient = "background: #eeaf61!important; /* IE10+ */ background-image: -ms-linear-gradient(top, #0d55d7 0%, #eeaf61 99%)!important; /* Mozilla Firefox */ background-image: -moz-linear-gradient(top, #0d55d7 0%, #eeaf61 99%)!important; /* Opera */ background-image: -o-linear-gradient(top, #0d55d7 0%, #eeaf61 99%)!important; /* Webkit (Safari/Chrome 10) */ background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #0d55d7), color-stop(99, #eeaf61))!important; /* Webkit (Chrome 11+) */ background-image: -webkit-linear-gradient(top, #0d55d7 0%, #eeaf61 99%)!important; /* W3C Markup */ background-image: linear-gradient(to bottom, #0d55d7 0%, #eeaf61 99%)!important; background-repeat: no-repeat!important;";
  }
  //8-10
  else if (hours > 7 && hours < 11) {
    backgroundgradient = "background: #f5da7b!important; /* IE10+ */ background-image: -ms-linear-gradient(top, #3527e9 0%, #f5da7b 99%)!important; /* Mozilla Firefox */ background-image: -moz-linear-gradient(top, #3527e9 0%, #f5da7b 99%)!important; /* Opera */ background-image: -o-linear-gradient(top, #3527e9 0%, #f5da7b 99%)!important; /* Webkit (Safari/Chrome 10) */ background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #3527e9), color-stop(99, #f5da7b))!important; /* Webkit (Chrome 11+) */ background-image: -webkit-linear-gradient(top, #3527e9 0%, #f5da7b 99%)!important; /* W3C Markup */ background-image: linear-gradient(to bottom, #3527e9 0%, #f5da7b 99%)!important; background-repeat: no-repeat!important;";
  }
  //6-7 day
  else if (hours > 5 && hours < 8) {
    backgroundgradient = "background: #F3A350!important; /* IE10+ */ background-image: -ms-linear-gradient(top, #10459f 0%, #F3A350 99%)!important; /* Mozilla Firefox */ background-image: -moz-linear-gradient(top, #10459f 0%, #F3A350 99%)!important; /* Opera */ background-image: -o-linear-gradient(top, #10459f 0%, #F3A350 99%)!important; /* Webkit (Safari/Chrome 10) */ background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #10459f), color-stop(99, #F3A350))!important; /* Webkit (Chrome 11+) */ background-image: -webkit-linear-gradient(top, #10459f 0%, #F3A350 99%)!important; /* W3C Markup */ background-image: linear-gradient(to bottom, #10459f 0%, #F3A350 99%)!important; background-repeat: no-repeat!important;";
  }
  //5am day
  else if (hours > 4 && hours < 6) {
    backgroundgradient = "background: #448388!important; /* IE10+ */ background-image: -ms-linear-gradient(top, #0B2145 0%, #448388 100%)!important; /* Mozilla Firefox */ background-image: -moz-linear-gradient(top, #0B2145 0%, #448388 100%)!important; /* Opera */ background-image: -o-linear-gradient(top, #0B2145 0%, #448388 100%)!important; /* Webkit (Safari/Chrome 10) */ background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #0B2145), color-stop(100, #448388))!important; /* Webkit (Chrome 11+) */ background-image: -webkit-linear-gradient(top, #0B2145 0%, #448388 100%)!important; /* W3C Markup */ background-image: linear-gradient(to bottom, #0B2145 0%, #448388 100%)!important; background-repeat: no-repeat!important;";
  }

  var css = 'body { ' + backgroundgradient + ' }',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  head.appendChild(style);
}
