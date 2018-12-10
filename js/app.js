$(function() {
  $(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();
    var menu = $(".header__menu");
    if(scrollTop > 80){
      menu.addClass("fixed");
    }
    else{
      menu.removeClass("fixed");
    }
  })

  $('a[href^="#"]').on('click', function(event) {
      var target = $( $(this).attr('href') );
      if( target ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top - 50
          }, 1000);
      }

  });

var images = ["./images/fryz1.png","./images/fryz2.png","./images/fryz3.png","./images/fryz4.png","./images/fryz5.png","./images/fryz6.png","./images/fryz7.png","./images/fryz8.png","./images/fryz9.png","./images/fryz10.png"];
var gallery = $('.gallery .container .row');
var body = $("body");
class Images_item{
  constructor(array){
    this._array = array;
  }
  generateItem(){
    for(var i=0; i<this._array.length; i++){
      var gallery_item = $('<div>',{
        class:"col-1 gallery__item gallery__item" + [i+1],
        src:this._array[i],
      })
gallery.append(gallery_item);
    }
  }
}

var images_generator = new Images_item(images);
images_generator.generateItem();

if($(window).width() > 700){
  $(".gallery__item").on("mouseenter",function(){
    $(".gallery__item").css("width","6%");
    $(".gallery_item").css("transition-duration","1s");
    $(this).css("width","26%");
    $(this).css("transition-duration","1s");
  })

  $(".gallery__item").on("mouseleave",function(){
    $(".gallery__item").css("width","8%");
    $(".gallery__item").css("transition-duration","1s");
  })
}else{
  $(".gallery__item").on("touchstart",function(){
      $(".gallery_item").css("transition-duration","1s");
      $(this).css("height","200px");
      $(this).css("transition-duration","1s");
  })
  $(".gallery__item").on("touchend",function(){
    $(".gallery__item").css("width","80%");
      $(".gallery__item").css("transition-duration","1s");
      $(this).css("height","50px");
  })
}


var next = $("<div>",{
  class:"next hidden",
  html:">",
})
var prev = $("<div>",{
  class:"prev hidden",
  html:"<",
})
var close = $("<div>",{
  class:"close",
  html:"X",
})
$(".gallery").append(prev);
$(".gallery").append(next);
$(".gallery").append(close);
close.css("display","none");
var clicks = 0;
var list = $(".gallery__item");

for (i = 0; i < list.length; i++) {

  list[i].addEventListener("click", function() {
    var picture = $(this).index();
    var list = $('.gallery__item');
    var all_gallery = $(".gallery");
    all_gallery.addClass("slider");
    var next = $('.next');
    var prev = $('.prev');
    var close = $('.close');
    next.removeClass("hidden");
    prev.removeClass("hidden");
    close.css("display","inline-block");
    prev.addClass("fullScreen2");
    next.addClass("fullScreen3");
    close.addClass("fullScreen4");
    list.css("height","625px");
    list.css("width","100%");
    $(".gallery__item").on("mouseenter",function(){
      $(".gallery__item").css("width","100%");
    })
    $(".gallery__item").on("mouseleave",function(){
      $(".gallery__item").css("width","100%");
    })
    list[picture].classList.add("visible"); // dodowanie klasy do elementu
    prev.on("click", function() {
  list.css("width","100%");
      list[picture].classList.remove("visible");
      picture--;
      if (picture < 0) {
        picture = 0;
      }
      list[picture].classList.add("visible");
    })
    next.on("click", function() {
        list.css("width","100%");
      list[picture].classList.remove("visible");
      picture++;
      if (picture >= list.length) {
        picture = list.length - 1;
      }
      list[picture].classList.add("visible");
    });
    close.on("click", function() {
      next.addClass("hidden");
      prev.addClass("hidden");
      close.css("display","none");
      prev.removeClass("fullScreen2");
      next.removeClass("fullScreen3");
      close.removeClass("fullScreen4");
      all_gallery.removeClass("slider");
      location.reload();
    });

  })
}

var submit = $(".submit");
var emailElem = $(".email");
var nameElem = $(".name");
var topic = $(".topic");
var massage = $(".massage");
var errorText = $(".error__message");
var succes__message= $(".succes__message");
var errorText2 = $(".error__message2");
var errorText3 = $(".error__message3");
var errorText4 = $(".error__message4");
submit.on('click',function(e){
    e.preventDefault();

    if(emailElem.val().indexOf('@') == -1){
        emailElem.addClass('box-error');
        errorText.html('Email musi posiadać znak "@"');
    }else{
        emailElem.removeClass('box-error');
        errorText.html('');
    }


    if( nameElem.val().trim().length <= 6 ){
        nameElem.addClass('box-error');
        errorText2.html('Twoje imię jest za krótkie');
    }else{
        nameElem.removeClass('box-error');
        errorText2.html('');
    }
    if( topic.val().trim().length <= 6 ){
        topic.addClass('box-error');
        errorText3.html('Temat jest za krótki');
    }else{
        topic.removeClass('box-error');
        errorText3.html('');
    }
    if( massage.val().trim().length <= 6 ){
        massage.addClass('box-error');
        errorText4.html('Temat jest za krótki');
    }else{
        massage.removeClass('box-error');
        errorText4.html('');
    }

    if(emailElem.hasClass("box-error") || nameElem.hasClass("box-error")||topic.hasClass("box-error")||massage.hasClass("box-error")){
    }
    else{
      succes__message.html("wysłano poprawnie");
    }
})

var nav = $('.header__menu');
var menu = $('.header__menu__button');

var mobilePX= 820;
var mobile = window.matchMedia('screen and (max-width: ' + mobilePX + "px)");
mobile.addListener(function(mobile){
  if(mobile.matches){
    nav.css("display","none");
    menu.css('display',"inline-block");
  }else{
    nav.css('display',"inline-block");
    menu.css('display',"none");
  }
})
var menu_click_number = 0;
menu.on("click",function(){
  if(menu_click_number<1){
  nav.css('display',"inline-block");
  menu_click_number++;
}
else{
  nav.css('display',"none");
  menu_click_number--;
}
})

})
