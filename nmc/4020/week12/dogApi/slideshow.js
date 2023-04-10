new Vue({
    el: '#app',

    data() {

        return {
            info: null,
            moreData: [],
            imgMaker: [],
            whichDawg: "",
            selector: 0
        }
    },
    mounted: function mounted() {
        this.showme('cocker')

    },

    methods: {
        async    showme(index, i) {
            await    axios
                .get('https://dog.ceo/api/breed/spaniel/'+index+'/images')
                .then(response => (this.info = response.data));
            console.log(this.info.message)
            this.moreData = this.info.message;
            this.slider(i)
        },
        slider(i) {
            this.whichDawg = this.moreData[this.selector];
            if (i == 1) {
                this.selector ++;
            } else {
                this.selector --;
            }
            if (this.selector > this.moreData.length || this.selector < 0) {
                this.selector = 0;
            }
        }
    }
})
