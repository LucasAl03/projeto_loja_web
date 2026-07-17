//PEGANDO O INPUT CEP DO DOM
const inputCep = document.querySelector('#cep')

//CAPTURANDO O EVENTO AO PERDER O FOCO
inputCep.addEventListener('change',(evt)=>{
    //PEGANDO OS NÚMEROS DO INPUT NÃO PERMITINDO OUTRO TIPO DE DAOS QUE NÃO NÚMEROS
    const numCep = evt.target.value.replace(/\D/g,'')

    //VERIFICA SE SÃO 8 DÍGITOS
    if(numCep != 8){
        alert('CEP INVÁLIDO !!!')
        return
    }

    //CHAMA A FUNÇÃO buscaDadosCep
    buscandoDadosCep(numCep)
})

//BUSCAR OS DADOS DO CEPS
const buscandoDadosCep = (cep) =>{
    //TENTA BUSCAR OS DADOS NO VIACEP
    try{
        //BUSCA OS DADOS NO VIACEP
        const response = fetch(`https://viacep.com.br/ws/${cep}}/json/`)

        //CONVERTE OS DADOS NO FORMATO json
        const dadosEndereco = response.json()

        //CHAMA A FUNÇÃO exibeDados
        exibeDados(dadosEndereco)
    
    //CASO HAJA ALGUM ERRO É CAPTURAD PELO catch
    } catch(erro){
        console.log(erro.message)
    }

}

//OBJETO LITERAL CAMPOS QUE CRIA CADA CHAVE SEJA UM INPUT DO DOM
const campos ={
    logradouro: document.querySelector('#logradouro'),
    bairro: document.querySelector('#bairro'),
    localidade: document.querySelector('#localidade'),
    uf: document.querySelector('#uf'),
}

//FUNÇÃO EXIBE DADOS
const exibeDados = (objDados)=>{
    //PEGA A DIV PAI DOS ELEMNTOS DO ENDEREÇO
    const divEndereco = document.querySelector('#div-dados-endereco')
    //REMOVE DA DIV O CLASS OCULTO
    divEndereco.classList.remove('oculto')

    //PERCORRE O ONJETO, NO FORMATO JSON, DO VIDA CEP
    for(let chave in objDados){
        //ATRIBUI O VALOR AO INPUT
        campos[chave].value = objDados[chave]
        //BLOQUEIA OS INPUTS. NÃO PERMITE QUE O USUÁRIO APAGUE OS VALORES
        campos[chave].disabled = objDados[chave]
    }
}