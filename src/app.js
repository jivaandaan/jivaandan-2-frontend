new Vue({

    el : "#start-form",
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
        }
    }
})