import React from "react";
import './FotoBook.css';
import Alazan from "../../images/FotoBook1/Alazan.jpg";
import Vine from "../../images/FotoBook1/VineOnBalcony.jpg";

function FotoBook() {
  return (
    <section className="foto-book">
      <h3 className="foto-book__title">Сигнахи</h3>
      <p className="foto-book__text">Мы наслаждались поездкой в Сигнахи и т.д. и т.п.Мы наслаждались поездкой в
        Сигнахи и т.д. и т.п. Мы наслаждались поездкой в Сигнахи и т.д. и т.п. Мы наслаждались поездкой в Сигнахи и т.д.
        и т.п. Мы наслаждались поездкой в Сигнахи и т.д. и т.п. Мы наслаждались поездкой в Сигнахи и т.д. и т.п.
        Мы наслаждались поездкой в Сигнахи и т.д. и т.п.</p>
      <ul class="foto-book__container">
        <li className="foto-book__item-container"><img className="foto-book__item" src={Alazan} alt="Вид на Алазанскую долину"/></li>
        <li className="foto-book__item-container"><img className="foto-book__item" src={Vine} alt="Вид на Алазанскую долину"/></li>
        <li className="foto-book__item-container"><img className="foto-book__item" src={Alazan} alt="Вид на Алазанскую долину"/></li>
        <li className="foto-book__item-container"><img className="foto-book__item" src={Alazan} alt="Вид на Алазанскую долину"/></li>
        <li className="foto-book__item-container"><img className="foto-book__item" src={Vine} alt="Вид на Алазанскую долину"/></li>
        <li className="foto-book__item-container"><img className="foto-book__item" src={Alazan} alt="Вид на Алазанскую долину"/></li>
        <li className="foto-book__item-container"><img className="foto-book__item" src={Alazan} alt="Вид на Алазанскую долину"/></li>
        <li className="foto-book__item-container"><img className="foto-book__item" src={Vine} alt="Вид на Алазанскую долину"/></li>
      </ul>

    </section>
  );
}

export default FotoBook;
