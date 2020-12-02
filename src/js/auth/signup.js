new Vue({
    el: "#signup-form",
    data: {
        // name : "",
        email: "",
        // phone: "",
        password: "",
        confirm_password: "",
        msg: "msg",
        msg_bool: false,
        err_bool: false,
        err_msg: "msg"
    },
    methods: {
        func_signup: function () {
            this.err_bool = false
            this.err_msg = ""
            this.msg_bool = false
            this.msg_msg = ""
            if (this.password != this.confirm_password) {
                this.err_bool = false
                this.err_msg = "Passwords do not match"
                return
            } else if (this.password.length < 8) {
                this.err_bool = false
                this.err_msg = "password should be bigger than 8 characters"
                return
            }
            this.msg_bool = true
            this.msg = "Please wait, this may take 15-20 seconds sometimes :|"
            let data = JSON.stringify({ "username": `${this.email}`, "password": `${this.password}` })
            let urlRegister = "http://jivaandaan.herokuapp.com/plasma/api/register/"
            let urlLogin = "http://jivaandaan.herokuapp.com/plasma/api/login/"
            fetch(urlRegister, {
                method: 'post',
                headers: {
                    "Content-type": "application/json"
                },
                body: data
            }).then((resp) => {
                if (resp.status == 400) {
                    this.err_bool = true
                    this.err_msg = "User already exists, try again with different credentials"
                    return
                }
                fetch(urlLogin, {
                    method: 'post',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: data
                }).then(data => data.text()).then((resp) => {
                    let token = JSON.parse(resp)
                    localStorage.setItem("auth-token", token.token)
                    alert("Success !!")
                    window.location.pathname = "/index.html"
                }).catch((error) => {
                    console.log(error)
                    alert('Request failed', error);
                });
            }).catch((error) => {
                console.log(error)
                alert('Request failed', error);
            });
        }
    }
})

// let phoneno = /^\d{10}$/;
// if ((this.phone.match(phoneno))) {
// } else {
//     alert("Wrong phone number, please enter a 10 digi number without +91");
//     return;
// }