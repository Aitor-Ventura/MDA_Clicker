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


const upgrades = [
  {
    id: uuidv4(),
    name: "Paper 🧻",
    price: 15000,
    pointsPerSeconds: 100,
    purchased: false,
    srcImage: paper,
  },
  {
    id: uuidv4(),
    name: "Paper with poo 💩",
    price: 50000,
    pointsPerSeconds: 200,
    purchased: false,
    srcImage: paper_poo,
  },
  {
    id: uuidv4(),
    name: "Europaper 💶",
    price: 500000,
    pointsPerSeconds: 500,
    purchased: false,
    srcImage: euro_paper,
  },
  {
    id: uuidv4(),
    name: "Paper axe 🪓",
    price: 500000,
    pointsPerSeconds: 500,
    purchased: false,
    srcImage: paper_axe,
  },
  {
    id: uuidv4(),
    name: "Stinky axe 🤢",
    price: 500000,
    pointsPerSeconds: 500,
    purchased: false,
    srcImage: stinky_axe,
  },
  {
    id: uuidv4(),
    name: "Euroaxe 💶",
    price: 500000,
    pointsPerSeconds: 500,
    purchased: false,
    srcImage: euro_axe,
  },
  {
    id: uuidv4(),
    name: "Bag of paper 💰",
    price: 500000,
    pointsPerSeconds: 500,
    purchased: false,
    srcImage: bag_paper,
  },
  {
    id: uuidv4(),
    name: "Suspicious bag 🤨",
    price: 500000,
    pointsPerSeconds: 500,
    purchased: false,
    srcImage: suspicious_bag,
  },
  {
    id: uuidv4(),
    name: "THE BAG 👑",
    price: 500000,
    pointsPerSeconds: 500,
    purchased: false,
    srcImage: the_bag,
  },
  {
    id: uuidv4(),
    name: "A normal rocket 🚀",
    price: 500000,
    pointsPerSeconds: 500,
    purchased: false,
    srcImage: rocket_paper,
  },
  {
    id: uuidv4(),
    name: "A rocket with... is that poo? 🟤",
    price: 500000,
    pointsPerSeconds: 500,
    purchased: false,
    srcImage: rocket_poo,
  },
  {
    id: uuidv4(),
    name: "Pedro Sánchez's Rocket 🏆",
    price: 500000,
    pointsPerSeconds: 500,
    purchased: false,
    srcImage: pedrocket,
  },
];

export default upgrades;
