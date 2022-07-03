function login(){

    let msgError = document.querySelector('#msgError')
    let msgSucces = document.querySelector('#msgSucces')
    
    const usuario = document.getElementById('usuario')


    const senha = document.getElementById('senha')

    let listaUser = []

    let userValid = {
        nome: '',
        sobrenome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    

    listaUser.forEach((item) => {
        if(usuario.value == item.userCad && senha.value == item.senhaCad){
           
          userValid = {
             nome: item.nomeCad,
             sobrenome: item.sobrenomeCad,
             user: item.userCad,
             senha: item.senhaCad
           }
          
        }
      })

    if(usuario.value == userValid.user && senha.value == userValid.senha){
        msgSucces.setAttribute('style', 'display: flex')
        msgSucces.innerHTML = 'Logando!'
        setTimeout(()=>{
            window.location.href = "./home.html"
        }, 440)
        
        

    } else {
        msgError.setAttribute('style', 'display: flex')
        msgError.innerHTML = 'Usuário ou senha incorretos!'

    }


}