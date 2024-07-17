$(function(){
	$('#start').click(function(){
        var altura = $('#altura').val();
        var peso = $('#kilos').val();
        var imc = (peso)/(altura*altura);
        console.log(imc);
    });
})