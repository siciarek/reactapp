import React from 'react'
import {connect} from 'react-redux'
import {AppHeader, AppSpinner, AppFloatingActionButton} from '../app/components'
import {fetchTestItem} from './TestActions'

class TestItem extends React.Component {

  constructor(props) {
    super(props)
    this.props.dispatch(fetchTestItem(this.props.params.id))
  }

  render() {

    const {description, info} = this.props.current

    return (
      <div className="container">
        <AppHeader title={description} />
        <pre className="text">{info}</pre>
        <AppFloatingActionButton route="/tests"/>
        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    current: store.test.current,
  }
})(TestItem)