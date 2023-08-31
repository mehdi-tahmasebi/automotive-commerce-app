import { useState } from "react";

export default function CarsList({ cars }) {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarClick = (carId) => {
    setSelectedCar(carId);
  };

  return (
    <ul className="list">
      {cars?.map((car) => (
        <Car
          car={car}
          key={car.id}
          onClick={() => handleCarClick(car.id)}
          isSelected={selectedCar === car.id}
        />
      ))}
    </ul>
  );
}

function Car({ car, onClick, isSelected }) {
  return (
    <li onClick={onClick} className={isSelected ? "selected" : ""}>
      <h2>{car.make}</h2>
      <h3>Model: {car.model}</h3>
      <span>Price: {`💲 ${car.price}`}</span>
      {isSelected && (
        <div>
          <p>
            <strong>Description:</strong>
            {car.description}
          </p>
          <p>
            <strong>Features: </strong>
            {car.features}
          </p>
          <p>
            <strong>Mileage:</strong> {`⏲ ${car.mileage}`}
          </p>
        </div>
      )}
    </li>
  );
}
