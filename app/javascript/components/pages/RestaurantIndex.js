import React from "react";
const RestaurantIndex = ({restaurants}) => {
  return (
    <>
      <h1>Restaurant Index</h1>
      {restaurants.map((restaurant, index) => {
          return (
            <div key={index}>
              <img src={restaurant.image} width="400px"/>
              <br/>
              {restaurant.name}
              <br/>
              {restaurant.food_type}
              <br/>
              {restaurant.price}
              <br/>
              {restaurant.phone_number}
              <br/>
              <a href={restaurant.website} >View Website</a>
              <br/>
              {restaurant.zip}
              <br/>
              {restaurant.city}
              <br/>
              {restaurant.street}
              <br/>
              {restaurant.state}
              <br/>
            </div>
          );
        })}
    </>
  );
};

export default RestaurantIndex;
