let rect = {
  _private: {
    square: 0,
    width: 0,
    height: 0,
  },
  calcSquare() {
    this._private.square = this._private.width * this._private.height
  },
}

Object.defineProperty(rect, 'square', {
  get() {
    return this._private.square
  },
})

Object.defineProperty(rect, 'width', {
  get() {
    return this._private.width
  },
  set(val) {
    this._private.width = val
    this.calcSquare()
  },
})

Object.defineProperty(rect, 'height', {
  get() {
    return this._private.height
  },
  set(val) {
    this._private.height = val
    this.calcSquare()
  },
})

rect.width = 100
rect.height = 2
console.log(rect)
