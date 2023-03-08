import Alazan from "../images/FotoBook1/Alazan.jpg"
import Vine from "../images/FotoBook1/VineOnBalcony.jpg";
import View from "../images/FotoBook1/ViewFromBalcony.jpg";
import NightCity from "../images/FotoBook1/NightCity.jpg";
import NewYearAlley from "../images/FotoBook1/NewYearAlley.jpg";
import OldCity from "../images/FotoBook1/OldCity.jpg";
import Chachapyri from "../images/FotoBook1/Chachapyri.jpg";
import CaminMan from "../images/FotoBook1/CaminMan.jpg";

import Bath from "../images/FotoBook2/Bath.jpg";
import Boat from "../images/FotoBook2/Boat.jpg";
import Cat from "../images/FotoBook2/Cat.jpg";
import ChacapyriMeg from "../images/FotoBook2/Chacapyri.jpg";
import Boatriver from "../images/FotoBook2/Boatriver.jpg";
import Nightview from "../images/FotoBook2/Nightview.jpg";
import Park from "../images/FotoBook2/Park.jpg";
import River from "../images/FotoBook2/River.jpg";

import Salut from "../images/FotoBook3/Salut.jpg";
import Street from "../images/FotoBook3/Street.jpg";
import Mosque from "../images/FotoBook3/Mosque.jpg";
import Shashlik from "../images/FotoBook3/Shashlik.jpg";
import Santa from "../images/FotoBook3/Santa.jpg";
import Windmill from "../images/FotoBook3/Windmill.jpg";
import WhiteHouse from "../images/FotoBook3/WhiteHouse.jpg";
import GlintWein from "../images/FotoBook3/GlintWein.jpg";

export const MAIN_NAVIGATION = [
  {
    classImg: 'links__link_first',
    flag: 'NewYear'
  },
  {
    classImg: 'links__link_second',
    flag: 'Tbilisi'
  },
  {
    classImg: 'links__link_third',
    flag: 'Signachi'
  },
]

export const FOTO_ALBOM_SIGNACHI = {
  title: "Сигнахи",
  text: "Света и Андрей приехали в Сигнахи рано утром. По приезду они пошли отведали вкуснейших бургеров с пивом. " +
    "Пошел пушистый снег - первый за этот год, который так редко бывает в этих краях. Затем они заселились в отель, " +
    "где выпили бутылочку красного вина и понаслаждались видами на Алазанскую долину, которая едва выглядывала из-за " +
    "тумана и снега. Вечером они пошли гулять по Новогоднему городу с хорошим настроением и бутылочкой хорошего коньяка. " +
    "А затем пришли в ресторан и сели у камина пить вино и есть национальные кахетинские блюда. " +
    "Вечер закончился романтической прогулкой и милованием в отеле",
  foto: [
    {
      img: Alazan,
      description: "Алазанская долина"
    },
    {
      img: Vine,
      description: "На балконе с вином"
    },
    {
      img: View,
      description: "Вид с балкона"
    },
    {
      img: NightCity,
      description: "Ночной город"
    },
    {
      img: NewYearAlley,
      description: "Новогодняя аллея"
    },
    {
      img: OldCity,
      description: "Старый город"
    },
    {
      img: Chachapyri,
      description: "Хачапури"
    },
    {
      img: CaminMan,
      description: "Камин"
    },
  ]
}

export const FOTO_ALBOM_TBILISI = {
  title: "Тбилиси",
  text: "В Тбилиси Света и Андрей много гуляли. Ходили в ботанический сад, где видели большой водопад. Были у серных бань," +
    "зашли в дом калейдоскоп, познакомились в ресторане с Грузинским Пифулем. А еще катались на лодке и смотрели на " +
    "вечерний город, слушая Вахтанга Кикабидзе. Ходили в парк атракционов, где катались на американских горках, были в " +
    "доме ужасов, смотрели на ночной город с высоты, а затем спускались на знаменитом Тбилисском фуникулере. А еще пили " +
    "много вина и держались за ручки..",
  foto: [
    {
      img: Bath,
      description: "Бани"
    },
    {
      img: River,
      description: "Старый город"
    },
    {
      img: Boat,
      description: "Катание на лодочке"
    },
    {
      img: Boatriver,
      description: "Вид с реки на город"
    },
    {
      img: ChacapyriMeg,
      description: "Хачапури с вином"
    },
    {
      img: Cat,
      description: "Лапки 😊"
    },
    {
      img: Park,
      description: "Парк"
    },
    {
      img: Nightview,
      description: "Ночной вид на город"
    },
  ]
}

export const FOTO_ALBOM_NEW_YEAR = {
  title: "Новый год в Тбилиси",
  text: "Света приехала к Андрею вечером 31 декабря, и он ее встретил с цветами и отвез домой, где накрыл новогодний стол." +
    " На столе была елка, Чичилаки, хамон, шампанское, оливье и многое другое, а Света привезла красную икру. В новый год" +
    " они смотрели с балкона салют и обнимались после долгой разлуки. В праздничные дни они много гуляли по городу, ели шашлыки," +
    " пили глинтвейн, много смеялись и целовались",
  foto: [
    {
      img: Salut,
      description: "Салют"
    },
    {
      img: Street,
      description: "Центральная улица"
    },
    {
      img: Mosque,
      description: "Чудеса света"
    },
    {
      img: Shashlik,
      description: "Шашлык"
    },
    {
      img: Santa,
      description: "Дед Мороз"
    },
    {
      img: Windmill,
      description: "Мельница Мулен Руж"
    },
    {
      img: WhiteHouse,
      description: "Белый дом"
    },
    {
      img: GlintWein,
      description: "Вкусный глинтвейн"
    },
  ]
}
