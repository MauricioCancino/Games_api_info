<template>
    <div class="not-found">
         <button @click="$router.push(`/`)" class="btn btn-primary">Volver</button>
    </div>
</template>

<script>
export default {
    name: 'error-name',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>

.not-found {
    height: 100vh;
    background-image: url("@/assets/error.png");
     background-size: 100%;
    background-attachment: fixed;
    align-items: center;
    justify-content: center;
    display: flex;
}
   button {
    margin-top: 150px;
    background-color:rgb(174, 20, 230);
   }
</style>