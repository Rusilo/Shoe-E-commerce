import Nav from "./Navigation/Nav";
import ProductItems from "./Products/ProductItems";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./App.css"
import { useState } from "react";

//Database
import data from './db/data'


function Interface() {

  // const [darkMode, setDarkMode] = useState(false)
  // const [modeValue, setModeValue] = useState("lightMode")
  
  // function modeButtonChange(event){
  //   if(event.target.value === "lightMode"){
  //     setDarkMode(false)
  //     setModeValue("darkMode")
  //   } else if(event.target.value === "DarkMode"){
  //     setDarkMode(true)
  //     setModeValue("lightMode")
  //   }
  // }
  
  const [selectedCategory, setSelectedCategory] = useState(null)


  //------ Input Filter ------------//
  const [query, setQuery] = useState("")

  const handleInputChange = event => {
    setQuery(event.target.value)
  }


  const filteredItems = data.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1)

  //------------- Radio Filter ------------------

  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }

  //-------------- Button Filter ---------------

  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }

  function filterData(data, selected, query){
    let filteredProducts = data

    //Filtering Input Items
    if(query){
      filteredProducts = filteredItems
    }

    //Selected Filter
    if (selected){
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) => 
        category === selected || color === selected || company === selected || newPrice === selected || title === selected
    )}

    return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice}) => 
    <Card key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}/>)
  }

  const result = filterData(data, selectedCategory, query)

  return (
    <>
      <div>
          <Sidebar handleChange={handleChange}/>
          <Nav query={query} handleInputChange={handleInputChange}/>
          <Recommended handleClick={handleClick}/>
          <ProductItems result={result}/>
        </div> 
    </>
  );
}

export default Interface;
