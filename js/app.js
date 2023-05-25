const {createApp}  = Vue;

createApp ({
    data(){
        return {
            titulo: "CONTADOR",
            numero: 0
        }
    },

    methods:{
        incremento(){
            this.numero += 1
        },
        decremento(){
            this.numero -= 1
        }
    }

}).mount("#app")