import React from 'react'
import TopSection from '../TopSection/TopSection'
import Search from '../Search/Search'
import PopularCoctail from '../PopularCoctails/PopularCoctail'
import PopuLarIngredient from '../PopuLarIngredient/PopuLarIngredient'
import LatestDrinks from '../LatestDrinks/LatestDrinks'
import RandomCocktail from '../RandomCoctail/RandomCoctail'
import RandomIngredient from '../RandomIngredients/RandomIngredient'

function Home() {
  return (
    <div>
     <TopSection/>
     <Search/>
     <PopularCoctail/>
     <PopuLarIngredient/>
     <LatestDrinks/>
     <RandomIngredient/>
   <RandomCocktail/>
    </div>
  )
}

export default Home
