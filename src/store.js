import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    images: {},
    imageDetails: {},
    api_url: "https://api.pexels.com/v1/search",
    api_key: "563492ad6f917000010000010fe53b3d653144b7b8045128518a8602"
  },
  mutations: {
    setImage(state, payload) {
      state.images = payload;
    },
    setImageDetails(state, payload) {
      state.imageDetails = payload;
    }
  },
  actions: {
    async getImages({ commit, state }, { url }) {
      await axios({
        method: "get",
        url,
        headers: {
          Authorization: `${state.api_key}`
        }
      })
        .then(({ data }) => {
          commit("setImage", data);
          // eslint-disable-next-line no-console
          console.log(data);
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.error(err.response.data);
        });
    }
  }
});
