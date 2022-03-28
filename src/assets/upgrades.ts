import { v4 as uuidv4 } from "uuid";

const upgrades = [
  {
    id: uuidv4(),
    name: "Paper 🧻",
    price: 15000,
    pointsPerSeconds: 100,
    purchased: false,
    srcImage: "/img/upg/paper.png",
  },
  {
    id: uuidv4(),
    name: "Paper with poo 💩",
    price: 50000,
    pointsPerSeconds: 200,
    purchased: false,
    srcImage: "/img/upg/paper_poo.png",
  },
  {
    id: uuidv4(),
    name: "Europaper 💶",
    price: 500000,
    pointsPerSeconds: 500,
    purchased: false,
    srcImage: "/img/upg/euro_paper.png",
  },
];

export default upgrades;
