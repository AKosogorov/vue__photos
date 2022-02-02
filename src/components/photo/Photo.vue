<template>
  <v-col cols="4">
    <v-card @click="openPhoto">
      <v-card-text>
        <!-- Not Vuex -->
        <!-- :src="photo.url"   -->
        <!-- :src="$store.getters.getCurrentPhoto.url" -->
        <v-img 
          :src="photo.url"     
        />
      </v-card-text>
      <v-card-title>
        {{photo.title}}
      </v-card-title>
    </v-card>      
  </v-col>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    photo: {
      type: Object,
      requered: true
    }
  },

  methods: {
    ...mapMutations(['setCurrentPhoto', 'showModal', 'hideModal']),

    openPhoto() {      
      this.setCurrentPhoto(this.photo);
      this.showModal();
      
      // not ...map
      // this.$store.commit('setCurrentPhoto', this.photo);
      // this.$store.commit('showModal');

      // Без Vuex
      // this.$emit('openPhoto', this.photo)
    },
  },
}
</script>

<style>

</style>