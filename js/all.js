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
    musicPlaying: 'music/Metamorphosis.mp3',
    isPaused: true,
    minutes:'00',
    seconds:'00',
    totalMiuntes: '00',
    totalSeconds: '00'
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
    togglePlay () {
      let music = document.querySelector('audio')
      let vm = this
      vm.isPaused = !vm.isPaused
      if (music.paused) {
        music.play()
      }else {
        music.pause()
      }
    },
    progressing () {
      let music = document.querySelector('audio')
      let musicDuration = music.duration
      let currentPosition = music.currentTime
      let currentProgress = (currentPosition / musicDuration) * 100
      let progressbarFill = document.querySelector('.progressBar-filled')
      progressbarFill.style.width = `${currentProgress}%`
      let vm = this 
      let minute = Math.floor(currentPosition / 60)
      let second = Math.floor(currentPosition % 60)
      if(minute<10){
        vm.minutes = `0${minute}`
      }else{
        vm.minutes = minute
      }
      if(second<10){
        vm.seconds = `0${second}`
      }else{
        vm.seconds = second
      }
      let totalMiunte =  Math.floor(musicDuration / 60)
      let totalSecond = Math.floor(musicDuration % 60)
      if(totalMiunte<10){
        vm.totalMiuntes = `0${totalMiunte}`
      }else{
        vm.totalMiuntes = totalMiunte
      }
      if(totalSecond<10){
        vm.totalSecond = `0${totalSecond}`
      }else{
        vm.totalSecond = totalSecond
      }
    },
    reStart () {
      let music = document.querySelector('audio')
      music.load()
      let vm = this
      music.play()
      vm.isPaused = false
    }
  },
 
})


