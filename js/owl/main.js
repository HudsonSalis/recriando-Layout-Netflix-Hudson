

//CODIGO PARA MOSTRAR OPCOES ->

var botao = $('.maisInfo');
var fechar = $('.fechar');
var tipos = $('#tipos');
var planos = $('#planos');
var btnEnviarDados = $('#btn-enviar');
var btnGerarPdf = $('#baixarPDF');




tipos.on('click',function(e){
    window.scrollTo(0,300);
});


planos.on('click',function(e){
    window.scrollTo(0, 550);
});

 botao.on('click', function(e){
    $('.opcoes-Sueco').show();
    $('.all').show();
    e.stopPropagation();
    document.getElementById('all').style.backgroundColor="rgba(5,4,4,0.8)";
     
});

fechar.on('click',function(e){
    $('.opcoes-Sueco').hide();
    $('.all').hide();
});

function botaoComprar(){
    swal({
        title:'SISTEMA DE COMPRA INDISPONÍVEL NO MOMENTO, NOS MANDE UM EMAIL PARA MAIS DETALHES.',
        icon:'error'    
     });
}


$('.btn-comprar').on('click',function(){
    botaoComprar();

});





//CARROSEL ->
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:1,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});




btnGerarPdf.on('click',function() {

    var nome = $('#nome').val();
    var telefoneCelular = $('#telefoneCelular').val();
    var email = $('#email').val();
    var select = document.getElementById('massagem-escolher');
    var select2 = document.getElementById('massagem-duracao');
	var massagemEscolhida = select.options[select.selectedIndex].text;
    var tempo = select2.options[select2.selectedIndex].text;

    var dados = [nome,telefoneCelular,email,massagemEscolhida,tempo]

        var pdf = new jsPDF('p', 'pt', 'letter');

        pdf.canvas.height = 72 * 11;
        pdf.canvas.width = 72 * 8.5;
    
        
        pdf.setFontSize(20)
        pdf.text( 230, 25, 'SEUS DADOS' );
        pdf.text( 230, 100, dados[0] );
        pdf.text(220, 110,'_________________');
        pdf.text( 230, 140, dados[1] );
        pdf.text(220, 150,'_________________');
        pdf.text( 230, 180, dados[2] );
        pdf.text(220, 190,'_________________');
        pdf.text( 230, 220, dados[3] );
        pdf.text(220, 230,'_________________');
        pdf.text( 230, 260, dados[4] );
        pdf.text(220, 270,'_________________');
        //pdf.addImage(imgData,'JPEG',15,40,100,160);
        pdf.save('protocolo.pdf');
    
});

btnEnviarDados.on('click',function(){
    swal({
       title:'DADOS ENVIADOS COM SUCESSO, PARA GARANTIR, IMPRIMA SEU PROTOCOLO',
       icon:'success'    
    });
});

