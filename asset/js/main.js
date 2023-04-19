




const { createApp } = Vue

createApp({

  // VARIABILI VUE
  data() {
    return {
      

      currentImageIndex: 0,
      currentTitleIndex: 0,

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
      ]


    }
  },


  // FUNZIONI VUE
  methods: {

    nextImage() {
      if (this.currentImageIndex < this.images.length - 1) {
        this.currentImageIndex++;
        this.currentTitleIndex++;
      } else {
        this.currentImageIndex = 0;
        this.currentTitleIndex = 0;
      }
    },
    prevImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
        this.currentTitleIndex--;
      } else {
        this.currentImageIndex = this.images.length - 1;
        this.currentTitleIndex = this.currentTitleIndex  - 1;
      }
    },

  }

}).mount('#app')
