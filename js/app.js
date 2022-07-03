// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Rachão dos amigos",
            "cidade": "Centro",
            "categoria": "Futebol",
            "email": "jose.henrique@gmail.com",
            "telefone": "(31)99889-3000"
        },
        {
            "id": 2,
            "nome": "Futvôlei aloha",
            "cidade": "Eldorado",
            "categoria": "Futvôlei",
            "email": "fut@aloha.com",
            "telefone": "(31)91960-2020"
        },
        {
            "id": 3,
            "nome": "Torneio do towers",
            "cidade": "Barreiro",
            "categoria": "Basquete",
            "email": "torneio@towers.com",
            "telefone": "99293-9697"
        },
        {
            "id": 4,
            "nome": "Partida de volei",
            "cidade": "Belvedere",
            "categoria": "Vôlei",
            "email": "andre@gmail.com",
            "telefone": "92003-0019"
        },
        {
            "id": 5,
            "nome": "Campeonato do tunico",
            "cidade": "Tropical",
            "categoria": "Futebol",
            "email": "tunico@gmail.com",
            "telefone": "(31)91978-2020"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email" : contato.email,
        "telefone": contato.telefone,
        "cidade" : contato.cidade,
        "categoria": contato.categoria
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Partida criada com sucesso!");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
    db.data[index].email = contato.email,
    db.data[index].telefone = contato.telefone,
    db.data[index].cidade = contato.cidade,
    db.data[index].categoria = contato.categoria

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Partida removida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}
var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}