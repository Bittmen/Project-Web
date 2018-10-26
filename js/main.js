$(document).ready(function(){

   $('.bxslider').bxSlider({
        mode: 'fade',
        captions: false,
        responsive: true,
        slideWidth: 1200
   });
    
   var posts = [

    {
        title : 'Noticia 1',
        fecha: 'Publicado el dia '+moment().day()+' de '+moment().format('MMMM')+' de '+moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title : 'Noticia 2',
        fecha: 'Publicado el dia '+moment().day()+' de '+moment().format('MMMM')+' de '+moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title : 'Noticia 3',
        fecha: 'Publicado el dia '+moment().day()+' de '+moment().format('MMMM')+' de '+moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title : 'Noticia 4',
        fecha: 'Publicado el dia '+moment().day()+' de '+moment().format('MMMM')+' de '+moment().format('YYYY'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }

   ];

   posts.forEach((item, index) => {
        var post =  `
        
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.fecha}</span>
                <p>
                    ${item.content}    
                </p>
                <a href="#" class="button-plus">Leer más</a>
            </article>
        
        `;

        $("#posts").append(post);
   });

   //Selecciona el tema
   var tema = $("#theme");

   $("#to-green").click(function(){
       console.log("OP");
        tema.attr("href","css/green.css");
   });

   $("#to-blue").on('click', function(){
    console.log("OP");
        tema.attr("href","css/blue.css");
    });

    $("#to-red").on('click', function(){
        console.log("OP");
        tema.attr("href","css/red.css");
    });

    //Subir
    $(".subir").click(function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop:0,
        }, 500);
    });

    //Login
    $("#login form").submit(function(){
        var name = $("#form-name").val();
        localStorage.setItem("form-name",name);
    });

    var name = localStorage.getItem("form-name");
  
    if(name != null || name != "undefined"){
        $("#namae").html("Bienvenido "+name);
        $("#login").hide();
    }

    //Logout
    $("#logout").click(function(){
        localStorage.removeItem("form-name");
        $("#namae").hide();
        $("#login").show();
    });

});