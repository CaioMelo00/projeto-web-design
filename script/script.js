const pageTopButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    pageTopButton.style.display = "block";
  } else {
    pageTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
pageTopButton.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
}));