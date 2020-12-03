new Vue({

    el : "#donor",
    data : {
        msg: "",
        msg_bool: false,
        err_bool: false,
        err_msg: "",
        name : "",
        email : "",
        age : "",
        phone : "",
        blood : "",
        isInfected : "",
        date_recovery : "",
        donatePlasma : "",
        date_plasma : "",
        auth : true,
    },
    methods : {
        donor_submit :  function() {
            console.log(this.name,this.email,this.age,this.phone,this.blood,this.isInfected,this.date_recovery,this.donatePlasma,this.date_plasma)
        },
        logout : function() {
            localStorage.clear()
            window.location.pathname = "./index.html"
        }
    }

})