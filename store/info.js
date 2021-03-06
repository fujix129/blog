export const state = () => ({
  info: {
    title: ""
  }
})

export const mutations = {
  setInfos(state, info) {
    state.info = {
      title: info[0].title
    }
  }
}

export const getters = {
  info: state => state.info
}

export const actions = {
  async get(context) {
    await this.$axios
      .get('/infos')
      .then(response => {
        // context.dispatch('status/success', {}, { root: true }) //別storeアクセス用メモ
        context.dispatch('getInfoSuccess', response)
      })
      .catch(() => {})
  },

  getInfoSuccess(context, response) {
    context.commit('setInfos', response.data)
  }

}
