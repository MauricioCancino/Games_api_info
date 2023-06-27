<template>
    <div class="opinion">
        
         <div v-if="game!=null" class="form">
            <h2>Escribe tu opinión para el juego: {{game.name}} </h2>
            <textarea name="Opinion" id="" cols="40" rows="10" placeholder="Escribe tus comentarios aquí..."></textarea>
            <button class="btn btn-primary" type="submit">Enviar</button>
            <button @click="$router.push(`/`)" class="btn btn-primary">Volver</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'opinion-name',
    props: {
         id: {
            type:String,
            required:true
        }
    },
    data: function(){
        return {
            game: null,
        }
    },
    // computed: {},
    methods: {
        
        getInfo () {
      const options = {method: 'GET'};

    fetch(`https://api.rawg.io/api/games/${this.id}?key=55053cae62804279946a853dff289e63`, options)
    .then(response => response.json())
    .then(response => {
    console.log(response)
    this.game=response
  } )
  .catch(err => console.error(err));
    }
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created() {
    this.getInfo()
  }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .opinion {
        height: 100vh;
    }

    .form {
        padding: 125px;
        color: whitesmoke;
    }

    h2 {
        margin-bottom: 25px;
    }
</style>