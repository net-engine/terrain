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

  (function modalToggle() {
    var modalButton = document.getElementById('modal-open');
    var modalClose  = document.getElementById('modal-close');
    var modalSubmit = document.getElementById('modal-submit');
    var modalCancel = document.getElementById('modal-cancel');
    var modal       = document.getElementById('modal');
    var overLay     = document.getElementById('modal-overlay');

    function closeModal () {
      modal.classList.remove('open');
      overLay.classList.remove('open');
    }

    modalButton.addEventListener('click', function () {
      modal.classList.toggle('open');
      overLay.classList.toggle('open');
    });

    modalCancel.addEventListener('click', function () {
      closeModal();
    });

    modalSubmit.addEventListener('click', function () {
      closeModal();
    });

    modalClose.addEventListener('click', function () {
      closeModal();
    });

    overLay.addEventListener('click', function () {
      closeModal();
    });
  })();

  (function flyoutMenuToggle() {
    var flyoutButton  = document.getElementById('open-flyout-menu');
    var flyoutWrap    = document.getElementById('flyout-menu-wrap');
    var flyoutOverlay = document.getElementById('flyout-overlay');

    flyoutButton.addEventListener('click', function () {
      flyoutWrap.classList.toggle('active');
    });

    flyoutOverlay.addEventListener('click', function () {
      flyoutWrap.classList.remove('active');
    });
  })();
})(window || this);
