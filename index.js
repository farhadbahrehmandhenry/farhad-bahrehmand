$(window).load(function() {
  setTimeout(() => {
    $("#logo").fadeOut("slow");
    $(".main-container").css("display", "flex");

    const [red, green, blue] = [69, 111, 225];
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
      var y = 1 + (window.scrollY || window.pageYOffset) / 150;
      y = y < 1 ? 1 : y;

      var color = '#300407';

      if (y >= 7 && y < 13) color = '#4A0609';
      else if (y >= 13 && y < 19.5) color = '#1C0608';
      else if (y >= 19.5 && y < 26) color = '#5C3D27';
      else if (y >= 26 && y < 32) color = '#5E4723';
      else if (y >= 32 && y < 38) color = '#581C13';
      else if (y >= 38 && y < 44.22) color = '#1C1412';
      else if (y >= 44.22) color = '#301E10';

      header.style.backgroundColor = color;
    });

    var burger = document.querySelector('.burger');
    var navItems = document.querySelectorAll('.nav-items li');
    var nav = document.querySelector('.nav-items');

    navItems.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = '';
      }
      else {
        item.style.animation = `navItemFadeIn 2s ease forwards ${(1 - (index / 7)) + 0.2}s`
      }
    })

    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');

      navItems.forEach((item, index) => {
        if (item.style.animation) {
          item.style.animation = '';
        }
        else {
          item.style.animation = `navItemFadeIn 2s ease forwards ${(index / 7) + 0.5}s`
        }
      })

      burger.classList.toggle('toggle');
    });

    var navLogo = document.querySelector('#nav-logo');

    navLogo.addEventListener('click', () => window.location.reload());


    var hi = document.querySelector('.hi');
    var name = document.querySelector('.name');
    var info = document.querySelector('.info');

    hi.style.animation = `landingPageHi 2s ease forwards 0.3`
    name.style.animation = `landingPageName 2s ease forwards 0.6`
    info.style.animation = `landingPageInfo 2s ease forwards 0.9`


  }, 3000);
});