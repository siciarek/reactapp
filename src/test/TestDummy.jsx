import React from 'react'


class TestDummy extends React.Component {

  render() {

    function double(numbers, res = []) {
      const [head, ...rest] = numbers
      return rest.length > 0 ? double(rest, [...res, 2 * head]) : [...res, 2 * head]
    }

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    console.log(JSON.stringify(numbers))
    console.log(JSON.stringify(double(numbers)))

    return null
  }
}

export default TestDummy