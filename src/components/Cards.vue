<template>
<div class="container row">
  <div class="card" style="width: 18rem" v-for="game in lista" :key="game.id">
    <img :src="game.background_image" class="card-img" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{game.name}}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Rating: {{game.rating}}</li>
      <li class="list-group-item">Released: {{game.released}}</li>
      <li class="list-group-item">Updated: {{game.updated}}</li>
    </ul>
    <div>
      <button @click="$router.push(`/game/${game.id}`)" type="button" class="btn btn-primary">Ver más</button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "card-name",
  props: {
    lista: {
        type: Array,
        required:true
    }
  },
  data: function () {
    return {};
  },
  // computed: {},
  methods: {
    consola () {
        console.log(this.lista)
    }
  }
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
button {
    padding: 5px;
    margin: 15px;
  }
  .container {
    gap: 20px;
    justify-content: center;
  }

  img {
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    padding-top: 25px;
    padding-left: 10px;
  }
</style>