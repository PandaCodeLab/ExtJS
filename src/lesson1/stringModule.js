function* getWords(string) {
  const str_trimmed = string.trim()
  let word = ''
  let index = 0
  if (str_trimmed.length) {
    for (let char of str_trimmed) {
      index++
      if (char === ' ') {
        yield word
        word = ''
      } else {
        word += char
        if (index === str_trimmed.length) yield word
      }
    }
  }
}

function wordsCount(string) {
  const str_trimmed = string.trim()
  let words = 0
  if (str_trimmed.length) {
    words++

    for (let symb of str_trimmed) {
      if (symb === ' ') {
        words++
      }
    }
    return words
  } else {
    return words
  }
}

export default { getWords, wordsCount }
