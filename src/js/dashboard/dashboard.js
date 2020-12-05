new Vue({

    el: "#dashboard",
    data: {
        dashboardbool: true,
        name : "Uday yadav",
        email : "dev117uday@gmail.com",
        items: [
            {
                name: "uday yadav",
                email: "dev117uday@gmail.com",
                age: "20",
                phone: "9810039759",
                blood: "O+",
                isInfected: false,
                isDonated: false,
                date_recovery: "2020-20-20",
                date_plasma: "2020-20-20",
            },
            {
                name: "uday yadav",
                email: "dev117uday@gmail.com",
                age: "20",
                phone: "9810039759",
                blood: "O+",
                isInfected: false,
                isDonated: false,
                date_recovery: "2020-20-20",
                date_plasma: "2020-20-20",
            }, {
                name: "uday yadav",
                email: "dev117uday@gmail.com",
                age: "20",
                phone: "9810039759",
                blood: "O+",
                isInfected: false,
                isDonated: false,
                date_recovery: "2020-20-20",
                date_plasma: "2020-20-20",
            }
        ]
    },
    methods: {
        switchview: function () {
            this.dashboardbool = !this.dashboardbool
        },
        logout : function() {
            localStorage.clear()
            window.location.pathname = "./index.html"
        }
    }
})

