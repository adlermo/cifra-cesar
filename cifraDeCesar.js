/**
 * Desafio CodeNation Cifra de César
*/

url = 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=MY_TOKEN'

 abc = 'abcdefghijklmnopqrstuvwxyz'
 var novaFrase
 var phrase, chave

 // phrase = phrase.toLowerCase()     // passa o JSON para minúsculas

 // Função para cifrar
 function decifrar(frase, chav) {
    let nFrase = ''
     for (let i in frase) {
         if (this.abc.indexOf(frase[i]) == -1 ) {      // testa se 'é uma letra' se não o é apenas mantém
             nFrase += frase[i]
            //  console.log(nFrase)
         } else if (this.abc.indexOf(frase[i]) > (chav - 1)) {        // testa se está além dos limites da String abc
             nFrase += abc[abc.indexOf(frase[i]) - chav]
            //  console.log(nFrase)
         } else {
             nFrase += abc[(abc.indexOf(frase[i]) - chav) + 26]       // trata de pular para o final da String abc
            //  console.log(nFrase)
         }
     }
     return nFrase
 }

 // Função para salvar meu arquivo answer.json
 function getJson(ur) {
    fetch = require('node-fetch')
    fetch(ur)
       .then( (response) => response.json() )
       .then( (json) => {
        //    console.log(json)
           sha1 = require('js-sha1')
           json.decifrado = decifrar(json.cifrado, json.numero_casas)   // coloca a mensagem decifrada no campo correto do objeto
           json.resumo_criptografico = sha1(json.decifrado)             // coloca o sha1 da msg já decifrada no campo do objeto
        //    console.log(json)
           myJson = JSON.stringify(json)                                // transforma meu objeto em string para ser guardado
           const fs = require('fs')
           fs.writeFile('answer.json', myJson)                          // escreve minha string criando o arquivo answer.json
       })
       .catch( (err) => {
           console.log('ERROR: ', err.message)
       })
 }

 // Função para decifrar
 function cifrar(frase, chav) {
    let nFrase = ''
     for (let i in frase) {
         if (this.abc.indexOf(frase[i]) == -1 ) {      // testa se 'é uma letra' se não o é apenas mantém
             nFrase += frase[i]
            //  console.log(nFrase)
         } else if (this.abc.indexOf(frase[i]) < (26 - chav)) {      // testa se está além dos limites da String abc
             nFrase += abc[abc.indexOf(frase[i]) + chav]
            //  console.log(nFrase)
         } else {
             nFrase += abc[(abc.indexOf(frase[i]) + chav) - 26]       // trata de pular para o início da String abc
            //  console.log(nFrase)
         }
     }
     return nFrase
 }

/*  const newPost = post => {
     const options = {
         method: 'POST',
         body: JSON.stringify(post)
     }
 }

 // Função para enviar meu arquivo answer
 function sendJSON() {
     fetch = require('node-fetch')
     const fs = require('fs')
     fs.readFile('answer.json', 'utf-8', (err,data) => {
        if (err) { console.log(err) }
        console.log(`O Json é ${data}`)
        fetch('./answer.json', {
            method: 'POST',
            body: formData })
        .then( (response) => response.json() .then( data => {}) )
        .catch( (err) => console.log('ERROR: ', err.message) )
     })
 }
 */

/*  console.log(`Cifrada é ${phrase}`)
 console.log(`O hash é ${sha1(phrase)}`)
 console.log(`Decifra é ${novaFrase}`)
 console.log(`O hash é ${sha1(novaFrase)}`)
 console.log(`Cifrada é ${fraseDcif}`)
 console.log(`O hash é ${sha1(fraseDcif)}`) */

 getJson(url)   // Gera o arquivo answer.json pronto
    // Envia o arquivo answer completo
