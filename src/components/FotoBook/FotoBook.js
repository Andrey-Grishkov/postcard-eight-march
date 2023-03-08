import React from "react";
import './FotoBook.css';
import {FOTO_ALBOM_SIGNACHI} from '../../utils/constants';
import Foto from "../Foto/Foto";

function FotoBook({onCardClick}) {

  let fotographMass = [];
  fotographMass = FOTO_ALBOM_SIGNACHI.foto;

  return (
    <section className="foto-book">
      <h3 className="foto-book__title">{FOTO_ALBOM_SIGNACHI.title}</h3>
      <p className="foto-book__text">{FOTO_ALBOM_SIGNACHI.text}.</p>
      <ul className="foto-book__container">
          {fotographMass.map((fotograph, item) => (
            <Foto
              fotograph={fotograph}
              onCardClick={onCardClick}
              key={item}
            />
          ))
          }
      </ul>

    </section>
  );
}

export default FotoBook;
