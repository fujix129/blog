export const state = () => ({
  menuPages: [
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
  ],
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
  setMenus(state, pages) {
    state.menuPages = pages
  },

  setInfos(state, pages) {
    state.pages = pages
  }
}

export const getters = {
  pages: state => state.pages,
  menuPages: state => state.menuPages
}

export const actions = {
  async getAll(context) {
    await this.$axios
      .get('/diaries/')
      .then(response => {
        // context.dispatch('status/success', {}, { root: true }) //別storeアクセス用メモ
        context.dispatch('getMenuSuccess', response)
      })
      .catch(() => {})
  },

  async get(context, index) {
    await this.$axios
      .get('/diaries/' + index)
      .then(response => {
        // context.dispatch('status/success', {}, { root: true }) //別storeアクセス用メモ
        context.dispatch('getInfoSuccess', response)
      })
      .catch(() => {})
  },

  getMenuSuccess(context, response) {
    context.commit('setMenus', response.data)
  },

  getInfoSuccess(context, response) {
    context.commit('setInfos', response.data)
  }

}
