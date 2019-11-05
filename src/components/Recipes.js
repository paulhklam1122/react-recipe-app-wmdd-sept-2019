import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/styles'
import RecipeCard from './RecipeCard'

const getStyles = makeStyles(theme => ({
  root: {
    margin: '5em 0'
  }
}))

const Recipes = (props) => {
  const classes = getStyles()
  return (
    <div className='container'>
      <Grid container className={classes.root} spacing={5}>
        {props.recipes.map(recipe => {
          const { recipe_id, title, image_url, publisher } = recipe
          return (
            <Grid item xs={3}>
              <RecipeCard
                key={recipe_id}
                id={recipe_id}
                title={title}
                imageUrl={image_url}
                publisher={publisher}
              />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Recipes
