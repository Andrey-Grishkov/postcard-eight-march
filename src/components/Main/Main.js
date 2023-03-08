import React from "react";
import './Main.css';
import Navigation from "../Navigation/Navigation";

function Main({handleClickNavigation}) {
  return (
    <section className="main">
          <Navigation handleClickNavigation={handleClickNavigation}/>
      <div className="main__content">
        <div className="main__img">
          <p className="main__heart-text">С восьмым
            <br></br>марта!!!</p>
        </div>
        <div className="main__img-eight-march"></div>
        <div className='main__text-container'>
          <h3 className='main__title'>Любимая Светочка</h3>
          <p className="main__text">С восьмым марта поздравляю<br></br>
            Шлю тебе любовь из далека <br></br>
            И всем сердцем я желаю <br></br>
            Чтоб была со мной всегда
          </p>
          <p className="main__text">Ты одна там не скучай<br></br>
            Позвони подруге, сына пригласи <br></br>
            по Гешпански книгу почитай <br></br>
            Марсу кушать положи
          </p>
          <p className="main__text">Я люблю тебя Цветочек<br></br>
            Но не долго мне страдать<br></br>
            Будет котик и грибочек<br></br>
            С миллионом роз встречать!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Main;
