export default ({ app, store }) => {
  // app.$axios.onRequest(config => {
  //   config.headers = store.state.auth.headers
  // })

  app.$axios.interceptors.response.use(
    response => response,
    error => {
      // TODO ここでエラー処理するか迷う
      // ↓ 例: 401が返ってきた場合にsigninにリダイレクトする処理
      // switch (error.response.status) {
      //   case 401:
      //     app.router.push('/signin/user')
      //     break
      // }

      return Promise.reject(error)
    }
  )
}
