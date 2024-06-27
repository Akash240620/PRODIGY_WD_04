window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgb(162, 7, 179)';
    } else {
        navbar.style.backgroundColor = 'rgb(162, 7, 179)';
    }
});

var typed = new Typed('#element', {
    strings: ['Software Developer', 'Web Developer'],
    typeSpeed: 30,
});