new Vue({

    el: "#login-form",
    data: {
        email: "",
        password: "",
        msg: "",
        msg_bool: false,
        err_bool: false,
        err_msg: ""
    },

    methods: {
        func_login: function () {
            this.err_bool = false
            this.err_msg = ""
            this.msg_bool = false
            this.msg_msg = ""
            if (this.email == "" || this.password == "") {
                this.err_bool = true
                this.err_msg = "Fields cannot be empty"
                return
            }
            this.msg_bool = true
            this.msg = "Please wait, this may take 15-20 seconds sometimes :|"
            let data = JSON.stringify({ "username": `${this.email}`, "password": `${this.password}` })
            let url = "http://jivaandaan.herokuapp.com/plasma/api/login/"
            fetch(url, {
                method: 'post',
                headers: {
                    "Content-type": "application/json"
                },
                body: data
            }).then(data => {
                if (data.status == 400) {
                    this.msg_bool = false
                    this.msg_msg = ""
                    this.err_bool = true
                    this.err_msg = "Credentails not found"
                } else {
                    return data.text()
                }
            }).then(data => {
                let token = JSON.parse(data)
                localStorage.setItem("auth-token", token.token)
                alert("Success !!")
                window.location.pathname = "/index.html"
            }).catch((err) => {
                console.log(err)
                this.msg_bool = false
                this.msg_msg = ""
                this.err_bool = true
                this.err_msg = "Error sending request"
            });
        }
    }
})