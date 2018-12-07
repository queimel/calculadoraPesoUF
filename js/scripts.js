(function () {

    var valorConvertir, convert1, convert2, resultado, unidadResultado, btnConsultar;
  
// guardo btn consultar en variable
  btnConsultar = document.getElementById("consultar");
// al hacer click valido campos
  btnConsultar.addEventListener("click", function(){
    valorConvertir = document.getElementById("cantidad");

    if(valorConvertir.value === ""){

    }else{


        if( Number.isInteger(valorConvertir.value)){
            if(valorConvertir.value > 0){


                
            }else{
                //
            } 
        }else{
            //
        }
       
    }

  });

  // validacion

  //validacion ok: guardar valores campos en variables

  // calculo que corresponda

  // mostrar el valor que corresponda

})();