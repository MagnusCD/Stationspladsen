
/*Kilde: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp*/
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function topnavResponsive() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


/*Kilde: https://alvarotrigo.com/blog/css-animations-scroll/*/
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


document.addEventListener('DOMContentLoaded', function() {
  function updateElementWidths() {
      var fbBoxWidth = window.innerWidth > 1100 ? '600px' : '300px'; // Determine the width based on the viewport
      var nyhederHeader = document.querySelector('.nyheder-header');

      if (nyhederHeader) {
          nyhederHeader.style.width = fbBoxWidth; // Set the width of nyheder-header to match the fbBoxWidth
      }
  }

  // Call the function on initial load
  updateElementWidths();

  // Add event listener for window resize
  window.addEventListener('resize', updateElementWidths);
});

document.addEventListener('DOMContentLoaded', function() {
  function updateFacebookBoxWidth() {
      var fbBox = document.querySelector('.fb-like-box');
      if (window.innerWidth > 1100) {
          fbBox.setAttribute('data-width', '600');
      } else {
          fbBox.setAttribute('data-width', '300');
      }
  }

  // Call the function on initial load
  updateFacebookBoxWidth();

  // Add event listener for window resize
  window.addEventListener('resize', updateFacebookBoxWidth);
});





