// function json() {

//     //cria um objeto para guardar os dados do formulario
//     let dados = {};
//     console.log(dados)

//     nome = document.querySelector('input[name=nome]').value
//     idade = document.querySelector('input[name=idade]').value
//     celular = document.querySelector('input[name=celular]').value
//     endereco = document.querySelector('input[name=endereco]').value
//     origem = document.querySelector('select[name=origem]').value
//     raca = document.querySelector('select[name=raca]').value
//     obs = document.querySelector('textarea[name=obs]').value
//     const checkboxes = document.querySelectorAll('input[name="fruta[]"]');
//     const algumMarcado = Array.from(checkboxes).some(cb => cb.checked);


//     dados.nome = nome
//     dados.idade = idade
//     dados.celular = celular
//     dados.endereco = endereco
//     dados.origem = origem
//     dados.raca = raca
//     dados.obs = obs
//     dados.algumMarcado = algumMarcado

//     console.log(dados)

//     //converte o objeto em uma string JSON

//     let dadosJSON = JSON.stringify(dados);

//     //exibe a string json na tela (apenas para fins de demonstração)
//     console.log(dadosJSON);

// }

function json() {
    var obj_form = {
        nome: "",
        idade: "",
        endereco: "",
        raca: 0,
        trabalho: "",
        sabor: [],
        endereco: "",
        tamanho: "",
        celular: "",

    }

    var el_nome = document.getElementById('nome');
    obj_form.nome = el_nome.value;

    var el_idade = document.getElementById('idade');
    obj_form.idade = el_idade.value;

    var el_celular = document.getElementById('celular');
    obj_form.celular = el_celular.value;

    var el_endereco = document.getElementById('endereco');
    obj_form.endereco = el_endereco.value;

    var el_raca = document.getElementById('raca');
    obj_form.raca = el_raca.value;

    var el_trabalho = document.querySelector('input[name=trabalho]:checked');
    obj_form.trabalho = el_trabalho.value;

    var el_sabor = {};
    //Pega todos selecionados
    const frutas = document.querySelectorAll('input[name="fruta"]:checked');
    //criei a array
    const saboresSelecionados = [];

    //forEach para adicionar os valores na array
    frutas.forEach(sabor => {
        saboresSelecionados.push(sabor.value);
    });
    console.log(el_sabor);
    obj_form.sabor = saboresSelecionados;

    var el_tamanho = document.querySelector('input[name=tamanho]:checked');
    obj_form.tamanho = el_tamanho.value;

    var el_endereco = document.getElementById('endereco');
    obj_form.endereco = el_endereco.value;

    var obj_form_json = JSON.stringify(obj_form);
    document.getElementById('saidajson').innerText = obj_form_json;
    console.log(obj_form_json);
}

