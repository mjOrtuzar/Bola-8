$(document).ready(function () {
    //your code here
    var bienvenida = $("#welcome");
    bienvenida.append("<p class='cosita '>Dime tu pregunta</p>");
    //funcion del text area:
    $('#textarea1').val();
    M.textareaAutoResize($('#textarea1'));
    //funcion enviar pregunta
    var enviar = $("#send");
    var visto= "<img class='visto'src='assets/DIR/css/assets/twitter-incopora-doble-check-azul-810x501.png' alt='' srcset=''>"
    //respuestas cerradas
    var answers = new Array('si','En mi opinon,sí','Probablemente','Debes confiar en ello','no','claro que no!','Pregunta en otro momento','será mejor que no te lo diga ahora', 'a Dios no le gusta eso','a Dios le gusta','preguntale a tu gato/perro si es que tienes','no tienes nada mejor que hacer?','por su puesto que si','No cuentes con ello','Mis fuentes me dicen que no','deja de joder',visto,);
    console.log(answers)
    //funcion que  envia y limpia el input clickeando el boton.
    enviar.click(function(){
        var texto = $("#textarea1").val();

        if(texto.indexOf('?')==-1){
            alert("por favor ingresa una pregunta. Recuerda que es de respuesta cerrada (si/no)")
        }else if(texto.indexOf('?')){ // si lleva el signo de pregunta , la pregunta pasara.
            //se oculta la seccion 'answer' al momento de hacer click.
            //se oculta el titulo.
            $("#title").hide();
            $("#question").hide();
            //se agregan elementos al div vacio con clase pregunta.
            $(".pregunta").append('<p>'+ texto+ '</p>');
            var aleatorio = Math.floor(Math.random()*16)
            $(".respuestas").append('<p>'+ answers[aleatorio] +'</p>'); 
            enviar.attr('disabled',true);
            $(".respuestas").fadeTo(4000,10);
            //se agrega boton que reinicia el coso
            $("#reseteo").append("<button id='borrado' class='btn waves-effect grey darken-4' type='submit' name='action'>"+ '¿Deseas otra respuesta?'+"</button>");
            $("#borrado").fadeTo(4000,10);
            $("#borrado").click(function(){
                $(".respuestas").empty();
                $(".pregunta").empty();
                $("#borrado").remove();
                //se vuelve a mostrar la seccion que se oculto
                $("#title").show();
                $("#question").show();
                enviar.attr('disabled',false);
            });
            
        };
        //limpia el input
        $("#textarea1").val(''); 
    });

    //funcion que  envia y limpia el input con la tecla enter.
    $("#textarea1").keypress(function(e){
        if(e.which==13) {
            //compureba que se envio el mensaje console.log($("#textarea1").val());
            var texto = $("#textarea1").val();
            //limpia el input
            $("#textarea1").val('');

            if(texto.indexOf('?')==-1){
                alert('por favor ingresa una pregunta. Recuerda que es de respuesta cerrada (si/no)');
            }else if(texto.indexOf('?')){
                //se oculta la seccion Question
                //se oculta el titulo;
                $("#title").hide();
                $("#question").hide();
                $(".pregunta").append("<p>"+ texto+ "</p>");
                var aleatorio= Math.floor(Math.random()*16);
                $(".respuestas").append('<p>'+answers[aleatorio]+'</p>');
                $(".respuestas").fadeTo(4000,10);
                enviar.attr('disabled',true);
                //añade el boton que reinicia el coso con un click
                $("#reseteo").append("<button id='borrado' class='btn waves-effect grey darken-4' type='submit' name='action'>"+'¿Deseas otra respuesta?'+"</button>");
                $("#borrado").fadeTo(4000,10);
                $("#borrado").click(function() {
                    $(".respuestas").empty();
                    $(".pregunta").empty();
                    $("#borrado").remove();
                    //se muestra la seccion question
                    $("#title").show();
                    $("#question").show();
                    enviar.attr('disabled',false);
                });
                
            };
        };
    });
    
    
      
});
  
