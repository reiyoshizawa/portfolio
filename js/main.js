// Rei Yoshizawa, Date:

// ScrollMagic
$(function () {
  $(document).ready(function(){

    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // loop through each .worksItem element
    $(".worksItem, .aboutBg, .travelPhotos").each(function(){

      // build a scene
      var ourScene = new ScrollMagic.Scene({
          triggerElement: this,
          // duration: 90%,
          triggerHook: 0.7
      })
      .setClassToggle(this, "effect") // add class to project01
      // .addIndicators({
      //   name: "fade scene",
      //   colorTrigger: "black",
      //   indent: 200,
      //   colorStart: "#000",
      //   colorEnd: "pink"
      // }) // this requires a plugin
      .addTo(controller);

    });

  });

  // smooth scroll
  $(function(){
     // #で始まるリンクをクリックしたら実行されます
     $('a[href^="#"]').click(function() {
       // スクロールの速度
       var speed = 400; // ミリ秒で記述
       var href= $(this).attr("href");
       var target = $(href == "#" || href == "" ? 'html' : href);
       var position = target.offset().top;
       $('body,html').animate({scrollTop:position}, speed, 'swing');
       return false;
     });
   });


});
