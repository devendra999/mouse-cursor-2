$(document).ready(function(){
     
 $('document').ready(function(){
            $('.move-bg').hide();
            $('.container').mousemove(function (e) {
                console.log(e.pageX + ", " + e.pageY);
                $('.move-bg').css({left: e.pageX - 300,top: e.pageY - 300}).show();
            });
            $('.container').mouseover(function(e){
                $('.move-bg').css({left: e.pageX - 300,top: e.pageY - 300}).show();
            });
            $('.container').mouseout(function () {
                $('.move-bg').hide();
            });
        });



}); // END READY

$(window).on('load', function(){
    
}); // END LOAD

$(window).on('resize', function(){
    equalheight('.equal-height');
}); // END RESIZE

$(window).on('scroll', function(){

    // ** STICKY OR FIXED JS
    // if ($(this).scrollTop() > 50){  
    //     $('.header').addClass("sticky");
    // }
    // else{
    //     $('.header').removeClass("sticky");
    // }

}); // END SCROLL


// ** EQUAL HEIGHT JS
equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 jQuery(container).each(function() {

   $el = jQuery(this);
   jQuery($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}
// ** END EQUAL HEIGHT JS