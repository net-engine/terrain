(function (global) {

  $(".share-button").hideshare({
    media: "http://triggerapp.s3.amazonaws.com/images/terrain/avatar.jpg",
    description: "A collection of structural stylesheets for your projects.",
    position: "top",
    facebook: true,
    twitter: true,
    googleplus: true,
    pinterest: false,
    linkedin: false
  });

  $("#nav-menu").stick_in_parent();

  setTimeout(function() {
    $(document.body).trigger("sticky_kit:recalc");
  }, 7500);

  $('[href=' + window.location.hash + ']').addClass('active')

  $("#nav-menu a").on('click', function(e) {
    $("#nav-menu a").removeClass('active');
    $(this).addClass('active');
  });

  $('.show-html').on('click', function(e) {
    e.preventDefault();

    var $this = $(this),
        $container = $this.closest('.container'),
        $pre = $container.find('pre.html-preview');

    $this.toggleClass('active');

    if ($pre.length) {
      $pre.remove();
    } else {
      var $content = $this.closest('header').next('.content'),
          html = $content.html();
      $pre = $('<pre class="html-preview"></pre>');
      $pre.text( html );
      $content.prepend( $pre );
    }
  });

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
      menu.classList.toggle('nav-hide');
    });

    overLay.addEventListener('click', function () {
      menuToggle.classList.remove('active');
      body.classList.remove('menu-push-toright');
      menu.classList.add('nav-hide');
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


$(function() {
  FastClick.attach(document.body);
});
