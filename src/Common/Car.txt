import { useState } from "react";

function Car(props: any) {
  return <li>I am a {props.brand}</li>;
}

function Garage() {
  const [color, setColor] = useState("red");

  // Function to generate a random color
  const getRandomDarkColor = () => {
    const letters = "0123456789ABCDEF".split("");
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.round(Math.random() * 10)]; // Start from index 6 for darker colors
    }
    return newColor;
  };

  // Function to handle click event and set random color
  const handleClick = () => {
    const randomColor = getRandomDarkColor();
    setColor(randomColor);
  };

  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <button onClick={handleClick}>Change Color of text</button>
      <h3 style={{ color: color }}>Text color is {color}</h3>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
    </>
  );
}

function CarColor() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };

  const updateYear = () => {
    setCar((previousState) => {
      return { ...previousState, year: "2024" };
    });
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button type="button" onClick={updateColor}>
        Blue
      </button>

      <button type="button" onClick={updateYear}>
        Mark 2024
      </button>
    </>
  );
}

export default CarColor;
