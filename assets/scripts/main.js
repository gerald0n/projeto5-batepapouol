axios.defaults.headers.common['Authorization'] = 'uJX299kMVSRkCCZKpm2zjOlQ'
const URL_MESSAGES = 'https://mock-api.driven.com.br/api/vm/uol/messages'
const URL_LOGIN = 'https://mock-api.driven.com.br/api/vm/uol/participants'
const URL_STATUS = 'https://mock-api.driven.com.br/api/vm/uol/status'

let arrMessages = []

// BUSCAR MENSAGENS
const getMessages = url => {
    axios
        .get(url)
        .then(response => {
            response.data.forEach(message => {
                arrMessages.push(message)
            })
        })
        .catch(error => {
            console.log(error)
        })
}

getMessages(URL_MESSAGES)


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
