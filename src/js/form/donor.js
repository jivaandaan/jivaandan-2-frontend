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
        isInfected: "",
        date_recovery: "",
        donatePlasma: "",
        date_plasma: "",
        auth: true,
        isInfectedDate: "false",
        isIDonateDate: "false",
    },

    methods: {
        donor_submit: function () {
            console.log(this.name, this.email, this.age, this.phone, this.blood, this.isInfected, this.date_recovery, this.donatePlasma, this.date_plasma)
            if (localStorage.getItem("form-submitted") == null) {
                localStorage.setItem("form-submitted", "1")
            } else {
                let num = parseInt(localStorage.getItem("form-submitted"))
                num = num + 1
                localStorage.setItem("form-submitted", `${num}`)
                if (num > 10) {
                    this.err_bool = true
                    this.err_msg = "Cannot fill more than 10 registrations"
                    return
                }
            }

            if (this.isInfectedDate == "false") {
                this.date_recovery = ""
            }
            if (this.isIDonateDate == "false") {
                this.date_plasma = ""
            }

            let phoneno = /^\d{10}$/;
            if ((this.phone.match(phoneno))) {
            } else {
                alert("Wrong phone number, please enter a 10 digi number without +91");
                return;
            }


            let data = JSON.stringify({
                "name": this.name,
                "email": this.email,
                "age": this.age,
                "phone": this.phone,
                "isDonated": `${this.isIDonateDate}`,
                "isInfected": `${this.isInfectedDate}`,
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
                .then(response => response.text())
                .then((data) => {
                    console.log(data)
                    window.location.pathname = "../../index.html"
                })
                .catch(() => {
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
            if (e == 1) {
                this.isInfectedDate = "true"
            } else {
                this.isInfectedDate = "false"
            }
        },
        donateDate: function (e) {
            if (e == 1) {
                this.isIDonateDate = "true"
            } else {
                this.isIDonateDate = "false"
            }
        }
    }

})