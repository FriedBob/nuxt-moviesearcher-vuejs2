export default {
  install(Vue) {
    Vue.prototype.$loadImage = src => {
      return new Promise(resolve => {
        if (process.server){  // 현재 SSR 라면
          resolve()
          return
        } // resolve로 기다리지않고 다음코드로 넘어가게 한 후 client 사이드에서 동작하도록
        const img = document.createElement('img') // SSR에서는 document를 제대로 인식하지 못한다 (위의 예외처리의 이유)
        img.src = src
        img.addEventListener('load', () => {
          resolve()
        })
      })
    }
  }
}
