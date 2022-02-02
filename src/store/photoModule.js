import axios from "axios";

export default {
  state: {
    photos: [],
    modalVisible: false,
    currentPhoto: {}
  },

  mutations: {
    setPhotos(state, payload) {
      state.photos = payload
    },

    showModal(state) {
      state.modalVisible = true;
    },

    hideModal(state) {
      state.modalVisible = false;
    },

    setCurrentPhoto(state, payload) {
      state.currentPhoto = payload
    },
  },

  getters: {
    getAllPhotos(state) {
      return state.photos
    },

    getModalVisible(state) {
      return state.modalVisible
    },

    getCurrentPhoto(state) {
      return state.currentPhoto
    },
  },

  actions: {
    fetchPhotos(context) {
      axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
        .then(res => context.commit('setPhotos', res.data));
    }
  }
}
// state - хранилище данных
// mutations - синхронные function которые изменяют state
// getter - аналог computed свойств (должны возвращать результат вычислений)
// actions - async function которые работают с внешним API