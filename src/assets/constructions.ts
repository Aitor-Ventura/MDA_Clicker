import { v4 as uuidv4 } from "uuid";
import lumberjack1 from "./constructionsImg/lumberjack1.png";
import shop from "./constructionsImg/Shop.png";
import factory from "./constructionsImg/factory.png";
import rocket from "./constructionsImg/rocket.png";

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
    name: "Factory",
    price: 700,
    basePrice: 700,
    pointsPerSeconds: 20,
    basePointsPerSeconds: 20,
    purchased: 0,
    srcImage: factory,
  },
  {
    id: uuidv4(),
    name: "Rocket",
    price: 1500,
    basePrice: 1500,
    pointsPerSeconds: 75,
    basePointsPerSeconds: 75,
    purchased: 0,
    srcImage: rocket,
  },
];

export default constructions;
