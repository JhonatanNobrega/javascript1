
class NegociacaoController {

    constructor()
    {
        // Alias para querySelector
        let $ = document.querySelector.bind(document);
        
        /* Manipulação do DOM
        |   Boa prática, colocar no construtor porque buscamos no dom apenas 1 vez.
        |   Isso vai melhorar a perfome-se. Porque não vai ser processado a cada insersão.
        * */
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');   
    }

    adiciona(event)
    {
        event.preventDefault();
        
        let data =  DateHelper.textParaData(this._inputData.value);

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value,
        )
        
        console.log(negociacao);

    }

}