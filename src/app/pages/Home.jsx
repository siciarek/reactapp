import React from 'react'
import config from '../config'


import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card'

import ResponsiveReactGridLayout from 'react-grid-layout'
const GridLayout = ResponsiveReactGridLayout.WidthProvider(ResponsiveReactGridLayout.Responsive)

class Home extends React.Component {

  render() {
    return (
      <GridLayout
        margin={[0,0]}
        containerPadding={[0,0]}
        isDraggable={false}
        isResizable={false}
      >
        <Card key={1} data-grid={{w: 6, h: 1, x: 3, y: 0}}>
          <CardMedia overlay={<CardTitle title={config.appName} subtitle="Just sing a song"/>}>
            <img src={config.appPicture} alt="Mircorphone"/>
          </CardMedia>
          <CardText>
            {config.appDescription}
          </CardText>
        </Card>
      </GridLayout>
    )
  }
}

export default Home
