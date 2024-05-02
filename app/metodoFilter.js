const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == "disponivel" ? filtarLivrosPorDisponibilidade() : filtrarLivrosPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == "disponivel") {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosNaTela(valorTotal)
        console.log(valorTotal)
        
    } 
}  

function filtrarLivrosPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtarLivrosPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponivel.innerHTML = `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}
