import { listItens } from "./carrinho.js"

//MONTANDO A TELA CARRINHO 
const montaTelaCarrinho = () => {
    //PEGANDO ELEMENTOS DO DOM
    const sectionItensCarrinho = document.querySelector('#itens-carrinho')

    listItens().forEach((elem, i) => {
        const sectionItem = document.createElement('section')
        sectionItem.setAttribute('class', 'item')
        sectionItem.innerHTML = `<img src='${elem.caminho_da_imagem}' alt=${elem.descricao_produto} class='img-item'/> 
        <p class='descricao'>${elem.descricao_produto}</p> 
        <p class='vlr-unitario'>R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.',',')}</p> 
        <input type='number' name='quant${i}' id='quant${i}' class="input-item" value=${1} 
        <p class="tot-item">R$ ${parseFloat(elem.valor_unitario * 1).toFixed(2).replace('.',',')}</p>
        <img src="../icones/remover.png" alt="" class="img-remover" >`

        sectionItensCarrinho.appendChild(sectionItem)
    });
}

montaTelaCarrinho()