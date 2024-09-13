/*
 Objetivo 1- quando o usuario clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

 Passo 1- pegar o botão mostrar mais no JS pra poder verificar quando o usuario clicar em cima dele

 Passo 2- indentificar o clique no botão

 Passo 3- adicionar a classe "ativo" nos projetos escondidos 

 Objetivo 2- esconder o botão de mostrar mais 
    Passo 1- pegar o botão e esconder ele 
*/

// Objetivo 1- quando o usuario clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

// Passo 1- pegar o botão mostrar mais no JS pra poder verificar quando o usuario clicar em cima dele

const btnMostrarProjetos = document.querySelector('.btn-mostrar-projetos');

const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

//Passo 2- indentificar o clique no botão
btnMostrarProjetos.addEventListener('click',() => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    btnMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
