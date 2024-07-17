$(function(){
	$('#start').click(function(){
        var altura = $('#altura').val();
        var peso = $('#kilos').val();        
        if(validarValores(altura) && validarValores(peso)){    
            var imc = (peso)/(altura*altura);
            var pesoIdeal1 = 18.5*(altura*altura); 
            var pesoIdeal2 = 24.9*(altura*altura);
            imc = imc.toFixed(1);
            pesoIdeal1 = pesoIdeal1.toFixed(1); 
            pesoIdeal2 = pesoIdeal2.toFixed(1);
            if(imc < 18.5){
                $('#parte-oculta').css('color','red'); //abaixo do peso
                $('#resultado').html(`IMC: ${imc}`);
                $('#descricao').html('Você está abaixo do Peso. <br/> Peso ideal está entre: '+pesoIdeal1+' - '+pesoIdeal2);
                $('#descricao').css('width','370px').css('height','100%');
            }else if(imc >= 18.5 && imc <= 24.9){
                $('#parte-oculta').css('color','green'); 
                $('#resultado').html(`IMC: ${imc}`); //peso saudável 
                $('#descricao').html('Você está com peso SAUDÁVEL');
                $('#descricao').css('width','370px').css('height','100%');
            }else if(imc >= 25.0 && imc <= 30.0){
                $('#parte-oculta').css('color','red');
                $('#resultado').html(`IMC: ${imc}`);
                $('#descricao').html('Você está ACIMA do peso. <br/> Peso ideal está entre: '+pesoIdeal1+' - '+pesoIdeal2);
                $('#descricao').css('width','370px').css('height','100%');
                //sobrepeso
            }else if(imc >= 30.1 && imc <= 39.9){
                $('#parte-oculta').css('color','red');
                $('#resultado').html(`IMC: ${imc}`);
                $('#descricao').html('Você está ACIMA do peso. <br/> Peso ideal está entre: '+pesoIdeal1+' - '+pesoIdeal2);
                $('#descricao').css('width','370px').css('height','100%');
                //obeso
            }else if(imc >= 40){
                $('#parte-oculta').css('color','red');
                $('#resultado').html(`IMC: ${imc}`);
                $('#descricao').html('Você está ACIMA do peso. <br/> Peso ideal está entre: '+pesoIdeal1+' - '+pesoIdeal2);
                $('#descricao').css('width','370px').css('height','100%');
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
