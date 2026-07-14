//CRIANDO O ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(localStorage.getItem('sessaoItens')) || []

//FUNÇÃO PARA ADICIONAR O ITEM ARRAY
const addItem = (objItem) => {
    itensCarrinho.push(objItem)

    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))

    montaTelaCarrinho()
}

//LISTA ITENS DO CARRINHO
const listItens = () => {

    const itensSelecionados = JSON.parse(localStorage.getItem('itensSessao')) || []

    return itensCarrinho
}

//MONTANDO A TELA CARRINHO 
const montaTelaCarrinho = () => {
    //PEGANDO ELEMENTOS DO DOM
    const sectionItensCarrinho = document.querySelector('#itens-carrinho')

    listItens().forEach((elem, i) => {
        const sectionItem = document.createElement('section')
        sectionItem.setAttribute('class', 'item')
        sectionItem.innerHTML = `<img src='${elem.caminho_da_imagem}' alt=${elem.descricao_produo}/> 
        <p class='descricao'>${elem.descricao_produto}</p> 
        <p class='vlr-unitario'>${elem.valor_unitario}</p> 
        <input type='number' name='quant${i}' id='quant${i}' class="input-item" value=${1} 
        <p class="tot-item">${elem.valor_unitario * 1}</p>
        <img src="../imagens/icones/remover.png" alt="" class="img-remover" >`

        sectionItensCarrinho.appendChild(sectionItem)
    });
}

export {addItem}