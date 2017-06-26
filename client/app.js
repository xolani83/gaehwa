// Code goes here
const conjugation = require('./services/conjugation');
const data = require('./services/data-access');
const flash = require('./services/flashcard.service');
const speech = require('./services/speech');
const vocab = require('./services/vocab.service');

angular
  .module("app",[])
  .controller("ctrl",ctrl);

function ctrl () {
  let vm = this;
  vm.display ="cards"
  vm.card = {}
  vm.nextCard = nextCard;
  vm.changeView = changeView;
  vm.showAnswer = showAnswer;
  vm.settings = {};
  vm.settings.dictionary = true;
  vm.toggleVocab = vocab.toggle;
  vm.favs = [];
  load();

  function load(){
    data.verbs()
      .then(data => {
        vm.verbs = data;
      })
      .then(function(){nextCard();});
  }

  function getFavs(){
    vm.favs = vm.verbs.filter(function(element){ return element.fav})
  }

  function nextCard(){
    getFavs();
    vm.revealAnswer = false;
    let sent = flash.nextCard(vm.favs, vm.settings);
    vm.card.front = sent.eng;
    vm.card.back = sent.kor;
  }

  function showAnswer(){
    vm.revealAnswer = true;
    speech.speak(vm.card.back);
  }

  function allViewsFalse(){
    vm.showCards = false;
    vm.showMenu = false;
    vm.showVocab = false;
    vm.showSettings = false;
  }

  function changeView(view) {
    allViewsFalse();
    switch(view){
      case 'cards':
        vm.showCards = true;
        break;
      case 'menu':
        vm.showMenu = true;
        break;
      case 'vocab':
        vm.showVocab = true;
        break;
      case 'settings':
        vm.showSettings = true;
        break;

    }
  }
}
