import React from 'react'
import PropTypes from 'prop-types'
import {List, Dialog, FlatButton} from 'material-ui'
import AppListItem from './AppListItem'

export default class AppList extends React.Component {

  static propTypes = {
    editable: PropTypes.bool.isRequired,
    selectFunction: PropTypes.func.isRequired,
    removeItemFunction: PropTypes.func.isRequired,
    generateActions: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    })).isRequired,
    selectedItem: PropTypes.number.isRequired,
    primaryTextIndexes: PropTypes.arrayOf(PropTypes.string).isRequired,
    secondaryTextIndexes: PropTypes.arrayOf(PropTypes.string).isRequired,
    primaryTextSeparator: PropTypes.string.isRequired,
    secondaryTextSeparator: PropTypes.string.isRequired,
  }

  static defaultProps = {
    editable: false,
    primaryTextSeparator: ' ',
    secondaryTextSeparator: '/',
    secondaryTextIndexes: [],
  }

  constructor(props) {
    super(props)

    this.state = {
      removalInProgress: false,
      selectedItem: 0,
    }
  }

  openRemovalConfirmationDialog = () => {
    this.setState({removalInProgress: true})
  }

  closeRemovalConfirmationDialog = () => {
    this.setState({removalInProgress: false})
  }

  generateList = () => {

    const items = this.props.items.map((item) => {

      const actions = this.props.generateActions(item.id, () => {
        this.setState({selectedItem: item.id}, this.openRemovalConfirmationDialog)
      })

      const primaryText = this.props.primaryTextIndexes.map((e) => {
        return item[e]
      }).join(this.props.primaryTextSeparator)

      const st = this.props.secondaryTextIndexes.map((e) => {
        return item[e]
      })
      const secondaryText = st.length > 0 ? st.join(this.props.secondaryTextSeparator) : null

      return <AppListItem
        key={item.id}
        id={item.id}
        primaryText={primaryText}
        secondaryText={secondaryText}
        selectFunction={this.props.selectFunction}
        toolbarVisible={this.props.selectedItem === item.id}
        editable={this.props.editable}
        actions={actions}
      />
    })

    return (<List>{items}</List>)
  }

  generateRemovalConfirmationDialog = () => {
    return <Dialog
      title="Removal confirmation"
      modal={true}
      open={this.state.removalInProgress}
      actions={[
        <FlatButton label="No" onTouchTap={this.closeRemovalConfirmationDialog}/>,
        <FlatButton label="Yes" onTouchTap={() => {
          this.closeRemovalConfirmationDialog()
          this.props.removeItemFunction(this.state.selectedItem)
        }}/>,
      ]}
    >
      Are you sure you want to remove it?
    </Dialog>
  }

  render() {
    return <div>
      {this.generateList()}
      {this.generateRemovalConfirmationDialog()}
    </div>
  }
}
