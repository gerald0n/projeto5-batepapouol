axios.defaults.headers.common['Authorization'] = 'uJX299kMVSRkCCZKpm2zjOlQ'
const URL_LOGIN = 'https://mock-api.driven.com.br/api/vm/uol/participants'

const btnLogin = document.querySelector('#btnLogin')
const inputLogin = document.querySelector('#login')

inputLogin.addEventListener('focus', () => {
    onkeyup = event => {
        if (inputLogin.value.length > 0) btnLogin.disabled = false
        else {
            document.querySelector('.error-login').classList.add('disabled')
            btnLogin.disabled = true
        }
    }
})

// ENTRAR NA SALA
const loginRoom = () => {
    localStorage.setItem('user', inputLogin.value)
    axios
        .post(URL_LOGIN, { name: inputLogin.value })
        .then(() => {
            window.location.replace('./index.html')
            document.querySelector('.loading').classList.remove('disabled')
        })
        .catch(() => {
            document.querySelector('.error-login').classList.remove('disabled')
        })
}

btnLogin.addEventListener('click', loginRoom)
