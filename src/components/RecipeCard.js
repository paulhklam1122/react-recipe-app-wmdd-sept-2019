import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'

const getStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%'
  }
}))

const RecipeCard = props => {
  const classes = getStyles()
  const { id, title, imageUrl, publisher } = props
  return (
    <Card key={id}>
      <CardHeader
        title={title}
        subheader={publisher}
      />
      <CardMedia
        className={classes.media}
        image={imageUrl}
        title={title}
      />
      <CardActions>
        <Button size='small' color='primary'>
          <Link to={{
            pathname: `/recipe/${id}`,
            state: { recipe: title }
          }}
          >
            Learn More
          </Link>
        </Button>
      </CardActions>
    </Card>
  )
}

export default RecipeCard
