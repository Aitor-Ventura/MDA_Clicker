import { v4 as uuidv4 } from "uuid";
import paper from "./upgradesImg/paper.png"
import paper_poo from "./upgradesImg/paper_poo.png"
import euro_paper from "./upgradesImg/euro_paper.png"

import paper_axe from "./upgradesImg/paper_axe.png"
import stinky_axe from "./upgradesImg/stinky_axe.png"
import euro_axe from "./upgradesImg/euro_axe.png"

import bag_paper from "./upgradesImg/bag_paper.png"
import suspicious_bag from "./upgradesImg/suspicious_bag.png"
import the_bag from "./upgradesImg/the_bag.png"

import rocket_paper from "./upgradesImg/rocket_paper.png"
import rocket_poo from "./upgradesImg/rocket_poo.png"
import pedrocket from "./upgradesImg/pedrocket.png"

import van1 from "./upgradesImg/van1.png"
import van2 from "./upgradesImg/van2.png"
import van3 from "./upgradesImg/van3.png"

import themepark1 from "./upgradesImg/themepàrk1.png"
import themepark2 from "./upgradesImg/themepàrk2.png"
import themepark3 from "./upgradesImg/themepàrk3.png"

import factory1 from "./upgradesImg/factory1.png"
import factory2 from "./upgradesImg/factory2.png"
import factory3 from "./upgradesImg/factory3.png"

import ufo1 from "./upgradesImg/ufo1.png"
import ufo2 from "./upgradesImg/ufo2.png"
import ufo3 from "./upgradesImg/ufo3.png"


const upgrades = [
  {
    id: uuidv4(),
    name: "Paper",
    type: "Basic",
    price: 10,
    pointsPerSeconds: 100,
    purchased: false,
    srcImage: paper,
  },
  {
    id: uuidv4(),
    name: "Paper with poo",
    type: "Basic",
    price: 20000,
    pointsPerSeconds: 200,
    purchased: false,
    srcImage: paper_poo,
  },
  {
    id: uuidv4(),
    name: "Europaper",
    type: "Basic",
    price: 200000,
    pointsPerSeconds: 350,
    purchased: false,
    srcImage: euro_paper,
  },
  {
    id: uuidv4(),
    name: "Paper axe",
    type: "Lumberjack",
    price: 15000,
    pointsPerSeconds: 200,
    purchased: false,
    srcImage: paper_axe,
  },
  {
    id: uuidv4(),
    name: "Stinky axe",
    type: "Lumberjack",
    price: 30000,
    pointsPerSeconds: 300,
    purchased: false,
    srcImage: stinky_axe,
  },
  {
    id: uuidv4(),
    name: "Euroaxe",
    type: "Lumberjack",
    price: 300000,
    pointsPerSeconds: 450,
    purchased: false,
    srcImage: euro_axe,
  },
  {
    id: uuidv4(),
    name: "Bag of paper",
    type: "Shop",
    price: 20000,
    pointsPerSeconds: 300,
    purchased: false,
    srcImage: bag_paper,
  },
  {
    id: uuidv4(),
    name: "Suspicious bag",
    type: "Shop",
    price: 40000,
    pointsPerSeconds: 400,
    purchased: false,
    srcImage: suspicious_bag,
  },
  {
    id: uuidv4(),
    name: "THE BAG",
    type: "Shop",
    price: 400000,
    pointsPerSeconds: 550,
    purchased: false,
    srcImage: the_bag,
  },
  {
    id: uuidv4(),
    name: "Paper oil?",
    type: "Van",
    price: 25000,
    pointsPerSeconds: 400,
    purchased: false,
    srcImage: van1,
  },
  {
    id: uuidv4(),
    name: "Paper oil with poo",
    type: "Van",
    price: 50000,
    pointsPerSeconds: 500,
    purchased: false,
    srcImage: van2,
  },
  {
    id: uuidv4(),
    name: "Rich oil",
    type: "Van",
    price: 500000,
    pointsPerSeconds: 650,
    purchased: false,
    srcImage: van3,
  },
  {
    id: uuidv4(),
    name: "Paper wagon",
    type: "ThemePark",
    price: 30000,
    pointsPerSeconds: 500,
    purchased: false,
    srcImage: themepark1,
  },
  {
    id: uuidv4(),
    name: "Uuugh wagon",
    type: "ThemePark",
    price: 60000,
    pointsPerSeconds: 600,
    purchased: false,
    srcImage: themepark2,
  },
  {
    id: uuidv4(),
    name: "VIP wagon",
    type: "ThemePark",
    price: 600000,
    pointsPerSeconds: 750,
    purchased: false,
    srcImage: themepark3,
  },
  {
    id: uuidv4(),
    name: "Paper gears",
    type: "Factory",
    price: 35000,
    pointsPerSeconds: 600,
    purchased: false,
    srcImage: factory1,
  },
  {
    id: uuidv4(),
    name: "Wet gears",
    type: "Factory",
    price: 70000,
    pointsPerSeconds: 700,
    purchased: false,
    srcImage: factory2,
  },
  {
    id: uuidv4(),
    name: "Eurogears",
    type: "Factory",
    price: 700000,
    pointsPerSeconds: 850,
    purchased: false,
    srcImage: factory3,
  },
  {
    id: uuidv4(),
    name: "A normal rocket",
    type: "Rocket",
    price: 40000,
    pointsPerSeconds: 700,
    purchased: false,
    srcImage: rocket_paper,
  },
  {
    id: uuidv4(),
    name: "A rocket with... is that poo?",
    type: "Rocket",
    price: 80000,
    pointsPerSeconds: 800,
    purchased: false,
    srcImage: rocket_poo,
  },
  {
    id: uuidv4(),
    name: "Pedro Sánchez's Rocket",
    type: "Rocket",
    price: 800000,
    pointsPerSeconds: 950,
    purchased: false,
    srcImage: pedrocket,
  },
  {
    id: uuidv4(),
    name: "Alien mark",
    type: "UFO",
    price: 45000,
    pointsPerSeconds: 800,
    purchased: false,
    srcImage: ufo1,
  },
  {
    id: uuidv4(),
    name: "Special Alien mark",
    type: "UFO",
    price: 90000,
    pointsPerSeconds: 900,
    purchased: false,
    srcImage: ufo2,
  },
  {
    id: uuidv4(),
    name: "4L13N M4RK",
    type: "UFO",
    price: 900000,
    pointsPerSeconds: 1000,
    purchased: false,
    srcImage: ufo3,
  },
];

export default upgrades;
