import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchTestList} from './TestActions'

class TestList extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {
    const {items} = this.props

    return <div>
      <h1>Test List</h1>
      <pre>
        {JSON.stringify(this.props.items, null, 4)}
      </pre>
    </div>
  }
}

// export default TestList

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.artist.items,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    init: bindActionCreators(fetchTestList, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestList)