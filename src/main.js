import mult from './lesson2'
import VueClass from './lesson2/vue-getters'

window.addEventListener('load', () => {
  new VueClass({
    el: '.vue-getters-1',
    template: `<div>Hi!</div>`,
  })
})
