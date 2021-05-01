export default class {
  constructor(opt) {
    this.$el = document.querySelector(opt.el)
    this.$template = opt.template
    this.$data = opt.data || null
    this.render()
  }

  render() {
    this.$el.innerHTML = this.$template
  }
}
