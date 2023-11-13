import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { pizzaData } from "./data";

function App() {
  console.log(pizzaData);
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData.length !== 0 ? (
        <>
          <p>Что-то покороче</p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} obj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <h1>Ждём пиццы 😢 </h1>
      )}
    </main>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            Мы открыты до {closeHour}.00. Приходите к нам или сделайте заказ
            онлайн 😉
          </p>
          <button className="btn">Заказ</button>
        </div>
      )}
    </footer>
  );
}

function Pizza({ obj }) {
  return (
    <li className={`pizza ${obj.soldOut ? "sold-out" : ""}`}>
      <img src={obj.photoName} alt="Pizza spinaci" />
      <div>
        <h3>{obj.name}</h3>
        <p>{obj.ingredients}</p>
        <span>{obj.price}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
