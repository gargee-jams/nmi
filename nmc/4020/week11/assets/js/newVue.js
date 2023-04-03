var header = new Vue ({
    el: '#header',
        data: {
            yourName: 'Gargee Jamadagni',
            description: "Student",
            linkOne: "Introduction",
            link2: "My Portfolio",
            link3: "About Me",
            link4: "Contact",
            link5: "Links",
            avatar: "images/me.jpg"
        }
})

var intro = new Vue({
    el: '#intro',
    data: {
        header: "Gargee Jamadagni",
        description: "Welcome to my basic website created with Vue.js",
        footer: "Click here"
    }
})

var portfolio = new Vue ({
    el: '#portfolio',
    data: {
        description: "A collection of pictures I've taken in the last six months",
        portfolioTitle: "Portfolio",
        image1: "images/pic01.jpg",
        imgText1: "a colorful ceiling",
        image2: "images/pic02.jpg",
        imgText2: "a cool concert",
        image3: "images/pic04.jpg",
        imgText3: "another cool concert",
        image4: "images/pic03.jpg",
        imgText4: "my last art project",
        image5: "images/pic05.jpg",
        imgText5: "some intense lightning",
        image6: "images/pic06.jpg",
        imgText6: "yet another cool concert"
    }
})

var about = new Vue ({
    el: '#about',
    data: {
        header: 'About',
        img: "images/pic08.jpg",
        description: "Gargee is a second-year undergraduate student at the University of Georgia. She is pursuing a Bachelor's degree in Computer Science with a minor in Studio Art as well as the New Media Certificate."
    }
})

var list = new Vue({
    el: '#list',
    data: {
        link5: 'List',
        header: "Current Favorite Artists" ,
        favorites: ['Palaye Royale', 'DPR Ian', 'Bring me the Horizon']
    }
});

var conditional = new Vue ({
    el: '#conditional',
    data: {
        teacherName: '',
        courseName: '',
    }
});

var getColor = new Vue ({
    el: '#function',
    data: {
        bgColor: '',
        w: '',
        colors: ['red', 'green', 'blue'],
        widths: ['400px', '500px', '600px']
    },
    methods: {
        changeColor(color) {
            this.bgColor = color;
        },
        changeWidth(width) {
            this.w = width;
        }
    }
});

var contact = new Vue({
    el: '#contact',
    data: {
        header: 'Contact',
        description: "Fill out the form below to contact me!"

    }
})