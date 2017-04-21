import React from 'react'
import config from '../../config'
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Home extends React.Component {

  render() {

    return (
      <Card>
        <CardMedia overlay={<CardTitle title={config.appName} subtitle="Just sing a song" />}>
          <img src="/images/microphone.jpg" alt="Mircorphone"/>
        </CardMedia>
        <CardText>
          {config.appDescription}
        </CardText>
      </Card>
    )
  }
}

export default Home
