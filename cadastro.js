let msgError = document.querySelector('#msgError')
let  msgSucces = document.querySelector('#msgSucces')

function cadastrar(){

    const email = document.getElementById('usuario')
    let validEmail = false

    const nome = document.getElementById('nome')
    let validNome = false

    const sobrenome = document.getElementById('sobrenome')
    let validSobrenome = false

    const password = document.getElementById('senha')
    let validPassword = false

    const confirmPassword = document.getElementById('confirmaSenha')
    let validConfirmPassword = false

    if(email.value == ''){
        email.classList.add("errorInput")
        validEmail = false
    } else {
        email.classList.remove("errorInput")
        validEmail = true
    }
    if(nome.value == ''){
        nome.classList.add("errorInput")
        validNome = false
    } else {
        nome.classList.remove("errorInput")
        validNome = true
    }
    if(sobrenome.value == ''){
        sobrenome.classList.add("errorInput")
        validSobrenome = false
    } else {
        sobrenome.classList.remove("errorInput")
        validSobrenome = true
    }
    if(password.value == ''){
        password.classList.add("errorInput")
        validPassword = false
    } else {
        password.classList.remove("errorInput")
        validPassword = true
    }
    if(confirmPassword.value == '' || confirmPassword.value != password.value){
        confirmPassword.classList.add("errorInput")
        validConfirmPassword = false
    } else {
        confirmPassword.classList.remove("errorInput")
        validConfirmPassword = true
    }
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)){
        email.classList.add("errorInput")
        validEmail = false
    } else {
        email.classList.remove("errorInput")
        validEmail = true
    }
    
    if(validNome && validSobrenome && validEmail && validPassword && validConfirmPassword){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push({
            nomeCad: nome.value,
            sobrenomeCad: sobrenome.value,
            userCad: email.value,
            senhaCad: password.value 
        })

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSucces.setAttribute('style', 'display: flex')
        msgSucces.innerHTML = '<strong>Cadastrando usuário...</strong>'
        msgError.setAttribute('style', 'display: none')

        setTimeout(()=>{
            window.location.href = "index.html"
        }, 740)
        
    } else {
        msgError.setAttribute('style', 'display: flex')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente!</strong>'
    }
}


