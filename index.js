import jump from './node_modules/jump.js/dist/jump.module.js';

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
    var educationPage = document.querySelector('.education');
    var skillsPage = document.querySelector('.skills');
    var experiencePage = document.querySelector('.work-experience');
    var hobbiesPage = document.querySelector('.hobbies');
    var favoritePage = document.querySelector('.my-favorite');
    var body = document.querySelector('body');
    var sections = document.querySelectorAll('section');
    var toggleShare = document.querySelector('.toggle-share');
    var share = document.querySelector('.share');
    var socialLinks = document.querySelector('.social-links');
    var shareToggle = document.querySelector('.toggle-share');
    var about = document.querySelector('.about-me-link');
    var education = document.querySelector('.education-link');
    var skills = document.querySelector('.skills-link');
    var experience = document.querySelector('.work-experience-link');
    var hobbies = document.querySelector('.hobbies-link');
    var favorite = document.querySelector('.my-favorite-link');

    var colors = {
      'landing-page': '#300407',
      'about-me': '#4A0609', 
      'education': '#1C0608', 
      'skills': '#5C3D27', 
      'work-experience': '#5E4723', 
      'hobbies': '#581C13', 
      'my-favorite': '#1C1412', 
    };

    var shareToggleColors = {
      'landing-page': '#51293B',
      'about-me': '#6B384B', 
      'education': '#633650', 
      'skills': '#4F2D4A', 
      'work-experience': '#593D59', 
      'hobbies': '#5E405A',
      'my-favorite': '#7A5E7A', 
    };

    var shareColors = {
      'landing-page': '#997B66',
      'about-me': '#D08C60', 
      'education': '#c39e81', 
      'skills': '#95765a', 
      'work-experience': '#D9AE94', 
      'hobbies': '#9B9B7A', 
      'my-favorite': '#797D62', 
    };

    var options = {
      threshold: 0.9
    };

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

    sections.forEach(section => {
      observer.observe(section);
    })

    window.addEventListener('resize', () => {
      if (window.innerWidth > 775) {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        body.style.overflowY = 'scroll';
      }
    });

    if (!nav.classList.contains('nav-active')) {
      navItems.forEach((item, index) => {
        item.style.animation = `navItemFadeIn 2s ease forwards ${(1 - (index / 7)) + 0.2}s`
      })
    }


    favoritePage.addEventListener('click', () => {
      if (nav.classList.contains('nav-active')) {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        body.style.overflowY = 'scroll';
      }
    });

    aboutPage.addEventListener('click', () => {
      if (nav.classList.contains('nav-active')) {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        body.style.overflowY = 'scroll';
      }
    });

    educationPage.addEventListener('click', () => {
      if (nav.classList.contains('nav-active')) {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        body.style.overflowY = 'scroll';
      }
    });

    skillsPage.addEventListener('click', () => {
      if (nav.classList.contains('nav-active')) {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        body.style.overflowY = 'scroll';
      }
    });

    experiencePage.addEventListener('click', () => {
      if (nav.classList.contains('nav-active')) {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        body.style.overflowY = 'scroll';
      }
    });

    hobbiesPage.addEventListener('click', () => {
      if (nav.classList.contains('nav-active')) {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        body.style.overflowY = 'scroll';
      }
    });

    landingPage.addEventListener('click', () => {
      if (nav.classList.contains('nav-active')) {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        body.style.overflowY = 'scroll';
      }
    });

    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');

      if (nav.classList.contains('nav-active')) {
        body.style.overflowY = 'hidden';
      }
      else {
        body.style.overflowY = 'scroll';
      }

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

    toggleShare.addEventListener('click', () => {
      share.classList.toggle('active');
      socialLinks.classList.toggle('active');
    });

    about.addEventListener('click', () => {
      jump('.about-me', {
        duration: 1000
      })
    })
    education.addEventListener('click', () => {
      jump('.education', {
        duration: 2000,
        // callback: () => {}
      })
    })
    skills.addEventListener('click', () => {
      jump('.skills', {
        duration: 2000
      })
    })
    experience.addEventListener('click', () => {
      jump('.work-experience', {
        duration: 2000
      })
    })
    hobbies.addEventListener('click', () => {
      jump('.hobbies', {
        duration: 2000
      })
    })
    favorite.addEventListener('click', () => {
      jump('.my-favorite', {
        duration: 2000
      })
    })

  }, 3000);
});