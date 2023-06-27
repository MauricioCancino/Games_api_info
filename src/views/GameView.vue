<template>
    
    <div v-if="game!=null" class="card">
        <div>
        <h1>{{game.name}}</h1>
        <img :src="game.background_image" class="card-img" alt="..." />
        </div>
        <h5>
            {{game.description_raw}}
        </h5>
        <div class="button">
        <button @click="$router.push(`/`)" class="btn btn-primary">Volver</button>
        <button @click="redirectTo(game.id)" class="btn btn-primary">Opinar</button>
        </div>
        </div>
</template>

<script>
export default {
    name: 'game-name',
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
    },
    redirectTo(id){ 
        //aquí puedo llamar métodos para validar o validar antes de redireccionar.
       this.$router.push(`/opinions/${id}`)
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
    .card {
        background-color: transparent;
        padding: 100px;
        display: flex;
        align-items: baseline;
        justify-content: center;
        color: white;
    }    

    h1{
        margin-bottom: 25px;
    }

    h5 {
        color:rgb(255, 225, 0);
        background-color:rgba(107, 35, 152, 0.789) ;
        margin-left: 10px;
        margin-top: 50px;
        padding: 16px;
        
    }

    img {
         width: 250px;
        height: 250px;
        display: flex;
        justify-content: center;
    }
    .button {
    display: flex;
    align-self: center;
    padding: 20px;
    }
</style>