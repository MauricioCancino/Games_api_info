<template>
  <div class="home">
    
    <div class="container">
      <h2>Lista de Juegos Disponibles:</h2>

      <Cards :lista="lista"/>
    </div>
  </div>
</template>

<script>

import Cards from "@/components/Cards.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    Cards
  },
  data(){
    return {
      lista: [],

    }
  },
  methods: {
    getInfo () {
      const options = {method: 'GET'};

fetch('https://api.rawg.io/api/games?key=55053cae62804279946a853dff289e63', options)
  .then(response => response.json())
  .then(response => {
    console.log(response.results)
    this.lista=response.results
    console.log(this.lista)
  } )
  .catch(err => console.error(err));
    }
  },
  // lifecycle
  created() {
    this.getInfo()
  }
};
</script>

<style scoped>
h2 {
  margin: 50px;
  padding-left: 25px;
  padding-top: 50px;
  color: whitesmoke;
}

</style>