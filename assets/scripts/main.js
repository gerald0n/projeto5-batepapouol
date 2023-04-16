axios.defaults.headers.common['Authorization'] = 'uJX299kMVSRkCCZKpm2zjOlQ'
const URL_MESSAGES = 'https://mock-api.driven.com.br/api/vm/uol/messages'
const URL_LOGIN = 'https://mock-api.driven.com.br/api/vm/uol/participants'
const URL_STATUS = 'https://mock-api.driven.com.br/api/vm/uol/status'

const containerMain = document.querySelector('.container-messages')
const btnSend = document.querySelector('#btnSendMessage')
const inputMessage = document.querySelector('#inputMessage')
// from | to | text | type | time
let arrMessages = []
const user = {
    from: localStorage.getItem('user'),
    to: 'Todos',
    text: '',
    type: 'message'
}

if (btnSend) btnSend.addEventListener('click', setMessage)
getMessages(URL_MESSAGES)
setInterval(getMessages, 3000, URL_MESSAGES)
setInterval(authentication, 3000, URL_STATUS, user)

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

// BUSCAR MENSAGENS
function getMessages(){
    axios
        .get(URL_MESSAGES)
        .then(response => {
            arrMessages = response.data
            showMessages()
        })
        .catch(error => console.log(error.status))
}

// ENVIAR MENSAGEM AO SERVIDOR
function setMessage () {
    user.text = inputMessage.value
    axios
        .post(URL_MESSAGES, user)
        .then(response => console.log(response))
        .catch(error => {
            console.log('MENSAGEM VAZIA.')
        })
}

// BUSCAR PARTICIPANTES
function getParticipants () {
    axios.get(URL_LOGIN).then(response => {
        console.log(response.data)
    })
}

// MANTER CONEXÃO - requisição de 5 em 5 segundos
function authentication(url, user) {
    axios
        .post(url, { name: user.from })
        .then(response => console.log(response.data))
        .catch(error => {
            window.location.replace('./login.html')
            alert(
                `Erro ${error.response.data}: usuário desconectado por inatividade!`
            )
        })
}


