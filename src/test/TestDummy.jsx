import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Table, TableHead, TableBody, TableRow, TableCell, TableSortLabel, Checkbox} from 'material-ui'
import {AppSpinner, AppHeader} from '../app/components'
import {debounce} from 'lodash'

import YTSearch from 'youtube-api-search'

function* go() {
  yield 8456
  yield 'ABCD'
  yield [1, 2, 3, 4]
}

function* xgo() {
  yield* 8456 // nie zadziała
  yield* 'ABCD'
  yield* [1, 2, 3, 4]
}

function rungo() {
  let result = []

  let x = null

  result.push('go() {}')
  let iterator = go()
  do {
    x = iterator.next()
    result.push(x)
  } while (x.done === false)

  result.push('xgo() {}')
  iterator = xgo()
  do {
    x = iterator.next()
    result.push(x)
  } while (x.done === false)

  return result
}

const API_KEY = 'AIzaSyD_tTrRai6XYHPXK9qFka3zBJ5-AMzx3Ok'

class TestDummy extends React.Component {

  componentWillMount() {
    YTSearch({key: API_KEY, term: 'james brown'}, data => {
      this.setState(data)
    })
  }

  render() {

    const clickButton = debounce(() => {console.log('Abażur')}, 500)

    return (
      <div>
        <button onClick={clickButton}>Click</button>
        <pre>
          {JSON.stringify(this.state, null, 4)}
        </pre>
      </div>
    )
  }
}

// export default TestList

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TestDummy)