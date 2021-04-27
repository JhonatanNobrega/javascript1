
class Negociacao {

  /*
  * No contrutor que definimos as propriedades.
  * Toda class com contrutor só pode chamar com new Negociacao.
  * this sempre aponta para a execução do momento ou seja essa class.
  * */
  constructor( quantidade = 1, valor = 0.00 )
  {
    // Definindo as propriedades de Negociacao
    this._data = new Date();
    this._quantidade = quantidade;
    this._valor = valor;

    /* Após criado congela os valores dessa class
    * Podemos ter problema para encapsular desta forma porque freezer é superficie fina.
    * Freezer não congela outro objetos dentro dessa class como por exemplo o uso de new Date().
    * */
    Object.freeze(this);
  }

  /*
  * Todas as funções dentro de class chamamos de método
  * Quando criarmos função que devolve valores podemos user o get ou set para definir valor.
  * 
  * */
  get volume() 
  {
    return this._quantidade * this._valor;
  }

  get data()
  {
    // Retornando uma cópia da data para evitar a manipulação de dada por ações externas
    return new Date( this._data.getTime() );
  }
  get quantidade()
  {
    return this._quantidade;
  }
  get valor()
  {
    return this._valor;
  }
  
  /*
  * No curso entendi que a classe pode ser facilmente manipulada. Não tem método privado como no php.
  * Então temos que fazer programação defenciva.
  * 
  * Uma coisa que podemos fazer nesse caso é uma convenção. 
  * Se na class esse valor não pode ser auterado então definimos antes do nome um undeline.
  * \_Exemp. _funcao _variavel
  * */
}