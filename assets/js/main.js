/* Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista. */

const { createApp } = Vue;
createApp({
    data(){
        return{
            randomEmails: [],
            maxEmails : 10,
        }
    },
    methods: {
        getEmails(){
            const url = "https://flynn.boolean.careers/exercises/api/random/mail"
            for (let i = 0; i < this.maxEmails; i++) {
                
                axios
                .get(url)
                .then(response => {
                    this.randomEmails.push(response.data.response)
                })
                console.log(this.randomEmails);
            }

        }
    },

    mounted(){
        this.getEmails()
    }

}).mount("#app")