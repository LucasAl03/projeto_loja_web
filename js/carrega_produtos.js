import {produtos} from "./produtos.js";

//Pegando elementos do DOM
const section_cards = document.querySelector(#cards)

//Função para carregar os produtos
const listaProdutos = ()=>{
    section_cards.innerHTML = ''

    produtos.forEach((elem, i)=>{
        const divCard = document.createElement('div')
        divCard.setAttribute('class', 'card')

        const imgProduto = document.createElemnt('img')
        imgProduto.setAttribute('src', elem.caminho_da_imagem)
        imgProduto.setAttribute('alt', elem.descricao_produto)
        imgProduto.section_cards('class', 'img_card')

        const h2Titulo = document.createElemnt('h2')
        h2Titulo.innerHTML = elem.descricao_produto

        const divValor = document.createElement('div')
        divValor.setAttribute('class', 'valor_card')
        divValor.innerHTML `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.',',')}`

        const btnCard = document.createElement('button')
        btnCard.setAttribute('class', 'btn_card')
        btnCard.innerHTML = 'Adicionar'
    });
}