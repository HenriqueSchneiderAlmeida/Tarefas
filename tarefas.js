const form = document.getElementById('form-tarefa');
const imgFeito = '<img src="./imagens/feito.png" alt="Tarefa concluída">';
const tarefa = [];

//const spanReprovado = '<span class="reprovado">Reprovado</span>';

let linhas ='';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinhas();
    atualizaTabela();
});

function adicionaLinhas() {
    const inputTarefa = document.getElementById('tarefa');

    if (tarefa.includes(inputTarefa.value)) {
        alert (`A tarefa: ${inputTarefa.value} já foi incluida`);
    } else {
        tarefa.push(inputTarefa.value);
        
        let linha = `<li onclick=' style="Text-decoration: line-through"'>`;
        linha += `${inputTarefa.value}</li>`; 
        linhas+= linha;
    }
    inputTarefa.value = '';
    
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('ul');
    corpoTabela.innerHTML = linhas;
}