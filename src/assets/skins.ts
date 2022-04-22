import { v4 as uuidv4 } from "uuid";
import paperroll from "./constructionsImg/paperroll.png"
import paperroll2 from "./constructionsImg/paperroll2.png"
import paperroll3 from "./constructionsImg/paperroll3.png"
import paperroll4 from "./constructionsImg/paperroll4.png"
import paperroll5 from "./constructionsImg/paperroll5.png"

const skins = [
    {
        id: uuidv4(),
        srcImage: paperroll,
        minPoints: 0,
        available: true,
    },
    {
        id: uuidv4(),
        srcImage: paperroll2,
        minPoints: 100,
        available: false,
    },
    {
        id: uuidv4(),
        srcImage: paperroll3,
        minPoints: 1000,
        available: false,
    },
    {
        id: uuidv4(),
        srcImage: paperroll4,
        minPoints: 5000,
        available: false,
    },
    {
        id: uuidv4(),
        srcImage: paperroll5,
        minPoints: 100000,
        available: false,
    },                
];

export default skins;