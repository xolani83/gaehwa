(function() {
  'use strict'

  const conj = require('./conjugation');

  function flashcardService () {
    let vm = this;

    let service = {
      random: random,
      nextCard: nextCard,
    }

    return service;

    function random(array){
      let index = Math.floor(Math.random() * array.length);
      return array[index];
    }

    function chooseStructure(settings){
      let options = [];
      if(settings.dictionary) options.push(conj.dictionary);
      if(settings.present) options.push(conj.present);
      if(settings.past) options.push(conj.past);
      if(settings.goingTo) options.push(conj.goingTo);
      if(settings.can) options.push(conj.can);
      if(settings.cant) options.push(conj.cant);
      if(settings.must) options.push(conj.must);
      if(settings.shallWe) options.push(conj.shallWe);
      if(settings.future_base) options.push(conj.futureBase);
      if(settings.stem) options.push(conj.stem);
      return options;
    }

    function nextCard(data, settings) {
      let method =random(chooseStructure(settings));
      return method(random(data));
    }

  }

  module.exports = flashcardService();
})();
