var app = new Vue({
    el: '#app',
    data: {
       text: '這是一段話'
    },
    methods: {
        showLibrary () {
         $('.library').toggleClass('library-active');
       },
       showDiscover () {
        $('.discover').toggleClass('discover-active');
      },
    },
})