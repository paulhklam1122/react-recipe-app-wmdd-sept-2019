import React, { Component } from 'react'
import { RECIPE } from '../config/api_config'
import { getRecipe } from '../services/api'
import Recipe from '../components/Recipe'

class RecipeContainer extends Component {
  state = {
    recipe: RECIPE
  }

  // componentDidMount() {
  //   const { recipe } = this.state
  //   this.fetchData(recipe)
  // }

  // fetchData = (title) => {
  //   getRecipe(title).then(recipe => {
  //     this.setState({
  //       recipe: recipe
  //     })
  //   })
  // }

  render() {
    const { recipe } = this.state
    const { title, image_url, publisher, publisher_url } = recipe
    return (
      <Recipe
        title={title}
        imageUrl={image_url}
        publisher={publisher}
        publisherUrl={publisher_url}
      />
    )
  }
}

export default RecipeContainer
