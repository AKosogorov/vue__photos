<template>  
    <v-container>
      <v-app-bar
        color="deep-purple accent-4"
        dark
      >
      <v-spacer/>
      <v-btn outliner class="mr-4">
        <router-link to="/">
          Главная 
        </router-link>
      </v-btn>
      <v-btn outliner>
        <router-link to="/photos">
          Фотографии
        </router-link>        
      </v-btn>
      </v-app-bar>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>