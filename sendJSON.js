
// Função para enviar meu arquivo answer
function sendJSON() {
    fetch = require('node-fetch')
    const fs = require('fs')
    FormData = require('form-data')
    const formData = new FormData()
    formData.append('answer', fs.createReadStream('./answer.json'))

    // console.log(`O Json é ${formData}`)
    fetch('https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=MY_TOKEN', {
        method: 'POST',
        body: formData
    })
    .then( (res) => console.log(`FormData ${JSON.stringify(formData)} Resposta: ${res.status} ${res.type} ${res.json()}`) )
    .catch( (err) => console.log('ERROR: ', err.message) )

}

sendJSON()
