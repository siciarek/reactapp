import React from 'react'
import config from '../config'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Home extends React.Component {

  render() {

    return (
      <Card>
        <CardMedia overlay={<CardTitle title={config.appName} subtitle="Just sing a song" />}>
          <img src="/images/microphone.jpg" />
        </CardMedia>
        <CardText>
          {config.appDescription}
        </CardText>
      </Card>
    )
  }
}

export default Home
