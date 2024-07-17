$(function(){
	$('#start').click(function(){
        var altura = $('#altura').val();
        var peso = $('#kilos').val();
        if(validarValores(altura) && validarValores(peso)){    
            var imc = (peso)/(altura*altura);
            imc = imc.toFixed(1);
            if(imc < 18.5){
                $('#parte-oculta').css('color','darkred'); //abaixo do peso
                $('#resultado').html(`IMC: ${imc}`);
            }else if(imc >= 18.5 && imc <= 24.9){
                $('#parte-oculta').css('color','green'); 
                $('#resultado').html(`IMC: ${imc}`); //peso saudável 
            }else if(imc >= 25.0 && imc <= 30.0){
                $('#parte-oculta').css('color','darkred');
                $('#resultado').html(`IMC: ${imc}`);
                //sobrepeso
            }else if(imc >= 30.1 && imc <= 39.9){
                $('#parte-oculta').css('color','darkred');
                $('#resultado').html(`IMC: ${imc}`);
                //obeso
            }else if(imc >= 40){
                $('#parte-oculta').css('color','darkred');
                $('#resultado').html(`IMC: ${imc}`);
                //obeso mórbido; 
            }
        }else{
            alert("Apenas números inteiros e decimais com '.'");
        }    
    });

    function validarValores(valor){
        // Define uma expressão regular que corresponde a números inteiros ou decimais
        const regex = /^\d+(\.\d+)?$/;
        // Testa o valor passado contra a expressão regular
        return regex.test(valor);
    }
})