$(document).ready(() => {
  // toggle a class to navbar on scrolling
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > 80);
  });

  let menu_toggler = $(".fa-solid")
  menu_toggler.click(() => {
    if(menu_toggler.hasClass("fa-bars")){
      menu_toggler.toggleClass("fa-bars fa-x");
      if($(".fixed-top").hasClass("scrolled")){
        return
      } else {
        $(".fixed-top").addClass("scrolled")
      }
    } else {
      menu_toggler.toggleClass("fa-x fa-bars");
      if($(".fixed-top").hasClass("scrolled")){
        return
      }
    }
  });

  // Change main img depending on Screen size
  let gallery = $(".gallery");
    for(let i = 0; i < gallery.length; i++){
      let text = gallery.eq(i).attr("src")
      let mobile_text = `./assets/images/mobile/${text.slice(24)}`
      if($(window).width() > 992){
        return
      } else {
        gallery.eq(i).attr("src", mobile_text);
      }
    }

    // WOW Animation
  wow = new WOW(
    {
    boxClass:     'animate__animated',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  });
  wow.init();
});