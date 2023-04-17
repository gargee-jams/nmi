new Vue({
    el: '#bobcat',
    data: {
        image: "",
        whichcat: "abys",
        thename: "",
        allofit: [],
        i: 0,
        adapt: 0,
        description: "",
        origin: ""
    },
    created() {
        this.loadNextImage(this.whichcat);
    },
    methods: {
        async loadNextImage(breedID) {
            try {
                axios.defaults.headers.common['x-api-key'] = "5707ff43-c0b5-456f-864a-78a03c24ea46"
     let response = await axios.get('https://api.thecatapi.com/v1/images/search?breed_ids=' + breedID, {
                    params: {
                        limit: 10,
                        size: "full"
                    }
                })
     //grabs the id in order to target new url for more data
 
     let theid = response.data[0].id;
//response2 is a new variable that uses the id to get data from a URL with additional information
  let response2 = await axios.get('https://api.thecatapi.com/v1/images/' + theid, {})
    this.adapt = response2.data.breeds[0].adaptability;
    this.thename = response2.data.breeds[0].name;
    this.description = response2.data.breeds[0].description;
    this.origin = response2.data.breeds[0].origin;
    this.allofit = response.data;
            } catch (err) {
                console.log(err)
            }
            this.slideshow()
        },
        async slideshow() {

            if (this.i >= this.allofit.length) {
                this.i = 0;
            }
            this.image = this.allofit[this.i];
            this.i++;
        }
    }
})
Vue.component("catSlide", {
    props: {
        breedName: whichcat
    },
    template:  
       '<h2>{{thename}}</h2><h3>{{origin}}</h3><p>{{description}}</p><h2>Adaptability Score: {{adapt}}</h2><button v-on:click="slideshow">slideshow</button><br><br><img :src="image.url"><br>'
    ,
    methods: {
        slideshow() {
            
        }
    }
})