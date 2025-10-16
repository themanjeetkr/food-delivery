import React from 'react'
import './Home.css'
import Header from '../../Component/Header/Header'
import ExploreMenu from '../../Component/ExploreMenu/ExploreMenu'
import { useState } from 'react'
import FoodDisplay from '../../Component/FoodDisplay/FoodDisplay'
import AppDownload from '../../Component/AppDownload/AppDownload'


const Home = () => {
  const [category, setcategory] = useState("ALL")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setcategory={setcategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
      
    </div>
  )
}

export default Home
