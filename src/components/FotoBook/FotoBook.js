import React, {useEffect} from "react";
import './FotoBook.css';
import {FOTO_ALBOM_SIGNACHI} from '../../utils/constants';
import {FOTO_ALBOM_TBILISI} from '../../utils/constants';
import {FOTO_ALBOM_NEW_YEAR} from '../../utils/constants';
import Foto from "../Foto/Foto";

function FotoBook({onCardClick, flag}) {
  const [fotographMass, setFotographMass] = React.useState([]);
  const [titleFoto, setTitleFoto] = React.useState('');
  const [textFoto, setTextFoto] = React.useState('');

  useEffect(() => {if (flag==='Tbilisi') {
    setFotographMass(FOTO_ALBOM_TBILISI.foto);
    setTitleFoto(FOTO_ALBOM_TBILISI.title)
    setTextFoto(FOTO_ALBOM_TBILISI.text)
  } else if (flag==='Signachi') {
    setFotographMass(FOTO_ALBOM_SIGNACHI.foto);
    setTitleFoto(FOTO_ALBOM_SIGNACHI.title)
    setTextFoto(FOTO_ALBOM_SIGNACHI.text)
  } else {
    setFotographMass(FOTO_ALBOM_NEW_YEAR.foto);
    setTitleFoto(FOTO_ALBOM_NEW_YEAR.title)
    setTextFoto(FOTO_ALBOM_NEW_YEAR.text)
  }}, [])

  return (
    <section className="foto-book">
      <h3 className="foto-book__title">{titleFoto}</h3>
      <p className="foto-book__text">{textFoto}.</p>
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
