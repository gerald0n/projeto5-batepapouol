axios.defaults.headers.common['Authorization'] = 'uJX299kMVSRkCCZKpm2zjOlQ'

const URL_MESSAGES = 'https://mock-api.driven.com.br/api/vm/uol/messages'
const URL_LOGIN = 'https://mock-api.driven.com.br/api/vm/uol/participants'
const URL_STATUS = 'https://mock-api.driven.com.br/api/vm/uol/status'
const inputTextMessage = document.querySelector('input')

let username = { from: 'Geraldo', to: 'Todos', text: '', type: 'message' }
let mensagens = []

// ENTRAR NA SALA
const loginRoom = user => {
    axios
        .post(URL_LOGIN, { name: user.from })
        .then(() => {
            console.log('AUTENTICAÇÃO EFETUADA COM SUCESSO')
        })
        .catch(() => {
            console.log('NOME JÁ EXISTENTE!!!')
        })
}

// BUSCAR MENSAGENS

const container = document.querySelector('.container')
const button = document.querySelector('button')
button.addEventListener('click', () => {
    console.log(username)
})

const getMessages = url => {
    axios
        .get(url)
        .then(response => {
            response.data.forEach(message => {
                mensagens.push(message)
            })
        })
        .catch(function (error) {
            console.log(error)
        })
    mostrarMensagens(mensagens)
    mensagens = []
}

function mostrarMensagens(array) {
    container.innerHTML = ''
    array.forEach(message => {
        if (message.time.split(':')[0] >= 12)
            container.innerHTML += `<li>(${message.time}) ${message.from} ${message.text}</li>`
    })
}

// loginRoom(username)

// setInterval(getMessages, 500, URL_MESSAGES)

// setInterval(() => {
//     authentication(URL_STATUS, username)
//     getParticipants()
// }, 5000)

function sendMessage() {
    username.text = inputTextMessage.value
    setMessage(URL_MESSAGES, username)
}

// ENVIAR MENSAGENS
const setMessage = (url, user) => {
    {
        axios.post(url, {
            from: 'Geraldo',
            to: 'Todos',
            text: 'mensagem digitada',
            type: 'message'
        })
    }
}

// BUSCAR PARTICIPANTES
const getParticipants = () => {
    axios
        .get('https://mock-api.driven.com.br/api/vm/uol/participants')
        .then(response => {
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
