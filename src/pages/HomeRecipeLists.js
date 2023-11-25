import React, { useState, useEffect } from 'react'
import Error from '../components/FetchError'
import ListItem from '../components/ListItems'
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnchorLink from 'react-anchor-link-smooth-scroll'; // add this to navigate inside the same page
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import '../assets/style/homerecipelists.css';
// to craete in-page navigation we have to install the following library
/*
npm i react-anchor-link-smooth-scroll
to check if it installed or not check package.json
*/
const HomeRecipeLists = () => {
  const [meals, setMeals ]=useState([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(20); //how many item will be fetch on each api
  useEffect(()=>{
    console.log("fetch data");
    fetchRecipe('');
  }, [])
  const fetchRecipe= async (queryDefault)=>{
    setLoading(true);
    try{
      const response = await fetch(
        "https://api.spoonacular.com/recipes/random?apiKey=58419ffcb3a048df84e2911550bc2e27&number=100", //100 is the maximum random item to fetch
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await response.json();
      console.log(data);
      setMeals(data.recipes);
    }catch(error){
      console.log("hi");
      <Error />
    }
    setLoading(false);
    
  }
  const handleClick=()=>{
    setVisible(visible+20); // we are fetching 10000 records, we are using slicing, so when user click more slice will be previous visible+20
  }
  return (
    <>
      <div className="bg">
        <div className="container">
          <p className="title">
            Welcome to the biggest{" "}
            <span style={{ color: "yellow" }}>food recipe</span> website
          </p>
          {/* using AnchorLink and id we can navigate inside the same page */}
          <AnchorLink href="#recipes">
            <button>Discover Recipes</button>
          </AnchorLink>
        </div>
      </div>
      <div className="categories">
        <FontAwesomeIcon icon={faPizzaSlice} />
      </div>
      <div className="home-recipes" id="recipes">
        {loading ? (
          <Segment>
            <Dimmer active inverted>
              <Loader size="medium"></Loader>
            </Dimmer>

            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Segment>
        ) : (
          meals.slice(0, visible).map((meal) => {
            return <ListItem key={meal.id} meal={meal} />;
          })
        )}
      </div>
      {visible < 100 && (
        <div className="btn-container">
          <button onClick={handleClick} className="see-more-btn">
            Show more
          </button>
        </div>
      )}
    </>
  );
}

export default HomeRecipeLists
