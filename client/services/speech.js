(function (){
  'use strict'

  function speechService(){

    let speaker = new SpeechSynthesisUtterance();
    let voices;
    let voice;
    getVoices();

    function getVoices(){
      voices = window.speechSynthesis.getVoices();

      if(voices.length < 1){
        setTimeout(getVoices, 500);
      }
    };

    function speak(txt){
      speaker.text = txt;
      speaker.voice = voices.find((element)=> { return element.name == "Google 한국의" || element.name == "Korean South Korea"});
      if(speaker.voice.name == "Korean South Korea"){speaker.lang = speaker.voice.lang;}
      speaker.rate = 0.9;
      window.speechSynthesis.speak(speaker);
    }

    /*if (voiceSelect.value) {
      var selectedVoice = speechSynthesis.getVoices().filter(function(voice) { return voice.voiceURI == voiceSelect.value; })[0];

      msg.voiceURI = selectedVoice.voiceURI;
      msg.lang = selectedVoice.lang;

    }*/


    let service = {
      speak: speak,
    };

    return service;
  }

  module.exports = speechService();

})();
