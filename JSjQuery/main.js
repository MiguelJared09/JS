$(function(){
    $("#plus").hide();
    $("#link-mas").click(function(evento){
        $("#plus").fadeIn();
        $("#link-mas").hide();
        evento.preventDefault();
    });
    $("#link-menos").click(function(evento){
        $("#plus").fadeOut();
        $("#link-mas").fadeIn();
        evento.preventDefault();
    });


    $("#img").mouseover(function(evento){
        var src = ($('#img').attr('src') === 'JS.png')
            ? 'jquery.png'
            : 'JS.png';
        $('#img').attr('src', src);
    });


    $("#btn-quitar").click(function(evento){
        $('#full').remove();
    });

    
    $("#correo").focus(function(evento){
        $('#correo').css('background-color','#F8FFD6')
    });
    $("#correo").blur(function(evento){
        $('#correo').css('background-color','')
    });
    $("#pregunta").focus(function(evento){
        $('#pregunta').css('background-color','#F8FFD6')
    });
    $("#pregunta").blur(function(evento){
        $('#pregunta').css('background-color','')
    });

});