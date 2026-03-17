function mostrar(secao) {
    const conteudo = document.getElementById("conteudo");

    if (secao === "home") {
        conteudo.innerHTML = "<h2>Home</h2><p>Página inicial</p>";
    }
    else if (secao === "jogo") {
        conteudo.innerHTML = "<h2>Jogo</h2><p>Iniciar jogo aqui</p>";
    }
    else if (secao === "config") {
        conteudo.innerHTML = "<h2>Configurações</h2><p>Ajustes do sistema</p>";
    }
}