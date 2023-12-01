import Items from './Items';

const FoodItems = ({sabji}) => {
  return (
    <div>
      <ul className="list-group">
        {sabji.map((item) => (
          <Items items={item} />
        ))}
      </ul>
    </div>
  );
}

export default FoodItems;
