let math = {
  sum(x, y) {
    console.log(this)
    return x * y
  },
  mult(x, y) {
    return x / y
  },
}

let person = {
  name: 'Alex',
  age: 30,
  func: () => {},
}

function logPerson(greetings) {
  //console.log(`${greetings}! ${this.name}, возраст ${this.age}`)
}

logPerson.apply(person, ['Хайё'])

function getNum() {
  var test = 123
}

getNum()

for (var i = 1; i < 5; i++) {
  setTimeout(
    function (i) {
      //console.log(i)
    }.bind(null, i),
    1000 * i
  )
}
