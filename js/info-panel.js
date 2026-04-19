/* global AFRAME */
AFRAME.registerComponent('info-panel', {
    init: function () {
      var buttonEls = document.querySelectorAll('.menu-button');
      var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');
      

      this.movieTitleEl = document.querySelector('#movieTitle');
      this.movieDescriptionEl = document.querySelector('#movieDescription');
  
      this.movieInfo = {
        MoveToEnterance: {
          modal: 'changeSceneModal',
          type: 'modal'
        },
        karigurashiButton: {
          modal: 'changeSceneModal',
          type: 'modal'
        },
        
        MoveToLounge: {
          modal: 'changeSceneModalTwo',
          type: 'modal'
        },
        MoveThree: {
          modal: 'changeSceneModalThree',
          type: 'modal'
        },
        tutorialButton: {
          modal: 'tutorialModal',
          type: 'modal'
        },
        BeginningButton: {
          modal: 'BeginningModal',
          type: 'modal'
        },
        WindowButton: {
          modal: 'WindowModal',
          type: 'modal'
        },
        ponyoButton: {
          modal: 'miniGameModal',
          type: 'modal'
        },
        audioButton: {
          modal: "audioButton",
          type: 'audio',
          playbackState: 'paused'
        },
        argusIcon: {
          modal: "argusIcon",
          type: "argus"
        },
        buttonNew: {
          modal: 'carFacts',
          type: 'modal'
        },


      };
  
      this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
      this.onBackgroundClick = this.onBackgroundClick.bind(this);
      this.backgroundEl = document.querySelector('#background');
      for (var i = 0; i < buttonEls.length; ++i) {
        buttonEls[i].addEventListener('click', this.onMenuButtonClick);
      }
      this.backgroundEl.addEventListener('click', this.onBackgroundClick);
      this.el.object3D.renderOrder = 2;
      this.el.object3D.depthTest = false;
      //fadeBackgroundEl.object3D.renderOrder = 1;
      //fadeBackgroundEl.getObject3D('mesh').material.depthTest = false;

      this.sound = new Howl({
        src: ['audio\\intro2.mp3']
     });
    },
  
    onMenuButtonClick: function (evt) {
      var movieInfo = this.movieInfo[evt.currentTarget.id];
      var sound = this.sound;


      this.backgroundEl.object3D.scale.set(1, 1, 1);
      this.el.object3D.scale.set(1, 1, 1);
      /*
      if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(1.4, 1.4, 1.4); }
      this.el.object3D.visible = true;
      this.fadeBackgroundEl.object3D.visible = true;
  
      if (this.movieImageEl) { this.movieImageEl.object3D.visible = false; }
      this.movieImageEl = movieInfo.imgEl;
      this.movieImageEl.object3D.visible = true;
      */
     

     if (movieInfo.type == 'modal'){
        var miniGameModal = this.miniGameModal = document.getElementById(movieInfo.modal);
        this.miniGameModal.style.display = "block";
     }

     if(movieInfo.type == 'argus'){
      handleGuide('argus');
     }

     if(movieInfo.type == 'audio'){
      //var audioPlayer = this.audioPlayer = document.getElementById(movieInfo.modal);
      //audioPlayer.components.sound.playSound();
      //audioPlayer.components.sound.pauseSound();

      if (movieInfo.playbackState == 'paused'){
        //sound.play();
        handleGuide("intro2");
        movieInfo.playbackState = 'playing';
        /*
        audioPlayer.components.sound.playSound();
        console.log(movieInfo.playbackState);
        */
        return;
      }
      
      if (movieInfo.playbackState == 'playing'){
        sound.stop();
        //sound.pause();
        movieInfo.playbackState = 'paused';
        /*
        audioPlayer.components.sound.pauseSound();
        console.log(movieInfo.playbackState);
        */
        return;
      }
    }},
  
    onBackgroundClick: function (evt) {
      this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.scale.set(0.001, 0.001, 0.001);
      this.el.object3D.visible = false;
      this.fadeBackgroundEl.object3D.visible = false;
    }
  });