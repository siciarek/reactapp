import React from 'react'
import IconAdd from 'material-ui-icons/Add'
import {AppHeader, AppSpinner, AppList, AppFloatingActionButton} from '../../app/components'

class LyricsList extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      selectedItem: 0,
    }
  }

  componentWillMount() {
    this.props.init()
  }

  generateActions = (id, handleRemoval) => {
    return {
      show: () => this.props.router.push(`/lyrics/${id}`),
      edit: () => this.props.router.push(`/song/${id}/edit`),
      remove: handleRemoval,
    }
  }

  render() {

    return (
      <div>
        <AppHeader title="Lyrics"/>
        <AppSpinner/>
        <AppFloatingActionButton icon={<IconAdd/>} action={() => this.props.router.push("/song/add")}/>
        <AppList
          primaryTextIndexes={['title']}
          secondaryTextIndexes={['genre.name', 'firstPublishedAt']}

          removeItemFunction={id => this.props.removeItem(id)}
          selectFunction={id => this.setState({selectedItem: id})}
          generateActions={this.generateActions}

          selectedItem={this.state.selectedItem}
          items={this.props.items}
          editable={this.props.authenticated}
        />
      </div>
    )
  }
}

export default LyricsList