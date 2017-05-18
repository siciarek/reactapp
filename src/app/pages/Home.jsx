import React from 'react'
import config from '../config'
import {
  Card,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui'
import {Responsive, WidthProvider} from 'react-grid-layout'

const GridLayout = WidthProvider(Responsive)

function Home(props) {

  const {appName, appDescription, appPicture} = config

  return (
    <GridLayout
      isDraggable={false}
      isResizable={false}
      margin={[0, 0]}
      containerPadding={[0, 0]}
      // breakpoints = {{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
      breakpoints={{lg: 1000, md: 996, sm: 768, xs: 480, xxs: 0}}
    >
      <Card key={1} data-grid={{x: 3, y: 0, w: 6, h: 2, static: false}}>
        <CardMedia overlay={<CardTitle title={appName} subtitle="Just sing a song"/>}>
          <img src={appPicture} alt="Mircorphone"/>
        </CardMedia>
        <CardText>
          {appDescription}
        </CardText>
      </Card>
    </GridLayout>
  )
}

export default Home
