import React from 'react'

export default class Header extends React.Component {

  render() {

    const {title} = this.props;

    return (
      <div>
        <h1 className={'page-header'}>{title}</h1>
      </div>
    )
  }
}
