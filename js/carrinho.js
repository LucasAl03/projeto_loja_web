//CRIANDO O ARRAY DE ITENS DO CARRINHO
const itensCarrinho = []

//FUNÇÃO PARA ADICIONAR O ITEM ARRAY
const addItem = (objItem) => {
    itensCarrinho.push(objItem)
}

//LISTA ITENS DO CARRINHO
const listItens = () => {
    return itensCarrinho
}

export {addItem}