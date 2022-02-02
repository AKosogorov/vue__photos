<template>

  <!-- Без Vuex -->
  <!-- v-model="modalVisible" -->

  <v-dialog
    v-model="$store.getters.getModalVisible"
    max-width="600"
    @click:outside="$store.commit('hideModal')"
  >
    <v-card>
      <v-card-text>
        <!-- Not Vuex -->
        <!-- :src="photo.url" -->
        <v-img 
          :src="$store.getters.getCurrentPhoto.url"          
        />
      </v-card-text>
      <v-card-title>
        {{full_title}}
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
  full_title() {
    return `Название картинки - ${this.$store.getters.getCurrentPhoto.title}`
  }
}

  // без Vuex
  // props: {
  //   photo: {
  //     type: Object,
  //     required: true
  //   },    
  //   value: {
  //     type: Boolean,
  //     default: false
  //   }
  // },

  // data: () => ({
  //   modalVisible: false
  // }),

  // created() {
  //   this.modalVisible = this.value;
  // },

  // watch: {
  //   value(newValue) {
  //     this.modalVisible = newValue
  //   },
  //   modalVisible(newVisible) {
  //     this.$emit('input', newVisible)
  //   }
  // },
}
</script>

<style>

</style>