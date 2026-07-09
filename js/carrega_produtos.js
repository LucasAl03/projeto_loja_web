import {produtos} from "./produtos.js";

//Pegando elementos do DOM
const section_cards = document.querySelector('#cards')

//Função para carregar os produtos
const listarProdutos = ()=>{
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

        const h3Valor = document.createElement('h3')
        h3Valor.setAttribute('class', 'valor_card')
        h3Valor.innerHTML `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.',',')}`

        const btnCard = document.createElement('button')
        btnCard.setAttribute('class', 'btn_card')
        btnCard.innerHTML = 'Adicionar'

        divCard.appendChild(imgProduto)
        divCard.appendChild(h2Titulo)
        divCard.appendChild(h3Valor)
        divCard.appendChild(btnCard)

        section_cards.appendChild(divCard)
    });
}

listarProdutos()

//Filtrando as seções ocm a coleção map
const listarSecoes = () => {
    //Criando a coleção Map

    const secoesFiltrada = new Map()

    //Percorrendo o array produtos e filtrando as seções
    produtos.forEach((elem, i)=>{
        //criando a chave e o valor da coleção map a partir do id seção da lista de produtos
        secoesFiltrada.set(elem.id_secao, elem)
    })

    //Convertendo o Map em array
    const secoesMenu = Array.from(secoesFiltrada.values())

    //Retornando o array convertido
    return secoesMenu
}

//montando os Links seções
const montarSecoes = ()=>{
    //pegando elementos do dom
    const ulMenu = document.querySelector('#menu-secoes')

    //Limpando o Elemento ulMenu
    ulMenu.innerHTML = ''

    //Percorrendo o array das seções filtradas
    listarSecoes().forEach((elem, i) => {
        //Criando o elemento li
        const liSecao = document.querySelector('li')

        //Criando o elemento a
        const aSecao = document.createElement('a')
        aSecao.setAttribute('href','#')
        aSecao.setAttribute('class', 'lnk-secao')
        aSecao.innerHTML = elem.secoesFiltrada
        
        //Capturando o click dos links
        aSecao.addEventListener('click',()=>{
            //para teste
            console.log(elem.id_secao)
        })

        //adicionando o elemento filho a no elemento li
        liSecao.appendChild(aSecao)

        //adicionando o elemento filho li no elemento do DOM url
        ulMenu.appendChild(liSecao)
    })
}

montarSecoes()