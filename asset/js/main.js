




const { createApp } = Vue

createApp({

  // VARIABILI VUE
  data() {
    return {
      

      currentIndex: 0,
      classe1: "thumb",
      actual: 'actual',

      images: [
        {
            image: './asset/img/01.webp',
            title: 'Marvel\'s Spiderman Miles Morale',
            text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        }, {
            image: './asset/img/02.webp',
            title: 'Ratchet & Clank: Rift Apart',
            text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
        }, {
            image: './asset/img/03.webp',
            title: 'Fortnite',
            text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        }, {
            image: './asset/img/04.webp',
            title: 'Stray',
            text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
        }, {
            image: './asset/img/05.webp',
            title: "Marvel's Avengers",
            text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        }
      ],


    }
  },

  //chiamata function al caricamento della pagina
  created(){
    this.autoScroll()
  },

  // FUNZIONI VUE
  methods: {

    nextImage() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },

    prevImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.images.length - 1;
      }
    },

    changeImg(i){
      this.currentIndex = i
    },

    autoScroll(){
      this.stopInterval = setInterval( ()=> {
        this.nextImage()
      }, 2000)
    },

    stopScroll(){
      clearInterval( this.stopInterval )
    }

  }

}).mount('#app')
