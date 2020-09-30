var app = new Vue({
    el: '#app',
    data: {
        show: false,
        message: 'hai true',
        message2: 'hai false',
        int1: 1,
        int2: 2,
        result: null,
        kilometers: null,
        meters: null,
    },
    computed: {
        sum: function() {
            return this.int1 + this.int2
        }
    },
    methods: {
        sumProces: function(val) {
            this.result = this.int1 + this.int2 + val
        }
    },
    watch: {
        kilometers: function(val) {
            this.kilometers = val;
            this.meters = val * 1000;

        },
        meters: function(val) {
            this.kilometers = val / 1000
            this.meters = val;
        }
    }
});