import { IconType } from "react-icons"
import { FaUserNinja, FaMusic, FaPizzaSlice, FaBrain, FaWineGlassAlt, FaUserAlt, FaAutoprefixer, FaMoneyBillWave } from "react-icons/fa"

export function generateIcon(i: string) {
    switch (i) {
        case "ninja":
            return <FaUserNinja />
        case "music":
            return <FaMusic />
        case "pizza":
            return <FaPizzaSlice />
        case "memory":
            return <FaBrain />
        case "style":
            return <FaWineGlassAlt />
        case "port":
            return <FaUserAlt />
        case "finance":
            return <FaMoneyBillWave />
        default:
            return <FaAutoprefixer />
    }
}