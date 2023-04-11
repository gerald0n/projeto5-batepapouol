axios.defaults.headers.common['Authorization'] = 'yUdzIPfrS3fYf7UmkDuImPic'

const URL_MESSAGES = 'https://mock-api.driven.com.br/api/vm/uol/messages'
const URL_LOGIN = 'https://mock-api.driven.com.br/api/vm/uol/participants'
const URL_STATUS = 'https://mock-api.driven.com.br/api/vm/uol/status'

const username = {name: "Geraldo teste"}

const loginRoom = user => {
    axios.post(URL_LOGIN, (user)).then((response => {
      console.log("AUTENTICAÇÃO EFETUADA COM SUCESSO")
    })).catch(error => {
      console.log('NOME JÁ EXISTENTE!!!')
    })
}

function authentication (url, username) {
  axios.post(url, username)
}

const getMessages = URL => {
    axios
        .get(URL)
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
}

const getParticipants = () => {
  axios.get('https://mock-api.driven.com.br/api/vm/uol/participants').then((response) => {
    console.log(response.data)
  })
}

loginRoom(username)
getParticipants()



// setInterval(getMessages, 5000, URL_MESSAGES)
