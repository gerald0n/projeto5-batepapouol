axios.defaults.headers.common['Authorization'] = 'uJX299kMVSRkCCZKpm2zjOlQ'
const URL_MESSAGES = 'https://mock-api.driven.com.br/api/vm/uol/messages'
const URL_LOGIN = 'https://mock-api.driven.com.br/api/vm/uol/participants'
const URL_STATUS = 'https://mock-api.driven.com.br/api/vm/uol/status'

const containerMain = document.querySelector('.container-messages')
const btnSend = document.querySelector('#btnSendMessage')
const inputMessage = document.querySelector('#inputMessage')
// from | to | text | type | time
let arrMessages = []

function showMessages() {
    containerMain.innerHTML = ''
    arrMessages.forEach(message => {
        if (message.type === 'status')
            containerMain.innerHTML += `<li class = "bg-grey">(${message.time}) ${message.from} para ${message.to} ${message.text}</li>`
        else if (message.type === 'private_message')
            containerMain.innerHTML += `<li class = "bg-pink">(${message.time}) ${message.from} para ${message.to} ${message.text}</li>`
        else
            containerMain.innerHTML += `<li>(${message.time}) ${message.from} para ${message.to} ${message.text}</li>`
    })
}

btnSend.addEventListener('click', sendMessages)

function sendMessages() {

}

// BUSCAR MENSAGENS
const getMessages = url => {
    axios
        .get(url)
        .then(response => {
            arrMessages = response.data
            showMessages()
        })
        .catch(error => console.log(error.status))
}

getMessages(URL_MESSAGES)
setInterval(getMessages, 3000, URL_MESSAGES)

// ENVIAR MENSAGEM AO SERVIDOR
const setMessage = () => {}

// BUSCAR PARTICIPANTES
const getParticipants = () => {
    axios.get(URL_LOGIN).then(response => {
        console.log(response.data)
    })
}

// MANTER CONEXÃO - requisição de 5 em 5 segundos
function authentication(url, user) {
    axios
        .post(url, { name: user.from })
        .then(response => console.log(response))
        .catch(error => error)
}
