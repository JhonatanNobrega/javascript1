function Requisicao()
{
    /*
        { MODELO DE RESPOSTA
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\n totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
    */

    // Criação do objeto de conexao em segundo plano
	var xhttp = new XMLHttpRequest();

    // Local que ira aparecer as informação da requisição
	var tabela_conteudo = document.getElementById("tabela-conteudo");

	xhttp.onreadystatechange = function() 
	{
        // Verifica se a requisição foi concluida e se o estatus é 200 OK
	    if (this.readyState == 4 && this.status == 200) 
	    {
            // Verifica se a resposta é diferente de null
			if(xhttp.responseText != null)
        	{
                // Passa a resposta para uma variavel    	
        		var resposta = xhttp.responseText;

                // Converte a string em objeto JSON para manipulação posterior
        		var dados = JSON.parse(resposta);
                
                // Vefifica se o objeto é diferente de null
	        	if(dados != null)
	        	{
                    // Pega a quantidade de item para fazer um loop for em cada item
	        		var quantidade_de_registros = dados.length;

                    // Executa de acordo a quantidade de items achados
		        	for (i = 0; i < quantidade_de_registros; i++) 
		        	{
						// criando nova linha
						var tr = document.createElement("tr");

						// criando coluna os
						var td_userId = document.createElement("td");

						// criando coluna cliente
						var td_id = document.createElement("td");

						// criando coluna técnico
						var td_title = document.createElement("td");

						// inserindo a linha no tbody da tabela
						tabela_conteudo.appendChild(tr);

						// inserindo as colunas na linha
						tr.appendChild(td_userId);
						tr.appendChild(td_id);
						tr.appendChild(td_title);

						// inserindo conteúdos nas colunas
						td_userId.textContent = dados[i].userId;
						td_id.textContent = dados[i].id;
						td_title.textContent = dados[i].title;

					}
				}
				else
				{
					// criando nova linha
					var tr = document.createElement("tr");

					// criando coluna cliente
					var td = document.createElement("td");

					// mesclando as colunas
					td.setAttribute('colspan', '3');

					// inserindo texto na coluna mesclada
					td.textContent = "Nenhuma OS cadastrada.";

					// inserindo linha na tebela
					tabela_conteudo.appendChild(tr);

					// inserindo coluna na linha
					tr.appendChild(td);
				}
			}
		}
	};

	xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send();
}