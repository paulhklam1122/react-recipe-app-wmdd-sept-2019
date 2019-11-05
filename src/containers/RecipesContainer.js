import React, { Component } from 'react'

import { RECIPES } from '../config/api_config'
import { getRecipes } from '../services/api'

import Recipes from '../components/Recipes'

class RecipesContainer extends Component {
  state = {
    recipes: RECIPES
  }

  fetchData = (recipeName) => {
    getRecipes(recipeName).then(recipes => {
      this.setState({
        recipes: recipes
      })
    })
  }

  render() {
    const { recipes } = this.state
    return (
      <div>
        <Recipes
          recipes={recipes}
        />
      </div>
    )
  }
}

export default RecipesContainer
