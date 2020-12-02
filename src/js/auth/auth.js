

new Vue({
    el: "#auth-form",
    data: {},
    methods: {
        onCall: function () {
            if (localStorage.getItem("auth-token") != null) {
                alert("already logged in")
                window.location.pathname = "../../index.html"
            }
        }
    }
})