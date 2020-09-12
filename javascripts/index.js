import jump from '../node_modules/jump.js/dist/jump.module.js';

$(window).load(function() {
  setTimeout(() => {
    $("#logo").fadeOut("slow");
    // $(".main-container").css("display", "flex");
    var mainContainer = document.querySelector('.main-container');
    var logo = document.querySelector('#logo');
    var header = document.querySelector('.header');
    var burger = document.querySelector('.burger');
    var navItems = document.querySelectorAll('.nav-items li');
    var nav = document.querySelector('.nav-items');
    var landingPage = document.querySelector('.landing-page');
    var aboutPage = document.querySelector('.about-me');
    var skillsPage = document.querySelector('.skills');
    var experiencePage = document.querySelector('.work-experience');
    var hobbiesPage = document.querySelector('.hobbies');
    var body = document.querySelector('body');
    var sections = document.querySelectorAll('section');
    var toggleShare = document.querySelector('.toggle-share');
    var share = document.querySelector('.share');
    var socialLinks = document.querySelector('.social-links');
    var shareToggle = document.querySelector('.toggle-share');
    var about = document.querySelector('.about-me-link');
    var skills = document.querySelector('.skills-link');
    var experience = document.querySelector('.work-experience-link');
    var hobbies = document.querySelector('.hobbies-link');
    var navLogo = document.querySelector('#nav-logo');
    var email = document.querySelector('.email');
    var prevBtn = document.querySelector('.prev-drawing');
    var nextBtn = document.querySelector('.next-drawing');
    var dotDrawing = document.querySelectorAll('.dot-drawing')
    var prevBtnWood = document.querySelector('.prev-wood');
    var nextBtnWood = document.querySelector('.next-wood');
    var dotWood = document.querySelectorAll('.dot-wood')
    var pages = [aboutPage, skillsPage, experiencePage, hobbiesPage, landingPage];
    
    var links = [
      {className: '.about-me', anchor: about}, 
      {className: '.skills', anchor: skills},
      {className: '.work-experience', anchor: experience}, 
      {className: '.hobbies',  anchor: hobbies}, 
    ];

    var colors = {
      'landing-page': '#300407',
      'about-me': '#4A0609', 
      'skills': '#5C3D27', 
      'work-experience': '#5E4723', 
      'hobbies': '#581C13', 
    };

    var shareToggleColors = {
      'landing-page': '#51293B',
      'about-me': '#6B384B', 
      'skills': '#4F2D4A', 
      'work-experience': '#593D59', 
      'hobbies': '#5E405A',
    };

    var shareColors = {
      'landing-page': '#997B66',
      'about-me': '#D08C60', 
      'skills': '#95765a', 
      'work-experience': '#D9AE94', 
      'hobbies': '#9B9B7A', 
    };


    mainContainer.style.display = 'flex';
    // logo.fadeOut("slow");
    logo.style.opacity = 0;

    //< change the color of header and share dynamically
    var options = {threshold: 0.9};
    var observer = new IntersectionObserver(navCheck, options);

    function navCheck(entries) {
      entries.forEach(entry => {
        var className = entry.target.className;

        if (entry.isIntersecting) {
          header.style.backgroundColor = colors[className];
          shareToggle.style.backgroundColor = shareToggleColors[className];
          share.style.backgroundColor = shareColors[className];
        }
      });
    }

    sections.forEach(section => observer.observe(section));
    //>

    //< return to default mobile navbar  
    window.addEventListener('resize', () => {
      if (window.innerWidth > 775) {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        body.style.overflowY = 'scroll';
      }
    });
    //>

    //< navbar item animation
    if (!nav.classList.contains('nav-active')) {
      navItems.forEach((item, index) => item.style.animation = `navItemFadeIn 2s ease forwards ${(1 - (index / 7)) + 0.2}s`);
    }
    //>

    //< close navbar/shareLinks in mobile mode on page click
    pages.forEach(page => {
      page.addEventListener('click', () => {
        if (nav.classList.contains('nav-active')) {
          nav.classList.remove('nav-active');
          burger.classList.remove('toggle');
          body.style.overflowY = 'scroll';
        }

        if (socialLinks.classList.contains('active-share')) {
          share.classList.remove('active');
          socialLinks.classList.remove('active-share');
        }
      });
    });
    //>

    //< navbar menu click on mobile mode
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      body.style.overflowY = nav.classList.contains('nav-active') ? 'hidden' : 'scroll';
      burger.classList.toggle('toggle');
    });
    //>

    // click on logo
    navLogo.addEventListener('click', () => window.location.reload());

    //< share links toggle
    toggleShare.addEventListener('click', () => {
      share.classList.toggle('active');
      socialLinks.classList.toggle('active-share');
    });
    //>

    //< smooth scrolling to pages
    links.forEach(link => link.anchor.addEventListener('click', () => {
      jump(link.className, {duration: 1000, callback: () => headerAnimation({className: link.className})});
    }));
    //>

    //< calculate days of programming 
    var now = new Date(); 
    var startProgrammingDate = new Date('10/03/2018');
    var startDate = document.querySelector('.start-date');
    startDate.innerHTML = Math.ceil((now- startProgrammingDate) / (1000 * 3600 * 24));
    //>

    //< animation for each section heading
    function headerAnimation({className}) {
      var textWrapper = document.querySelector(`${className} .ml9 .letters`);
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      
      anime.timeline({loop: false})
      .add({
        targets: '.ml9 .letter',
        scale: [0, 1],
        duration: 2000,
        elasticity: 500,
        delay: (el, i) => 20 * (i+1)
      }).add({});
    }
    //>

    //< email copy to clipboard
    var clipboard = new ClipboardJS(email);

    clipboard.on('success', (e) => {
      var emailTooltiptext = document.querySelector('.email .tooltiptext');
      emailTooltiptext.style.display = 'block';
      emailTooltiptext.style.visibility = 'visible';

      setTimeout(() => {
        emailTooltiptext.style.display = 'none';
        emailTooltiptext.style.visibility = 'hidden';
      }, 1000);
    });

    clipboard.on('error', (e) => {
        console.log(e);
    });
    //>

    //< slideshow drawing

    prevBtn.addEventListener('click', () => {
      plusSlides(-1);
    });

    nextBtn.addEventListener('click', () => {
      plusSlides(1);
    });

    dotDrawing.forEach((dot, index) => {
      dot.addEventListener('click', () => currentSlideDrawing(index + 1));
    });

    var slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlideDrawing(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides-drawing");
      var dots = document.getElementsByClassName("dot-drawing");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }

    //>

    //< slideshow woodworking
    prevBtnWood.addEventListener('click', () => {
      plusSlidesWood(-1);
    });

    nextBtnWood.addEventListener('click', () => {
      plusSlidesWood(1);
    });

    dotWood.forEach((dot, index) => {
      dot.addEventListener('click', () => currentSlideWood(index + 1));
    });

    var slideIndex = 1;
    showSlidesWood(slideIndex);
    
    // Next/previous controls
    function plusSlidesWood(n) {
      showSlidesWood(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlideWood(n) {
      showSlidesWood(slideIndex = n);
    }
    
    function showSlidesWood(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides-wood");
      var dots = document.getElementsByClassName("dot-wood");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }
    //>

    //< player
    var song = document.querySelector('#song');
    var progressBar = document.querySelector('#progress-bar');
    var pPause = document.querySelector('#play-pause');
    var muteUnmute = document.querySelector('#mute-unmute');

    pPause.addEventListener('click', () => playPause());

    var playing = true;

    function playPause() {
      if (playing) {
        pPause.src = "./asset/music/pause.png"
        
        song.play();

        playing = false;
      } 
      else {
        pPause.src = "./asset/music/play.png"
        
        song.pause();

        playing = true;
      }
    }
    
    song.addEventListener('ended', () => {
    });
    
    function updateProgressValue() {
        progressBar.max = song.duration;
        progressBar.value = song.currentTime;
        document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(song.currentTime)));
        if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
            document.querySelector('.durationTime').innerHTML = "0:00";
        } else {
            document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(song.duration)));
        }
    };
    
    function formatTime(seconds) {
        let min = Math.floor((seconds / 60));
        let sec = Math.floor(seconds - (min * 60));
        if (sec < 10){ 
            sec  = `0${sec}`;
        };
        return `${min}:${sec}`;
    };

    setInterval(updateProgressValue, 500);
    
    progressBar.addEventListener('change', () => {
      song.currentTime = progressBar.value;
    });

    muteUnmute.addEventListener('click', () => {
      console.log(song)
      if (song.muted) {
        song.muted = false;
        muteUnmute.src = "./asset/music/unmute.png";
      }
      else if (!song.muted) {
        muteUnmute.src = "./asset/music/mute.png";
        song.muted = true;
      }
    });
    //>

  }, 2000);
});