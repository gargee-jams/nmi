new Vue({
    el: '#app',
    data: {
        catArray: [],
        domain1: "https://cdn2.thecatapi.com/images/",
        domain2: ".jpg"
    },
    created() {
        this.loadNextImage();
    },
    methods: {
        async loadNextImage() {
            try {
                axios.defaults.headers.common['x-api-key'] = "5707ff43-c0b5-456f-864a-78a03c24ea46"
                let response = await axios.get('https://api.thecatapi.com/v1/breeds')
                this.catArray = response.data;
                for (i = 0; i < this.catArray.length; i++) {
                    let catObj = this.catArray[i].image;
                    catObj.name = this.catArray[i].name;
                    catObj.link = this.catArray[i].wikipedia_url;
                    catObj.description = this.catArray[i].description;
                    catObj.type = this.catArray[i].indoor;
                    this.breeds.push(catObj);
                }
            } catch (err) {
                console.log(err)
            }

        }
    }
})
