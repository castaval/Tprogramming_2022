import { Dish } from "./dish";


const cake = new Dish("cake", 100, 4, "This is usualy cake");
cake.displayInformation()
cake.orderDish()
cake.changePrice(200);
cake.displayInformation();

const cake2 = new Dish("cake", 400);
cake2.displayInformation();