new Vue({
    el: '#app',

    data() {

        return {
            info: null,
            moreData: []
        }
    },
    mounted: function mounted() {
        this.showme()

    },

    methods: {
        async    showme(index) {
            await    axios
                .get('https://dog.ceo/api/breed/spaniel/'+index+'/images')
                .then(response => (this.info = response.data));
            console.log(this.info.message)
            this.moreData = this.info.message;
        }
    }
})
