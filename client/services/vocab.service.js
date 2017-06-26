(function (){
  'use strict'

  function vocabService () {
    let service = {
      toggle: toggleFav
    }
    return service;

    function toggleFav(word){
      word.fav = word.fav ? false: true;
    }
  }

  module.exports = vocabService();
})();
