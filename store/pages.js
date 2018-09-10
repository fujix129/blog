export const state = () => ({
  pages: [
    {
      id: null,
      title: "",
      url_title: "",
      text: "",
      thumbnail_img: "",
      display_flag: null,
      category_id: null,
      create_date: null
    }
  ]
})

export const mutations = {
  setInfos(state, pages) {
    state.pages = pages
  }
}

export const getters = {
  pages: state => state.pages
}

export const actions = {
  async get(context, index) {
    await this.$axios
      .get('/diaries/' + index)
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
