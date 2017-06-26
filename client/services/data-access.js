(function(){
  'use strict'

  const http = require('http');

  function data () {

    let service = {
      verbs: verbs,
    }

    return service;

    function verbs () {
      return new Promise(function(resolve, reject){
        http.get("http://192.168.0.5:3030/api/verbs", (res)=>{
          res.setEncoding('utf8');
          res.on('data', function(data){

            resolve(JSON.parse(data));
          });
        });
      })
    }
  }

  module.exports = data();
})();
