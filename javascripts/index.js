import jump from '../node_modules/jump.js/dist/jump.module.js';

$(window).load(function() {
  setTimeout(() => {
    $("#logo").fadeOut("slow");
    $(".main-container").css("display", "flex");

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

        if (socialLinks.classList.contains('active')) {
          share.classList.remove('active');
          socialLinks.classList.remove('active');
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
      socialLinks.classList.toggle('active');
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
        duration: 1500,
        elasticity: 600,
        delay: (el, i) => 45 * (i+1)
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

    clipboard.on('error', function(e) {
        console.log(e);
    });
    //>
  }, 3000);
});