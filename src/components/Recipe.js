import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/styles'

import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const getStyles = makeStyles(theme => ({
  root: {
    marginTop: '20em'
  }
}))

const Recipe = ({ title, imageUrl, publisher, publisherUrl }) => {
  const classes = getStyles()
  return (
    <Container fixed className={classes.root}>
      <Card>
        <CardMedia
          alt={title}
          component='img'
          height='140'
          image={imageUrl}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' comoponent='h2'>
            {title}
          </Typography>
          <Typography gutterBottom variant='body2' comoponent='p'>
            Publisher: {publisher}
          </Typography>
          <Typography gutterBottom variant='body2' comoponent='p'>
            Website: {publisherUrl}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' color='primary'
          >
            <Link to={{
              pathname: '/',
              state: { recipe: title }
            }}
            >
              Go Back Home
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}

export default Recipe
