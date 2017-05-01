import React from 'react'
import config from '../config'


import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card'

import {Responsive, WidthProvider} from 'react-grid-layout'
const GridLayout = WidthProvider(Responsive)

class Home extends React.Component {

  render() {
    return (
      <GridLayout
        isDraggable={false}
        isResizable={false}
        margin={[0, 0]}
        containerPadding={[0, 0]}
      >
        <Card key={1} data-grid={{x: 3, y: 0, w: 6, h: 2, static: false}}>
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
