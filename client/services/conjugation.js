(function (){
  'use strict'

  function change () {

    function dictionary(verb){
      return {
        eng: verb.meaning,
        kor: verb.dictionary
      }
    }

    function present(verb){
      return {
        eng: verb.meaning.substr(2),
        kor: verb.present.trim()+"요"
      }
    }

    function past(verb){
      return {
        eng: "did " + verb.meaning.substr(2),
        kor: verb.past.trim()+"요"
      }
    }

    function goingTo(verb){
      return {
        eng: "going " + verb.meaning,
        kor: verb.future_base + " 거예요"
      }
    }

    function wantTo(verb){
      return {
        eng: "want " + verb.meaning,
        kor: verb.stem + "고 싶어요"
      }
    }

    function can(verb){
      return {
        eng: "can"+ verb.meaning.substr(2),
        kor: verb.future_base + " 수 있어요"
      }
    }

    function cant(verb){
      return {
        eng: "can't"+ verb.meaning.substr(2),
        kor: verb.future_base + " 수 없어요"
      }
    }

    function must(verb){
      return {
        eng: "must "+ verb.meaning.substr(2),
        kor: verb.present_base + "야 해요"
      }
    }

    function shallWe(verb){
      let eng = ["shall we "+verb.meaning.substr(2), "i wonder if we will "+verb.meaning.substr(2)]
      return {
        eng: eng[Math.floor(Math.random()*2)],
        kor: verb.future_base +"까요?"
      }
    }

    function futureBase(verb){
      return {
        eng: "future base: "+ verb.meaning,
        kor: verb.future_base
      }
    }

    function stem(verb){
      return {
        eng: "stem: "+ verb.meaning,
        kor: verb.stem
      }
    }


    let service = {
      dictionary: dictionary,
      present: present,
      past: past,
      goingTo: goingTo,
      wantTo: wantTo,
      can: can,
      cant: cant,
      must: must,
      shallWe: shallWe,
      futureBase:futureBase,
      stem: stem
    }

    return service;
  }

  module.exports = change();
})();
