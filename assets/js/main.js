/* Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista. */

const { createApp } = Vue;
createApp({
    data(){
        return{
            randomEmails: [],
        }
    },

    mounted(){
        for (let i = 0; i < 10; i++) {
            
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => {
                this.randomEmails.push(response.data.response)
            })
            console.log(this.randomEmails);
        }
    }

}).mount("#app")