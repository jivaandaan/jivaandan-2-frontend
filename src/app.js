new Vue({

    el : "#index",
    data : {
        auth : true,
    },
    methods : {
        func_donor : function() {
            if (localStorage.getItem("auth-token") == null) {
                window.location.pathname = "/html/auth.html"
            } else {
                window.location.pathname = "/html/donorForm.html"
            }
        },
        func_rece : function() {
            if (localStorage.getItem("auth-token") == null) {
                window.location.pathname = "/html/auth.html"
            } else {
                window.location.pathname = "/html/receipent.html"
            }
        },
        checkAuth : function () {
            if (localStorage.getItem("auth-token") == null) {
                this.auth = true
            } else {
                this.auth = false
            }            
        },
        logout : function() {
            localStorage.clear()
            window.location.pathname = "./index.html"
        }
    }
})