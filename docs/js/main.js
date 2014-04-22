(function (global) {
  (function heroTrace () {
    var image = new Image();
    var triangleGrid = document.getElementById('triangleGrid');

    image.onload = function () {
      ColorSampler.trace(image, triangleGrid, function () {});
    };
    image.src = document.getElementById('heroImage').src;
  })();

  (function menuToggle() {
    var menu = document.getElementById('nav-menu');
    var body = document.documentElement;

    var menuToggle  = document.getElementById('show-menu');
    var overLay     = document.getElementById('nav-toggle-overlay');

    menuToggle.addEventListener('click', function () {
      console
      menuToggle.classList.toggle('active');
      body.classList.toggle('menu-push-toright');
      menu.classList.toggle('menu-open');
    });

    overLay.addEventListener('click', function () {
      menuToggle.classList.remove('active');
      body.classList.remove('menu-push-toright');
      menu.classList.remove('menu-open');
    });
  })();
})(window || this);
