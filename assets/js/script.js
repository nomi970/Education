{
  $(document).ready(function () {
    $('#nav-toggler').on('click', function () {
      $(this).toggleClass('fa-times');
      $('.main-nav .nav-items').toggleClass('show');
    });

    $(window).on('scroll load', function () {

      if ($(window).scrollTop() > 0) {
        $('.main-nav').addClass('bgchange');
      } else {
        $('.main-nav').removeClass('bgchange');
      }
    });

  });
}
{
$(document).ready(function() {
    $('.nav-link').on('click', function() {
        $('.nav-link').removeClass('active'); // Remove active class from all nav links
        $(this).addClass('active'); // Add active class to the clicked nav link
    });
});
}

{
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
}
{
  document.addEventListener('scroll', () => {
    const topProgressBar = document.querySelector('.top-progress-bar');
    const paginaContainer = document.querySelector('.paginacontainer');
    const progressPath = document.querySelector('.progress-path');
    const pathLength = progressPath.getTotalLength();
    const scrollTop = document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollFraction = scrollTop / docHeight;
    const drawLength = pathLength * scrollFraction;
    
    // Show/hide top progress bar based on scroll position
    topProgressBar.style.opacity = scrollTop > 0 ? 1 : 0;
    
    // Show/hide circular progress bar based on scroll position
    if (scrollTop > 0) {
    paginaContainer.classList.add('active-progress');
    } else {
    paginaContainer.classList.remove('active-progress');
    }
    
    // Update circular progress indicator
    progressPath.style.strokeDasharray = pathLength;
    progressPath.style.strokeDashoffset = pathLength - drawLength;
    
    // Update width of .top-progress-bar::after based on scroll position
    topProgressBar.style.width = `${scrollFraction * 100}%`;
    });
    
    // Initial setup for circle
    document.addEventListener('DOMContentLoaded', () => {
    const progressPath = document.querySelector('.progress-path');
    const pathLength = progressPath.getTotalLength();
    
    progressPath.style.strokeDasharray = pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    });
    
    // Function to handle click event on progress-wrap
    document.querySelector('.progress-wrap').addEventListener('click', () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll to the top
    });
    });
    
}
{
  document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.about__count h2');
    const speed = 5000; // 5 seconds

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.parentElement.getAttribute('data-target');
                const suffix = counter.parentElement.getAttribute('data-suffix');
                const increment = target / (speed / 100);

                const updateCount = () => {
                    const current = +counter.innerText.replace(/[+%]/g, '');

                    if (current < target) {
                        counter.innerText = Math.ceil(current + increment) + (suffix || '');
                        setTimeout(updateCount, 100);
                    } else {
                        counter.innerText = target + (suffix || '');
                    }
                };

                updateCount();
                observer.unobserve(counter);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});

}
{
  function toggleVideo() {
    var video = document.getElementById('video');
    var thumbnail = document.getElementById('thumbnail');
    var playButton = document.querySelector('.play-button');
    
    if (video.paused) {
        video.style.display = "block";
        video.play();
        thumbnail.style.display = "none";
        playButton.style.display = "none";
    } else {
        video.pause();
        video.style.display = "none";
        thumbnail.style.display = "block";
        playButton.style.display = "block";
    }
  }
}
{
  var swiper = new Swiper(".students_reviews_slider", {
    loop: true,
    autoplay: {
      delay: 3000, // milliseconds between slides
      disableOnInteraction: false, // enable autoplay even when user interacts with slider
  },
    slidesPerView: 4,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      350: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      380: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      450: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
}
{
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("#nav-items .nav-link");

    navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove("active"));
        // Add active class to the clicked link
        this.classList.add("active");
      });
    });
  });
}


{
  $(document).ready(function() {
    $('.pagination .page-link').on('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        $('.pagination .page-item').removeClass('active'); // Remove active class from all items
        $(this).parent().addClass('active'); // Add active class to the clicked item
    });
});
}
{
  $(document).ready(function() {
    $("#contactForm").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Please enter your name"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            message: {
                required: "Please enter your message"
            }
        },
        errorClass: "error",
        errorElement: "div",
        highlight: function(element) {
            $(element).css('border-color', '');
        },
        unhighlight: function(element) {
            $(element).css('border-color', '');
        },
        submitHandler: function(form) {
            // Show SweetAlert on successful submission
            Swal.fire({
                title: 'Form Submitted!',
                text: 'Thank you for contacting us.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    form.submit(); // Submit the form if OK is clicked
                }
            });
        }
    });
});
}

document.addEventListener('DOMContentLoaded', function() {
  const navItems = document.querySelector('.main-nav .nav-items');
  const progressBar = document.querySelector('.top-progress-bar');

  // Function to update background color based on 'show' class presence
  function updateBackgroundColor() {
      if (navItems.classList.contains('show')) {
          progressBar.style.backgroundColor = 'transparent';
      } else {
          progressBar.style.backgroundColor = ''; // Reset to default or another color
      }
  }

  // Initial check
  updateBackgroundColor();

  // Create a MutationObserver to monitor changes in attributes of .main-nav .nav-items
  const observer = new MutationObserver(function(mutationsList) {
      for (let mutation of mutationsList) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
              updateBackgroundColor();
              break;
          }
      }
  });

  // Start observing changes in attributes (specifically class changes) of navItems
  observer.observe(navItems, { attributes: true });
});
