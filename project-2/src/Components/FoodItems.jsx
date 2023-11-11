import React from 'react';
import Items from './Items';

const FoodItems = () => {
  let foodItems = ["Dal", "Chawal", "Sabji", "Roti", "Fruits"];

  return (
    <div>
      <ul className="list-group">
        {foodItems.map((item) => (
          <Items key={item} foodItem={item} />
        ))}
      </ul>
    </div>
  );
}

export default FoodItems;
