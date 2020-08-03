new Vue({
  el: '#app',
  data: {
    name: 'Piyumi',
    job: 'Web developer, creative artist'
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
