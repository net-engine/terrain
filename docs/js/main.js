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
    var leftFlyoutButton  = document.getElementById('open-left-flyout-menu');
    var leftFlyoutWrap    = document.getElementById('left-flyout-menu-wrap');
    var leftFlyoutOverlay = document.getElementById('left-flyout-overlay');

    var rightFlyoutButton  = document.getElementById('open-right-flyout-menu');
    var rightFlyoutWrap    = document.getElementById('right-flyout-menu-wrap');
    var rightFlyoutOverlay = document.getElementById('right-flyout-overlay');

    leftFlyoutButton.addEventListener('click', function () {
      leftFlyoutWrap.classList.toggle('active');
    });

    leftFlyoutOverlay.addEventListener('click', function () {
      leftFlyoutWrap.classList.remove('active');
    });

    rightFlyoutButton.addEventListener('click', function () {
      rightFlyoutWrap.classList.toggle('active');
    });

    rightFlyoutOverlay.addEventListener('click', function () {
      rightFlyoutWrap.classList.remove('active');
    });
  })();
})(window || this);
