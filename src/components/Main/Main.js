import React from "react";
import './Main.css';
import Navigation from "../Navigation/Navigation";


function Main() {
  return (
    <section className="main">
          <Navigation/>
      <div className="main__content">
        <div className="main__img">
          <p className="main__heart-text">С восьмым
            <br></br>марта!!!</p>
        </div>
        <div className='main__text-container'>
          <h3>Любимая Светочка</h3>
          <p>С восьмым марта поздравляю<br></br>
            Шлю тебе любовь из далека <br></br>
          </p>

        </div>

      </div>
    </section>
  );
}

export default Main;
