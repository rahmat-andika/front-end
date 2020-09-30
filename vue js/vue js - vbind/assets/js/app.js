var app = new Vue({
    el: '#app',
    data: {
        imgFile: 'bj2.jpeg',
        styleFont: 'color: red; font-size: 50px;',
        message: '',
        message2: '',
    },
    methods: {
        showAlert: function() {
            alert('ini function show alert');
        },
        escKey: function() {
            this.message2 = 'press key esc';
        },
        spaceKey: function() {
            this.message2 = 'press key space';
        }
    }
});