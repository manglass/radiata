//BROWSERIFY//////////////////////
/////////////////////////////////
require('./styles/radiata.css');
var makeRadial = require('./scripts/radiata.js');
//////////////////////////////////
//////////////////////////////////

if(!window.radiata){
  window.radiata = {
    makeRadial: makeRadial
  };
}