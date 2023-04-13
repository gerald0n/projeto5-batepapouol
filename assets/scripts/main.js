axios.defaults.headers.common['Authorization'] = 'uJX299kMVSRkCCZKpm2zjOlQ'
const URL_MESSAGES = 'https://mock-api.driven.com.br/api/vm/uol/messages'
const URL_LOGIN = 'https://mock-api.driven.com.br/api/vm/uol/participants'
const URL_STATUS = 'https://mock-api.driven.com.br/api/vm/uol/status'
const btnLogin = document.querySelector('#btnLogin')
const inputLogin = document.querySelector('#login')

inputLogin.addEventListener('focus', () => {
    onkeyup = event => {
        if (inputLogin.value.length > 0) btnLogin.disabled = false
        else btnLogin.disabled = true

        if(event.key === 'Enter')
            console.log(inputLogin.value)
    }
    // axios.post(URL_LOGIN, {name: inputLogin.value})
    // window.location.href = './index.html'
})

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
const getMessages = url => {
    axios
        .get(url)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
}

// loginRoom(username)

// setInterval(getMessages, 500, URL_MESSAGES)

// setInterval(() => {
//     authentication(URL_STATUS, username)
//     getParticipants()
// }, 5000)

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
