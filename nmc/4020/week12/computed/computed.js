var computed = new Vue({
el: '#compute',
    data: {
    firstName: "Emuel",
    lastName: "Aldridge"
    },
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName
        }
    }
})