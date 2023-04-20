Vue.component('cat', {
    props: {
        whichcat: String
    },
    template:  
       `<div>
            <h2 id = "name">{{thename}}</h2>
            <h3>{{origin}}</h3>
            <p>{{description}}</p>
            <p>{{temperament}}</p>
            <h2>Adaptability Score: {{adapt}}</h2>
            <div style = "{width: '200px', backgroundColor: '#B1AE91', justifyContent: 'center'}">
                <div :style = "{width: affection_level * 100 + 'px', backgroundColor: '#95bf8f', borderRadius: '1px', borderStyle: 'solid', borderColor: '#C96480', margin: '2px'}">Affection Level</div>
                <div :style = "{width: child_friendly * 100 + 'px', backgroundColor: '#C96480', borderRadius: '1px', borderStyle: 'solid', borderColor: '#95bf8f', margin: '2px'}">Child-Friendly</div>
                <div :style = "{width: dog_friendly * 100 + 'px', backgroundColor: '#95bf8f', borderRadius: '1px', borderStyle: 'solid', borderColor: '#C96480', margin: '2px'}">Dog-Friendly</div>
            </div>
            <button v-on:click="slideshow">slideshow</button>
            <img :src="image.url">
        </div>`, 
        data() {
            return{ 
                image: "",
                thename: "",
                allofit: [],
                i: 0,
                adapt: 0,
                description: "",
                origin: "",
                temperament: "",
                affection_level: "",
                child_friendly: "",
                dog_friendly: ""
            }
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
        this.temperament = response2.data.breeds[0].temperament;
        this.affection_level = response2.data.breeds[0].affection_level;
        this.child_friendly = response2.data.breeds[0].child_friendly;
        this.dog_friendly = response2.data.breeds[0].dog_friendly;

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

var co = new Vue ({
    el: '#cats'
})

