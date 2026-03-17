function removerAtivo(){

    const botoes = document.querySelectorAll(".menu button");

    botoes.forEach(btn => {
        btn.classList.remove("ativo");
    });

}

function tamanhogrande(botao){

    const texto = document.getElementById("texto");
    const gif = document.getElementById("gif");

    texto.innerText = "Com Desenho";

    gif.style.display = "block";

    removerAtivo();
    botao.classList.add("ativo");
}

function tamanhopequeno(botao){

    const texto = document.getElementById("texto");
    const gif = document.getElementById("gif");

    texto.innerText = "Sem Desenho";

    gif.style.display = "none";
    //gif.style.display = "block";

    removerAtivo();
    botao.classList.add("ativo");
}