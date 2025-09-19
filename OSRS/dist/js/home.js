/**
* Updated: Jul 27 2023 with Bootstrap v5.3.1
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      if (window.location.href.indexOf('#') !== -1) {
        scrollToSection(window.location.hash.substring(1), 100);
      }
      new PureCounter({
        // Setting that can't' be overriden on pre-element
        selector: ".purecounter", // HTML query selector for spesific element
        // Settings that can be overridden on per-element basis, by `data-purecounter-*` attributes:
        start: 0, // Starting number [uint]
        end: 100, // End number [uint]
        duration: 2, // The time in seconds for the animation to complete [seconds]
        delay: 10, // The delay between each iteration (the default of 10 will produce 100 fps) [miliseconds]
        once: true, // Counting at once or recount when the element in view [boolean]
        pulse: false, // Repeat count for certain time [boolean:false|seconds]
        decimals: 0, // How many decimal places to show. [uint]
        legacy: true, // If this is true it will use the scroll event listener on browsers
        filesizing: false, // This will enable/disable File Size format [boolean]
        currency: false, // This will enable/disable Currency format. Use it for set the symbol too [boolean|char|string]
        formater: "us-US", // Number toLocaleString locale/formater, by default is "en-US" [string|boolean:false]
        separator: true, // This will enable/disable comma separator for thousands. Use it for set the symbol too [boolean|char|string]
      });
      $('body').css('overflow', 'auto');
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Initiate PURE COUNTER
   */
  //new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});

/* -------------------------------- Custom Stuff -------------------------------- */

// Scroll to section function
function scrollToSection(id, offset=0) {
  if(id.length < 2){
    return;
  }
  var element = $("#"+id)[0];
  // Check if mobile
  if ($('.mobile-nav-toggle.mobile-nav-hide').is(':visible')) {
    $('.mobile-nav-toggle.mobile-nav-hide').click();
    offset = offset / 2;
  }
  if (element) {
    window.scrollBy({ top: element.getBoundingClientRect().top - offset, behavior: "smooth" });
  }
}

// Read more function for updates
function readMoreInit() {
  // When "Read more" is clicked, update the modal content
  $('.read-more-btn').click(function() {
    var title = $(this).closest('.card').find('.full-content-update').attr('data-title');
    var date = $(this).closest('.card').find('.full-content-update').attr('data-date');
    var content = $(this).closest('.card').find('.full-content-update').html();
    // Update modal content
    $('#updateModalLabel').text(title);
    $('#updateDate').text(date);
    $('#fullContent').html(content);
    $('.scroll-top').toggleClass('active');
    $('#updateModal').modal('show');
  });
  // Clear modal content when the modal is closed
  $('#updateModal').on('hidden.bs.modal', function() {
    $('.scroll-top').toggleClass('active');
    $('#updateModalLabel').text('');
    $('#updateDate').text('');
    $('#fullContent').text('');
  });
}

$(document).ready(function() {
  // Disable scroll
  $('body').css('overflow', 'hidden');

  // Init read more updates
  readMoreInit();

  // Right click custom image
  const $customContextMenuImage = $("#customContextMenuImage");
  $(document).on("contextmenu", function(event) {
    event.preventDefault();
    const scrollTop = $(window).scrollTop();
    const scrollLeft = $(window).scrollLeft();
    let windowHeight = $(window).height();
    let windowWidth = $(window).width();
    const imageWidth = $customContextMenuImage.outerWidth();
    const imageHeight = $customContextMenuImage.outerHeight();
    let topPosition = event.clientY + scrollTop;
    let leftPosition = event.clientX + scrollLeft;
    // Check if the image is off-screen to the right
    if (leftPosition + imageWidth > windowWidth) {
      leftPosition = windowWidth - imageWidth;
    }
    $customContextMenuImage.css({
      top: topPosition,
      left: leftPosition,
      display: "block"
    });
  });
  $(document).on("click", function() {
    $customContextMenuImage.css("display", "none");
  });
  

  /* -------------------------------- Contact Form -------------------------------- */
  window.turnstileSucces = () => {
    $('.contact-form-submit').removeClass('disabled border-0');
  };

  $("#contactForm").on("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const form = $(this);
    const formData = form.serialize();
    const formElements = form.find("input, textarea, button, .cf-turnstile");
    // Disable form elements while submitting
    formElements.prop("disabled", true).css("opacity", 0.5);
    // Remove the error message p element if it exists
    const errorMessageElement = form.find(".error-message");
    if (errorMessageElement.length > 0) {
      errorMessageElement.remove();
    }
    // Change submit button to loading icon with text "Sending..."
    const originalButtonText = form.find("button[type='submit']").html();
    form.find("button[type='submit']").html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...');
    $.ajax({
      url: window.location.href, // Use the current page's URL as the request URL
      method: "POST",
      data: formData,
      dataType: "json",
      success: function (data) {
        if (data.success) {
          // Replace the form with a success message
          const successMessage = $("<div class='text-center text-lg text-bold text-success'><i class='bi bi-check-circle-fill text-xl'></i><br>Email sent successfully!</div>");
          form.replaceWith(successMessage);
        } else {
          // Show an error message below the submit button
          const errorMessage = $("<p class='error-message mt-4 text-danger text-bold'>" + data.error + "</p>");
          form.find("button[type='submit']").after(errorMessage);
        }
      },
      error: function (error) {
        // Handle any error that occurred during the AJAX request
        console.error("Error occurred:", error);
        const errorMessage = $("<p class='error-message mt-4 text-danger text-bold'>An error has occured while attempting to submit. Please try again later.</p>");
        form.find("button[type='submit']").after(errorMessage);
      },
      complete: function () {
        // Enable form elements after AJAX request completes (success or error)
        formElements.prop("disabled", false).css("opacity", 1);
        
        // Revert submit button text back to its original value
        form.find("button[type='submit']").html(originalButtonText);
      }
    });
  });

  // Handle payment modal
  $('.paymentLink').click(function(event) {
    event.preventDefault(); // Prevent the default link behavior
    // Show the modal
    $("#paymentContinueBtn, .payment-adblock").hide();
    $('#countdownText, .payment-spinner, .payment-kofi').show();
    $('#paymentModal').modal('show');
    var paymentLink = $(this).attr('href');
    var countdown = 5; // Set the countdown time in seconds
    // Update the countdown text every second
    var countdownInterval = setInterval(function() {
      countdown--;
      $('#countdownText').text('Opening link in ' + countdown + ' seconds...');
      if (countdown <= 0) {
        clearInterval(countdownInterval); // Stop the countdown interval
        $('#countdownText').hide(); // Hide the countdown text
        var newTab = window.open(paymentLink, '_blank');
        if (newTab) {
          $('#paymentModal').modal('hide');
          newTab.focus();
        } else {
          $('#paymentContinueBtn').show();
          $('.payment-spinner, .payment-kofi').hide();
          $('#paymentContinueBtn').attr("href", paymentLink);
          $('#paymentContinueBtn, .payment-adblock').show();
        }
      }
    }, 1000);
  });
  $('#paymentContinueBtn').click(function(event) {
    $("#paymentContinueBtn, .payment-adblock").hide();
    $('#paymentModal').modal('hide');
  });
  
});

/* -------------------------------- Updates -------------------------------- */

// Function to create update cards and append them to the container
function appendUpdates(updates) {
  var container = $('#updates-container');
  $.each(updates, function(index, update) {
    var newCard = container.find('.col-lg-4:last').clone(); // Copy the first card
    var postDate = update.post_date;
    var content = update.content;
    var content_plain_text = $(content).text();
    // Update the new card with the data from the current update
    newCard.find('.position-absolute').text(update.title);
    newCard.find('.badge.bg-gradient-dark').text(postDate);
    // Truncate the content if needed
    var truncatedContent = content_plain_text.length > 270 ? content_plain_text.substring(0, 270) + '... <span class="read-more-btn text-sm font-weight-bold" style="cursor:pointer;color:var(--color-primary);">Read more</span>' : content_plain_text;
    newCard.find('.text-white').html(truncatedContent);
    newCard.find('.full-content-update').attr('data-title', update.title).attr('data-date', postDate).html(content);
    // Append the new card to the container
    container.append(newCard);
  });
  window.scrollTo({
    top: $("#updates-container").find('.col-lg-4:last')[0].offsetTop - 100,
    behavior: 'smooth'
  });
  readMoreInit();
}

// Function to handle the "Show more" button click event
$('#show-more-updates-btn').on('click', function() {
  var showMoreBtn = $(this);
  var showMoreText = $(this).html();
  if (!showMoreBtn.hasClass('disabled')) {
    showMoreBtn.html('<span class="spinner-border spinner-border-sm mr-1" role="status"></span> Loading...').addClass('disabled');
    var offset = $('#updates-container .col-list-update').length;
    $.ajax({
      url: window.location.href,
      type: 'POST',
      data: { offset: offset, updates: 'true' },
      dataType: 'json',
      success: function(response) {
        if (response.length > 0) {
          appendUpdates(response);
        } else {
          $('#updates-container').append($('<div class="text-center mb-0 text-white font-weight-bold">No more updates.</div>'));
          showMoreBtn.hide(); // Hide the "Show more" button if there are no more updates
        }
      },
      error: function() {
        console.log('Error occurred while fetching updates.');
      },
      complete: function() {
        showMoreBtn.html(showMoreText).removeClass('disabled');
      }
    });
  }
});