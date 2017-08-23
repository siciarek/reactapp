import React from 'react'

class TestDummy extends React.Component {

  render() {

    const rx = /Ola/g
    const phrase = 'Kacaraba Ola Ola Lala'

    console.log(phrase.match(/Ola/g))
    console.log(/Ola/g[Symbol.match](phrase))

    return null

    const tag = (format, first, last) => {
      console.log({first, last})
      console.log(String.raw(format, first, last))
    }

    const firstName = 'John'
    const lastName = 'Doe'

    tag`His first name was ${firstName} and his lastname was ${lastName}`

    // tag`His first name was Chris and his lastname was Norman`

    const multi = (numbers, ret = [], factor = 2) => {
      const [head, ...tail] = numbers
      return tail.length > 0
        ? multi(tail, [...ret,  factor * head])
        : [...ret,  factor * head]
    }

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    console.log(JSON.stringify(numbers))
    console.log(JSON.stringify(multi(numbers)))

    return null
  }
}

// export { foo, bar } from 'src/other_module';

export default TestDummy
