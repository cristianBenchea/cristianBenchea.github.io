
$(document).ready(function(){
  //portfolio Links
  function goTo(div, link){
    div.click(function(e){
      e.preventDefault();
      window.open(link, '_blank');
    });
  }
  const ids = [$("#toDoList"), $("#jsCalculator"),$("#pomodoroClock"),$("#quoteMachine"),$("#tributePage"),$("#pixelArtMaker"),$("#localWeather"),$("#portfolio1"),$("#twitchTv"),$("#wikiViewer"),$("#jsClock"),$("#socialBtnPrj"),$("#ticTacToe"),$("#simonGame")];
  const links = ["https://cristianbenchea.github.io/toDoList/", "https://codepen.io/cristianbenchea781/full/YraGbg/", "https://codepen.io/cristianbenchea781/full/jGJweR/", "https://codepen.io/cristianbenchea781/full/KXwrGG/", "https://codepen.io/cristianbenchea781/full/MvrOOz/", "https://codepen.io/cristianbenchea781/full/YYvVjL/", "https://codepen.io/cristianbenchea781/full/bodmxV/", "https://codepen.io/cristianbenchea781/full/PKRzEN/", "https://codepen.io/cristianbenchea781/full/EwgEvg/", "https://codepen.io/cristianbenchea781/full/QqNEev/", "https://codepen.io/cristianbenchea781/full/JrOLwL/", "https://codepen.io/cristianbenchea781/full/rJJQKL/", "https://codepen.io/cristianbenchea781/full/eVvZYe/", "https://codepen.io/cristianbenchea781/full/oEyKOE/"];
  for(var i = 0; i < ids.length; i++){
    goTo(ids[i], links[i]);
  }
  
  //About Me toggle
  function showAbout(menu,description){
    menu.click(function(){
      description.toggle(function(){
        $(this).animate({}, 100);
      }, function(){
        menu.toggleClass('openedAbout');
      });
    });
  }
  
  //Navbar changes background when scrolled
  $(document).scroll(function(e){
    e.preventDefault();
    $(".nav, .mobileNavMenu, .mobileNav").toggleClass('scrolled', $(document).scrollTop() >= 50);
  });

  //mobile nav hamburger menu toggle
  $(".mobileNav i").click(function(){
    $(".mobileNavMenu").toggle();
  });

  //smooth scroll nav anchor links
  $('.nav, .mobileNav').on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - (window.innerHeight * 0.1)
    }, 500);
    if($('.mobileNav').click()){
      $(".mobileNavMenu").toggle();
    }
  });

  showAbout($('#education'), $('#educationTxt'));
  showAbout($('#basicInfo'), $('#basicInfoTxt'));
  showAbout($('#languages'), $('#languagesTxt'));
  showAbout($('#digitalComp'), $('#digitalCompTxt'));
  showAbout($('#webTech'), $('#webTechTxt'));
  showAbout($('#otherPrj'), $('#otherPrjTxt'));
  showAbout($('#email'), $("#emailTxt"));
  var date = (new Date()).getFullYear();
  $("footer h3").append(date);
});