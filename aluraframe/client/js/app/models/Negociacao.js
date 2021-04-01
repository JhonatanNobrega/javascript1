
class Negociacao {

  /*
  * No contrutor que definimos as propriedades.
  * Toda class com contrutor só pode chamar com new Negociacao.
  * this sempre aponta para a execução do momento ou seja essa class.
  * */
  constructor( quantidade = 1, valor = 0.00 )
  {
    // Definindo as propriedades de Negociacao
    this.#data = new Date();
    this.#quantidade = quantidade;
    this.#valor = valor;

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
    return this.#quantidade * this.#valor;
  }

  get data()
  {
    // Retornando uma cópia da data para evitar a manipulação de dada por ações externas
    return new Date( this.#data.getTime() );
  }
  get quantidade()
  {
    return this.#quantidade;
  }
  get valor()
  {
    return this.#valor;
  }
  
  /*
  * No curso entendi que a classe pode ser facilmente manipulada. Não tem método privado como no php.
  * Então temos que fazer programação defenciva.
  * 
  * Uma coisa que podemos fazer nesse caso é uma convenção. 
  * Se na class esse valor não pode ser auterado então definimos antes do nome um undeline. Exemp. _funcao _variavel
  * \_ na nova convensao agora é com #. Exemp. #funcao #variavel;
  * */
}