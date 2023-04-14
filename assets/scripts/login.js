axios.defaults.headers.common['Authorization'] = 'uJX299kMVSRkCCZKpm2zjOlQ'
const URL_LOGIN = 'https://mock-api.driven.com.br/api/vm/uol/participants'

const btnLogin = document.querySelector('#btnLogin')
const inputLogin = document.querySelector('#login')

btnLogin.addEventListener('click', () => loginRoom())
inputLogin.addEventListener('focus', () => {
    onkeyup = event => {
        if (inputLogin.value.length > 0) btnLogin.disabled = false
        else {
            document.querySelector('.error-login').classList.add('disabled')
            btnLogin.disabled = true
        }

        if (event.key === 'Enter') loginRoom()
    }
})

// ENTRAR NA SALA
const loginRoom = () => {
    let user = new Object()
    user.name = inputLogin.value

    axios
        .post(URL_LOGIN, { name: user.name })
        .then(() => {
            window.location.replace('./index.html')
        })
        .catch(() => {
            document.querySelector('.error-login').classList.remove('disabled')
        })
    document.querySelector('.loading').classList.remove('disabled')
}
