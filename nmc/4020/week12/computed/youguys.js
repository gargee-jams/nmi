var studentdata = new Vue({
    el: '#us',

    data: {
        stuname: "",
        counter: 0,
        oswald: "nothing yet",
        yall: [{
                "stu_name": "Lise",
                "last_name": "Xu",
                "domain": "lizmxu.com\/nmc\/4020",
                "fact": " I've lived in Denmark for many years.",
                "section": "1130",
                "counter": "196"
            },
            {
                "stu_name": "Zach",
                "last_name": "Fader",
                "domain": "www.zachfader.com\/nmc\/4020",
                "fact": "  I transferred to UGA from KSU last semester.",
                "section": "1130",
                "counter": "197"
            },
            {
                "stu_name": "Emma",
                "last_name": "North",
                "domain": "emma-north.com\/nmc\/4020",
                "fact": "  I like to crochet.",
                "section": "1130",
                "counter": "204"
            },
            {
                "stu_name": "Eva",
                "last_name": "Daniel",
                "domain": "nmi.evadaniel.com\/nmc\/4020",
                "fact": "  I have been to 15 different countries and I also play the violin!",
                "section": "910",
                "counter": "200"
            },
            {
                "stu_name": "Gargee",
                "last_name": "Jamadagni",
                "domain": "nmi.gargeejamadagni.com\/nmc\/4020",
                "fact": "  I did martial arts for 6 years!",
                "section": "910",
                "counter": "201"
            },
            {
                "stu_name": "Anna",
                "last_name": "van Eekeren",
                "domain": "annavaneekeren.com\/nmc\/4020",
                "fact": "  I like to write (poetry + introspective pieces, some creative fiction) and play video games.",
                "section": "910",
                "counter": "202"
            },
            {
                "stu_name": "Olivia ",
                "last_name": "Shapiro ",
                "domain": "oliviamshapiro.com\/em\/6020",
                "fact": "  I am the VP of the UGA Women's Hockey Team!",
                "section": "1130",
                "counter": "203"
            },
            {
                "stu_name": "Lauren",
                "last_name": "Pike",
                "domain": "www.laurenapike.com\/em\/6020",
                "fact": "  I love public speaking! ",
                "section": "910",
                "counter": "205"
            },
            {
                "stu_name": "Nazha",
                "last_name": "Erakat",
                "domain": "nazhaerakat.com\/4020",
                "fact": "My favorite sports team is the 49ers. ",
                "section": "1130",
                "counter": "206"
            },
            {
                "stu_name": "Sarah",
                "last_name": "Orji",
                "domain": "nmi.sarahorji.com\/nmc\/4020",
                "fact": " Pinterest is my Instagram!",
                "section": "910",
                "counter": "207"
            },
            {
                "stu_name": "Cady",
                "last_name": "Phan",
                "domain": "cadyphan.com\/nmc\/4020",
                "fact": "I went to Vegas for Christmas!",
                "section": "1130",
                "counter": "195"
            },
            {
                "stu_name": "Beau",
                "last_name": "Wallace",
                "domain": "beau-wallace.com\/nmc\/4020",
                "fact": "  I am left-handed and have red hair, quite the rare combination. ",
                "section": "1130",
                "counter": "193"
            },
            {
                "stu_name": "Catherine",
                "last_name": "Chu",
                "domain": "catherinechucc.com\/nmc\/4020",
                "fact": "My fun trick is that I can move an oreo from my forehead into my mouth without using my hands.",
                "section": "1130",
                "counter": "194"
            },
            {
                "stu_name": "Catherine ",
                "last_name": "Tran",
                "domain": "catherinetran.reclaim.hosting\/em\/webdev",
                "fact": "I transferred from LSU",
                "section": "1130",
                "counter": "191"
            },
            {
                "stu_name": "Ngoc",
                "last_name": "Nguyen",
                "domain": "ngocpnguyen.com\/nmc\/4020",
                "fact": "  My favorite color is pink!",
                "section": "1130",
                "counter": "192"
            },
            {
                "stu_name": "Abby Grace",
                "last_name": "Freet",
                "domain": "abbygracefreet.com\/em\/6020",
                "fact": "  I have a twin brother",
                "section": "1130",
                "counter": "190"
            },
            {
                "stu_name": "Jason",
                "last_name": "Marcus",
                "domain": "jasonmarcus.net\/em\/6020",
                "fact": "I play guitar!",
                "section": "1130",
                "counter": "189"
            },
            {
                "stu_name": "Heaven",
                "last_name": "Robinson",
                "domain": "heavenrobinson.com\/em\/6020",
                "fact": "I love collecting stickers and pins.",
                "section": "910",
                "counter": "186"
            },
            {
                "stu_name": "Danielle",
                "last_name": "Hodges",
                "domain": "daniellehodges.com\/nmc\/4020",
                "fact": "I love to sew!",
                "section": "910",
                "counter": "184"
            },
            {
                "stu_name": "Rishi",
                "last_name": "Patel",
                "domain": "riship2802.com\/nmc\/4020",
                "fact": "I'm a kicker.",
                "section": "910",
                "counter": "185"
            },
            {
                "stu_name": "madison",
                "last_name": "courter",
                "domain": "mcourter.com\/em\/4020",
                "fact": "  I'm an RA",
                "section": "910",
                "counter": "182"
            },
            {
                "stu_name": "Raksha",
                "last_name": "Adama",
                "domain": "rakshaadama.com\/nmc\/4020",
                "fact": "I traveled to Hawaii with my family over winter break!",
                "section": "910",
                "counter": "183"
            },
            {
                "stu_name": "Kendall",
                "last_name": "Pratt",
                "domain": "kendallpratt.com\/nmc\/4020",
                "fact": "  I'm a radio DJ !!",
                "section": "910",
                "counter": "181"
            },
            {
                "stu_name": "Erin",
                "last_name": "Kenney",
                "domain": "erinckenney.com\/em\/6020",
                "fact": "I have a twin sister who attends Georgia Tech! ",
                "section": "1130",
                "counter": "188"
            },
            {
                "stu_name": "Blake",
                "last_name": "Campbell",
                "domain": "blakecampbell.online\/nmc\/4020",
                "fact": "  I got back into reading and read 25 books last year! Thank you Goodreads lol",
                "section": "910",
                "counter": "180"
            },
            {
                "stu_name": "Hannah",
                "last_name": "Kwak",
                "domain": "hanniekwak.com\/nmc\/6020",
                "fact": "  I like to play the violin and piano. ",
                "section": "910",
                "counter": "178"
            },
            {
                "stu_name": "Reagan",
                "last_name": "Brode",
                "domain": "reaganbrode.com\/nmc\/6020",
                "fact": "  I have a pig, dog, 2 cats, 2 guinea pigs, a turtle, rooster, and 4 hens all as pets.",
                "section": "910",
                "counter": "177"
            },
            {
                "stu_name": "Emuel",
                "last_name": "Aldridge",
                "domain": "emuel.com",
                "fact": "  I am the teacher",
                "section": "910",
                "counter": "174"
            },
            {
                "stu_name": "Emuel",
                "last_name": "Aldridge",
                "domain": "emuel.com",
                "fact": "  I am the teacher",
                "section": "1130",
                "counter": "175"
            },
            {
                "stu_name": "Aidan",
                "last_name": "York",
                "domain": "aidanayork.com\/nmc\/4020",
                "fact": "  I used to play viola.",
                "section": "910",
                "counter": "176"
            }
        ]
    },
    methods: {
        showImage(index) {
            this.counter = index
        }
    },
    computed: {
        image() {
            return "http://" + this.yall[this.counter].domain+"/images/me.jpg";
        },
        quote() {
            return this.yall[this.counter].fact;
        }
    }
})