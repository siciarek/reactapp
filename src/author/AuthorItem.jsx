import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import BackToListIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

import {fetchAuthorItem} from './AuthorActions'

import Header from '../app/Header'
import Spinner from '../app/Spinner'

class AuthorItem extends React.Component {

  listRoute = '/authors'

  constructor(props) {
    super(props);
    this.props.dispatch(fetchAuthorItem(this.props.params.id))
  }

  render() {
    const style = {
      display: this.props.fetching === true ? 'block' : 'none',
    }

    return (
      <div className="container">
        <Header icon="mic" title={this.props.current.description} style={style} />
        <pre className="song">{this.props.current.info}</pre>
        <FloatingActionButton className="button-fixed-bottom-right" containerElement={<Link to={this.listRoute}/>}>
          <BackToListIcon />
        </FloatingActionButton>
        <Spinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    fetching: store.author.fetching,
    current: store.author.current,
  }
})(AuthorItem);