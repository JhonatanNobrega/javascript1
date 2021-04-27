  
  function mascara_numero(item, qtD, sepD, sepM){
 
    // Capitura o valor do campo
    v = item.value;
    
    // Limpa campos que não seja numero
    v=v.replace(/\D/g,"")
    
    // Coloca '.' no local de milhao
    v=v.replace(/(\d{1})(\d{13})$/,"$1.$2");
    
    // Coloca '.' no local de mil
    v=v.replace(/(\d{1})(\d{10})$/,"$1.$2");
    
    // Coloca ',' após 7 casas decimais 
    var rpDecimal = new RegExp("/(\d{1})(\d{1," + qtD + "})$/", "g");
    v=v.replace(rpDecimal,'$1,$2');
    
    // Aplica a mascara no campo
    item.value = v;
   }
   
     function valida_numero(e){
       // Array com keycod aceitos
       let padraoKeyCod = [ 48, 49, 50, 51, 52, 53, 54, 55, 56, 57 			];
   
       // Verifica se é do padrao aceito
       if(padraoKeyCod.indexOf(e.keyCode) === -1){
         return false;
       }
       return true;
     }