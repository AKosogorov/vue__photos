<template>
  <v-container>
    <FormAddPhoto 
      v-if="photos.length < 11"
      @addPhoto="addPhoto"
    />
    <div v-else>
      Галерея полная
    </div>

    <!-- Без Vuex -->
    <!-- @openPhoto="openPhoto"   -->
    <v-row>
      <Photo 
      v-for="photo of $store.getters.getAllPhotos" :key="photo.id"
      :photo="photo"
      />
    </v-row>
    <!-- без Vuex -->
    <!-- :photo="currentPhoto"  v-model="modalVisible" -->
    <ModalPhoto  />
  </v-container>
</template>

<script>
import Photo from '@/components/photo/Photo';
import FormAddPhoto from '@/components/photo/FormAddPhoto'
import ModalPhoto from '@/components/photo/ModalPhoto';
import { mapActions } from 'vuex';

export default { 

  components: {
    Photo,
    FormAddPhoto,
    ModalPhoto,
  },

  data: () => ({
    photos: [],

    // без Vuex
    // currentPhoto: {},
    // modalVisible: false
  }),

  mounted() {
    this.fetchPhotos()

    // без mapActions
    // this.$store.dispatch('fetchPhotos')

    // получение фото без Vuex
    // this.fetchTodo();
  },

  methods: {
    ...mapActions(['fetchPhotos']),

    addPhoto(photo) {
      this.photos.push(photo);
    },
    openPhoto(photo) {
      this.currentPhoto = photo;
      this.modalVisible = true;
    }

    // получение фото без Vuex

    // fetchTodo() {
    //   this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
    //   .then(res => this.photos = res.data);
    // },
  },
};
</script>

<style>

</style>