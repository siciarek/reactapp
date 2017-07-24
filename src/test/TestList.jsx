import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {fetchTestList} from './TestActions'

import {Table, TableHead, TableBody, TableRow, TableCell, Checkbox} from 'material-ui'

class TestList extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  onSelectAllClick = (event, id) => {
    console.log(event, id)
  }

  handleClick = (event, id) => {
    console.log(event, id)
  }

  handleKeyDown = (event, id) => {
    console.log(event, id)
  }

  render() {
    const {items} = this.props

    return <Table>
      <TableHead>

        <TableRow>
          <TableCell checkbox>
            <Checkbox onChange={this.onSelectAllClick}/>
          </TableCell>
          <TableCell numeric>#</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>First name</TableCell>
          <TableCell>Last name</TableCell>
          <TableCell>Info</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {
          this.props.items.map((item, index) => {
            return <TableRow hover
                             key={item.id}
                             tabIndex="-1"
                             onClick={event => this.handleClick(event, item.id)}
                             onKeyDown={event => this.handleKeyDown(event, item.id)}
            >
              <TableCell checkbox>
                <Checkbox/>
              </TableCell>
              <TableCell numeric>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.firstName}</TableCell>
              <TableCell>{item.lastName}</TableCell>
              <TableCell>{item.info}</TableCell>
            </TableRow>
          })
        }
      </TableBody>
    </Table>
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