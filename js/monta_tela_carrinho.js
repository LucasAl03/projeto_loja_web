import { listItens, removeItem, defineQuant } from "./carrinho.js"

//MONTANDO A TELA CARRINHO 
const montaTelaCarrinho = () => {
    //PEGANDO ELEMENTOS DO DOM
    const sectionItensCarrinho = document.querySelector('#itens-carrinho')
    const valorTot = document.querySelector('.valor-total')
    const valorFrete = document.querySelector('.valor-frete')
    const valorCard = document.querySelector('.valor-card')

    valorTot.innerHTML = `R$ `
    valorFrete.innerHTML = `R$ `
    valorCard.innerHTML = `R$ `
    

    sectionItensCarrinho.innerHTML = ''

    listItens().forEach((elem, i) => {
        const sectionItem = document.createElement('section')
        sectionItem.setAttribute('class', 'item')
        sectionItem.innerHTML = `<img src='${elem.caminho_da_imagem}' alt='${elem.descricao_produto}' class='img-item'> 
        <p class='descricao'>${elem.descricao_produto}</p> 
        <p class='vlr-unitario'>R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.',',')}</p> 
        <input type='number' name='quant${i}' id='quant${i}' class="input-item" id="input-item" value=${elem.quantidade}>
        <p class="tot-item">R$ ${parseFloat(elem.valor_unitario * elem.quantidade).toFixed(2).replace('.',',')}</p>`

        //PEGANDO A MUDANÇA NA QUANTIDADE
        //capturando o input id='quant${i}'
        const inputQuant = sectionItem.querySelector(`#quant${i}`)
        //registra o evento 'change' no input
        inputQuant.addEventListener('change', () => {
            //converte o inputQuant.value de string para numero
            const novaQtd = parseInt(inputQuant.value)
            //declaro a variavel quantFinal
            let quantFinal

            //
            if (isNaN(novaQtd)) {
                quantFinal = 1
            } else {
                quantFinal = novaQtd
            }

            defineQuant(i, quantFinal)

            montaTelaCarrinho()

        })

        const imgRemover = document.createElement('img')
        imgRemover.setAttribute('src', '../icones/remover.png')
        imgRemover.setAttribute('alt', 'Remover')
        imgRemover.setAttribute('class', 'img-remover')

        imgRemover.addEventListener('click',()=>{
            if(confirm(`Deseja remover ${elem.descricao_produto} da sua lista? `)){
                removerItemCarrinho(i)
            }
        })

        sectionItem.appendChild(imgRemover)

        sectionItensCarrinho.appendChild(sectionItem)
    });
}

const removerItemCarrinho = (pos)=>{
    removeItem(pos)

    montaTelaCarrinho()
}

montaTelaCarrinho()