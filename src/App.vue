<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

body {
  background-image: url("https://www.xtrafondos.com/wallpapers/habitacion-gamer-en-navidad-8941.jpg");
  background-size: 100%;
  background-attachment: fixed;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
background-image {
  height: 20vh;
}

</style>
