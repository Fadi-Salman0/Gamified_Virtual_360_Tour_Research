/* global AFRAME */
AFRAME.registerComponent('highlight', {
    init: function () {
      var buttonEls = this.buttonEls = this.el.querySelectorAll('.menu-button');
      var backgroundEl = document.querySelector('#background');
      this.onClick = this.onClick.bind(this);
      this.onMouseEnter = this.onMouseEnter.bind(this);
      this.onMouseLeave = this.onMouseLeave.bind(this);
      this.reset = this.reset.bind(this);
      backgroundEl.addEventListener('click', this.reset);
      for (var i = 0; i < buttonEls.length; ++i) {
        buttonEls[i].addEventListener('mouseenter', this.onMouseEnter);
        buttonEls[i].addEventListener('mouseleave', this.onMouseLeave);
        buttonEls[i].addEventListener('click', this.onClick); 
      }
    },
  
    // if we can put some js and html inside these info modals, then we could just rotate the plane to be normal to the camera

    onClick: function (evt) {
      evt.target.pause();
      evt.target.setAttribute('material', 'color', '#046de7');
      this.el.addState('clicked'); // a flag for tracking the click state of the poster
      evt.target.object3D.scale.set(1.2, 1.2, 1.2);
    },
  
    onMouseEnter: function (evt) {
      var buttonEls = this.buttonEls;
      evt.target.setAttribute('material', 'color', '#046de7'); // this is the highligh color of the anime poster
      for (var i = 0; i < buttonEls.length; ++i) {
        if (evt.target === buttonEls[i]) { continue; }
        buttonEls[i].setAttribute('material', 'color', 'white');
      }
    },
  
    onMouseLeave: function (evt) {
      if (this.el.is('clicked')) { return; }
      evt.target.setAttribute('material', 'color', 'white'); // mouse leaves, remove blue tint
    },
  
    reset: function () {
      var buttonEls = this.buttonEls;
      for (var i = 0; i < buttonEls.length; ++i) {
        this.el.removeState('clicked');
        buttonEls[i].play();
        buttonEls[i].emit('mouseleave');
      }
    }
  });