import React from 'react'
import config from '../config'
import Card, {CardContent, CardMedia} from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const Home = () => {

  const {appName, appDescription, appPicture} = config

  return <Card>
      <CardContent>
        <Typography type="headline" component="h2">
          {appName}
        </Typography>
        <Typography component="p">
          {appDescription}
        </Typography>
      </CardContent>
    </Card>
}

Home.defaultProps = {}

export default Home
