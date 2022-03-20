import {v4 as uuidv4} from 'uuid';

const constructions = [
    {
        id: uuidv4(),
        name: 'Lumberjack',
        price: 15,
        pointsPerSeconds: 3,
        purchased: 0,
        srcImage: '../../img/lumberjack1.png'
    },
    {
        id: uuidv4(),
        name: 'Shop',
        price: 100,
        pointsPerSeconds: 10,
        purchased: 0,
        srcImage: '../../img/shop.png'
    },
    {
        id: uuidv4(),
        name: 'Factory',
        price: 700,
        pointsPerSeconds: 50,
        purchased: 0,
        srcImage: '../../img/factory.png'
    },
    {
        id: uuidv4(),
        name: 'Rocket',
        price: 1500,
        pointsPerSeconds: 125,
        purchased: 0,
        srcImage: '../../img/rocket.png'
    },
]

export default constructions