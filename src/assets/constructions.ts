import { v4 as uuidv4 } from "uuid";
import lumberjack1 from "./constructionsImg/lumberjack1.png";
import shop from "./constructionsImg/shop.png";
import factory from "./constructionsImg/factory.png";
import rocket from "./constructionsImg/rocket.png";
import van from "./constructionsImg/van.png";
import shoppingcenter from "./constructionsImg/shoppingcenter.png";
import themepark from "./constructionsImg/themepark.png";
import ufo from "./constructionsImg/ufo.png";

const constructions = [
  {
    id: uuidv4(),
    name: "Lumberjack",
    price: 15,
    basePrice: 15,
    pointsPerSeconds: 3,
    basePointsPerSeconds: 3,
    purchased: 0,
    srcImage: lumberjack1,
  },
  {
    id: uuidv4(),
    name: "Shop",
    price: 100,
    basePrice: 100,
    pointsPerSeconds: 10,
    basePointsPerSeconds: 10,
    purchased: 0,
    srcImage: shop,
  },
  {
    id: uuidv4(),
    name: "Van",
    price: 350,
    basePrice: 350,
    pointsPerSeconds: 35,
    basePointsPerSeconds: 35,
    purchased: 0,
    srcImage: van,
  },
  {
    id: uuidv4(),
    name: "Shopping Center",
    price: 700,
    basePrice: 700,
    pointsPerSeconds: 70,
    basePointsPerSeconds: 70,
    purchased: 0,
    srcImage: shoppingcenter,
  },
  {
    id: uuidv4(),
    name: "Theme Park",
    price: 1500,
    basePrice: 1500,
    pointsPerSeconds: 150,
    basePointsPerSeconds: 150,
    purchased: 0,
    srcImage: themepark,
  },
  {
    id: uuidv4(),
    name: "Factory",
    price: 3000,
    basePrice: 3000,
    pointsPerSeconds: 300,
    basePointsPerSeconds: 300,
    purchased: 0,
    srcImage: factory,
  },
  {
    id: uuidv4(),
    name: "Rocket",
    price: 5500,
    basePrice: 5500,
    pointsPerSeconds: 550,
    basePointsPerSeconds: 550,
    purchased: 0,
    srcImage: rocket,
  },
  {
    id: uuidv4(),
    name: "UFO",
    price: 9000,
    basePrice: 9000,
    pointsPerSeconds: 900,
    basePointsPerSeconds: 900,
    purchased: 0,
    srcImage: ufo,
  },
  
];

export default constructions;
