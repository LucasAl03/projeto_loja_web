//PEGANDO O INPUT CEP DO DOM
const inputCep = document.querySelector('#cep')

//CAPTURANDO O EVENTO AO PERDER O FOCO
inputCep.addEventListener('change',(evt)=>{
    //PEGANDO OS NÚMEROS DO INPUT NÃO PERMITINDO OUTRO TIPO DE DAOS QUE NÃO NÚMEROS
    const numCep = evt.target.value.replace(/\D/g, "")

    //VERIFICA SE SÃO 8 DÍGITOS
    if(numCep.length != 8){
        alert('CEP INVÁLIDO !!!')
        return
    }

    //CHAMA A FUNÇÃO buscaDadosCep
    buscaDadosCep(numCep)
})

//await - espera
//async - não para o processo enquanto a consulta é feita
//fetch - nativo do java para buscar api fora do sistema

//BUSCAR OS DADOS DO CEPS
const buscaDadosCep = async (cep) =>{
    //TENTA BUSCAR OS DADOS NO VIACEP
    try{
        
        //BUSCA OS DADOS NO VIACEP
        const response = await fetch (`https://viacep.com.br/ws/${cep}/json/`)
        
        //CONVERTE OS DADOS NO FORMATO json
        const dadosEndereco = await response.json()

        //CHAMA A FUNÇÃO exibeDados
        exibeDados(dadosEndereco)
    
    //CASO HAJA ALGUM ERRO É CAPTURAD PELO catch
    } catch(erro) {
        console.log('ERRO APRESENTADO', erro.message)
    }

}

//OBJETO LITERAL CAMPOS QUE CADA CHAVE REPRESENTA OS INPUTS DO DOM
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

    document.querySelector('#logradouro').value = objDados.logradouro
    document.querySelector('#logradouro').disabled = true
    document.querySelector('#bairro').value = objDados.logradouro
    document.querySelector('#bairro').disabled = true
    document.querySelector('#localidade').value = objDados.logradouro
    document.querySelector('#localidade').disabled = true
    document.querySelector('#uf').value = objDados.logradouro
    document.querySelector('#uf').disabled = true

    //PERCORRE O OBJETO, NO FORMATO JSON, DO VIDA CEP
    /*for(let chave in objDados){

        //ATRIBUI O VALOR AO INPUT
        campos[chave].value = objDados[chave]

        //BLOQUEIA OS INPUTS. NÃO PERMITE QUE O USUÁRIO APAGUE OS VALORES
        campos[chave].disabled = objDados[chave]
    }*/
}