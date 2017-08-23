import React from 'react'
import {List, ListItem, ListItemIcon, ListItemText} from 'material-ui'
import {SortableContainer, SortableElement} from 'react-sortable-hoc'
import {AppHeader, AppSpinner, AppSimpleList} from '../components'

const SortableItem = SortableElement(({data, icon, index}) => {

  return <ListItem button classes={{}} key={index}>
    <ListItemIcon classes={{}}>{icon}</ListItemIcon>
    <ListItemText classes={{}} primary={data.description}/>
  </ListItem>
})

const SortableList = SortableContainer(({items, icon}) => {

  return <List classes={{}}>
    {
      items.map((item, index) => {
        return <SortableItem key={index} index={index} icon={icon} data={item}/>
      })
    }
  </List>
})

class AppSortableList extends React.Component {

  onSortEnd = ({oldIndex, newIndex}) => {
    const {items, model, goto, init, swap} = this.props

    if (oldIndex === newIndex) {
      goto(items[oldIndex].id)
      return
    }

    const src = {index: oldIndex, id: items[oldIndex].id}
    const trg = {index: newIndex, id: items[newIndex].id}

    swap(model, src, trg, init)
  }

  render() {

    if (this.props.sortable === true) {
      const {title, icon, items} = this.props

      return <div>
        <AppHeader title={title}/>
        <AppSpinner/>
        <SortableList
          icon={icon}
          items={items}
          onSortEnd={this.onSortEnd}
          lockAxis="y"
          helperClass="selected-row"
          lockToContainerEdges={true}
          hideSortableGhost={true}
          showCheckboxes={false}
        />
      </div>
    }

    return <AppSimpleList {...this.props}/>
  }
}

export default AppSortableList