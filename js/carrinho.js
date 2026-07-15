//localStorage.removeItem("itensSessao");
//localStorage.clear()

//CRIANDO O ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(localStorage.getItem('itensSessao')) || []

//const itensCarrinho = JSON.parse(sessionStorage.getItem('itensSessao')) || []


//FUNÇÃO PARA ADICIONAR O ITEM ARRAY
const addItem = (objItem) => {
    itensCarrinho.push(objItem)

    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
    //sessionStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
}

//LISTA ITENS DO CARRINHO
const listItens = () => {

    const itensSelecionados = JSON.parse(localStorage.getItem('itensSessao')) || []

    //const itensSelecionados = JSON.parse(sessionStorage.getItem('itensSessao')) || []

    return itensSelecionados
}

//REMOVER ELEMNTO
const removeItem = (pos)=>{
    itensCarrinho.splice(pos, 1)

    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
    //sessionStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
}

export { addItem, listItens, removeItem }