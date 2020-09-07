$(window).load(function() {
  setTimeout(() => {
    $("#logo").fadeOut("slow");
    $(".main-container").css("display", "flex");

    const [red, green, blue] = [69, 111, 225];
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
      let y = 1 + (window.scrollY || window.pageYOffset) / 150;
      y = y < 1 ? 1 : y;
      const [r, g, b] = [red/y, green/y, blue/y].map(Math.round);
      var color = '#300407';

      if (y >= 7 && y < 13) color = '#4A0609';
      else if (y >= 13 && y < 19.5) color = '#1C0608';
      else if (y >= 19.5 && y < 26) color = '#5C3D27';
      else if (y >= 26 && y < 32) color = '#5E4723';
      else if (y >= 32 && y < 38) color = '#581C13';
      else if (y >= 38 && y < 44.22) color = '#1C1412';
      else if (y >= 44.22) color = '#301E10';

      header.style.backgroundColor = color;
    })

  }, 3000);
});

