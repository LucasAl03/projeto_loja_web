//localStorage.removeItem("itensSessao");
//localStorage.clear()

//CRIANDO O ARRAY DE ITENS DO CARRINHO
const itensCarrinho = JSON.parse(localStorage.getItem('itensSessao')) || []

//const itensCarrinho = JSON.parse(sessionStorage.getItem('itensSessao')) || []

//CRIANDO ARROW ITEM
const fobjItem = (objProduto) => {
    const item = {
    id_produto: objProduto.id_produto,
    descricao_produto: objProduto.descricao_produto,
    caminho_da_imagem: objProduto.caminho_da_imagem,
    valor_unitario: objProduto.valor_unitario,
    quantidade: 1
    }

    return item
} 

//PEGANDO O INDICE DO ARRAY
//console.log(itensCarrinho.findIndex(elem => elem.id_produto == 2))

//itensCarrinho.findIndex(elem => elem.id_produto === elem.id_produto)

//FUNÇÃO PARA ADICIONAR O ITEM ARRAY
const addItem = (objItem) => {
    //PROCURA SE O ITEM JA EXITE NO CARRINHO
    const index = itensCarrinho.findIndex(elem => elem.id_produto === objItem.id_produto)

    if (index !== -1) {
        //SE JA EXISTE AUMENTA A QUANTIDADE
        itensCarrinho[index].quantidade += 1
    } else {
        //SE NAO EXISTE ADICIONA O ITEM EM UMA NOVA LINHA
        itensCarrinho.push(fobjItem(objItem))
    }

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

//DEFINIR QUANTIDADE
//pos - posição do item dentro da array
const defineQuant = (pos, novaQuant) => {
    //SE O INPUT quantidade ZERAR O ITEM SERÁ REMOVIDO
    if (novaQuant < 1){
        itensCarrinho.splice(pos, 1)
    //ALTERA A PROPRIEDADE quantidade PELO NOVO VALOR
    } else {
        itensCarrinho[pos].quantidade = novaQuant
    }

    localStorage.setItem('itensSessao', JSON.stringify(itensCarrinho))
}

export { addItem, listItens, removeItem, defineQuant }