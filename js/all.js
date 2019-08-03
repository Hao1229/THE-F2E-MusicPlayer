var app = new Vue({
  el: '#app',
  data: {
    topMusic: [
      {
        singer: 'HYUKOH',
        music: 'TOMBOY',
        src: 'img/TOMBOY.png'
      },
      {
        singer: 'HYUKOH',
        music: 'LOVE YA!',
        src: 'img/LOVE YA!.png'
      },
      {
        singer: 'HYUKOH',
        music: 'Comes and Goes',
        src: 'img/Comes and Goes.png'
      },
      {
        singer: 'HYUKOH',
        music: 'Gondry',
        src: 'img/Gondry.png'
      },
      {
        singer: 'HYUKOH',
        music: '위잉위잉',
        src: 'img/위잉위잉.png'
      }
    ],
    favoriteMusic:[],
  },
  methods: {
    showLibrary() {
      $('.library').toggleClass('library-active');
    },
    showDiscover() {
      $('.discover').toggleClass('discover-active');
    },
    changeIcon (item) {
      let vm = this;
      if(vm.favoriteMusic.indexOf(item)<0){
        vm.favoriteMusic.push(item)
      }else if (vm.favoriteMusic.indexOf(item)>-1){
        let index = vm.favoriteMusic.indexOf(item)
        vm.favoriteMusic.splice(index,1)
      }
    },
    showProfile () {
      
    }
  },
})