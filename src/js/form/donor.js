new Vue({

    el: "#donor",
    data: {
        msg: "",
        msg_bool: false,
        err_bool: false,
        err_msg: "",
        name: "",
        email: "",
        age: "",
        phone: "",
        blood: "",
        isInfected: false,
        isDonated: false,
        isInfectedbool: false,
        isDonatedbool: false,
        date_recovery: "",
        date_plasma: "",
        auth: true,
    },

    methods: {
        donor_submit: function () {
            
            if (this.isInfectedDate == false) {
                this.date_recovery = ""
                this.isInfectedDate = ""
            }
            if (this.isIDonateDate == false) {
                this.donatedDate = ""
            }

            let phoneno = /^\d{10}$/;
            if ((this.phone.match(phoneno))) {
            } else {
                alert("Wrong phone number, please enter a 10 digi number without +91");
                return;
            }
            let isInfectedx = ""
            let isDonatedx = ""
            if (this.isInfectedbool === false) {
                this.date_recovery = "2000-10-10"
                isInfectedx = "null"
            } else {
                isInfectedx = "true"
            }
            if (this.isDonatedbool === false) {
                this.date_plasma = "2000-10-10"
                isDonatedx = "null"
            } else {
                isDonatedx = "true"
            }

            let data = JSON.stringify({
                "name": this.name,
                "email": this.email,
                "age": this.age,
                "phone": this.phone,
                "isDonated": isDonatedx,
                "isInfected": isInfectedx,
                "recoveryDate": this.date_recovery,
                "donatedDate": this.date_plasma,
                "blood_group": this.blood
            })


            let token = localStorage.getItem("auth-token")
            let myHeaders = new Headers();
            myHeaders.append("Authorization", `Token ${token}`);
            myHeaders.append("Content-Type", "application/json");

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: data,
                redirect: 'follow'
            };

            fetch("https://jivaandaan.herokuapp.com/plasma/api/donor/", requestOptions)
                .then(response => {
                    if (response.status == 400 ) {
                        this.err_bool = true
                        this.err_msg = "Bad Request"
                        this.msg_bool = false
                        this.msg = ""
                        return
                    } else {
                        return response.text()
                    }
                })
                .then((data) => {
                    console.log(data)
                    alert("Success !!")
                    window.location.pathname = "../../index.html"
                })
                .catch((err) => {
                    console.log(err)
                    this.err_bool = true
                    this.err_msg = "Error"
                    return
                });

            return
        },
        logout: function () {
            localStorage.clear()
            window.location.pathname = "./index.html"
        },
        infectDate: function (e) {
            if (e === 1) {
                this.isInfectedbool = true
            } else if (e === 2) {
                this.isInfectedbool = false
            }
        },
        donateDate: function (e) {
            if (e === 1) {
                this.isDonatedbool = true
            } else if (e === 2) {
                this.isDonatedbool = false
            }
        }
    }

})