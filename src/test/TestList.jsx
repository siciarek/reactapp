import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {SortableContainer, SortableElement} from 'react-sortable-hoc'
import {List, ListItem} from 'material-ui'
import ListItemIcon from 'material-ui-icons/Face'
import AppHeader from '../app/components/AppHeader'
import AppSpinner from '../app/components/AppSpinner'
import {fetchTestList, swapTwoTestListItems} from './TestActions'


const SortableItem = SortableElement((props) => {

  const {id, name} = props.data

  return <ListItem
    leftIcon={<ListItemIcon />}
    containerElement={<Link to={`tests/${id}`}/>}
    key={id}
    primaryText={name}
  />
})

const SortableList = SortableContainer(({items}) => {
  return (
    <List>
      {
        items.map((item, index) => {
          return <SortableItem key={item.id} index={index} data={item}/>
        })
      }
    </List>
  )
})

class TestList extends React.Component {

  componentWillMount() {
    this.props.dispatch(fetchTestList())
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    const src = {index: oldIndex, id: this.props.items[oldIndex].id}
    const trg = {index: newIndex, id: this.props.items[newIndex].id}
    this.props.dispatch(swapTwoTestListItems(src, trg))
  }

  render() {

    return (
      <div>
        <AppHeader title="Tests"/>
        <SortableList
          items={this.props.items}
          lockAxis="y"
          helperClass="selected-row"
          lockToContainerEdges={true}
          hideSortableGhost={true}
          onSortEnd={this.onSortEnd}
          showCheckboxes={false}
        />
        <AppSpinner/>
      </div>
    )
  }
}

export default connect((store) => {
  return {
    items: store.test.items,
  }
})(TestList)