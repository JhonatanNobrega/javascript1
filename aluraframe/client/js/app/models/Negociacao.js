
class Negociacao {

    /*
    * No contrutor que definimos as propriedades.
    * Toda class com contrutor só pode chamar com new Negociacao.
    * this sempre aponta para a execução do momento ou seja essa class.
    * */
    constructor()
    {

        // Definindo as propriedades de Negociacao
        this.data = new Date();
        this.quantidade = 1;
        this.valor = 0.00;
    }

}