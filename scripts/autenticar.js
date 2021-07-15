
function cadastrarNovoUsuario(event){
    event.preventDefault();
    let email = document.getElementById("cadastroEmail").value;
    let senha = document.getElementById("cadastroSenha").value;
    firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(function(){
        console.log(" Usuario criado com sucesso ")
        document.getElementById("sucessoCadastro").innerText = " Usuário criado com sucesso ! ";
    })
    .catch(function(error) {
         let errorCode = error.code;
         let errorMessage = error.message;
         console.log(errorCode);
         console.log(errorMessage);
         document.getElementById("erroCadastro").innerText=errorMessage;

  });
}

function validarAutenticacao (event){
    event.preventDefault();
    email = document.getElementById("loginEmail").value;
    senha = document.getElementById("loginSenha").value;
    firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(function(){
        console.log(" Usuario Logado com sucesso ");
        let usuario = firebase.auth().currentUser;
        console.log(usuario);
        document.getElementById("sucessoAutenticar").innerText = " Usuário logado com sucesso ! ";
    })
    .catch(function(error) {
        console.log(" Usuário não autenticado ");
        var errorCode = error .code;
        var errorMessage = error .message;
        document.getElementById("erroAutenticar").innerText = errorMessage;
});
}

function verificarUsuarioLogado(event){
    var user = firebase.auth.currentUser;
    event.preventDefault();
    console.log(user);
    console.log(user.email);
}