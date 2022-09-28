export abstract class Dish {
    protected price: number;
    protected ingrediens: number;
    protected nameOfDish: string;
    protected description: string;

    constructor(nameOfDish: string, price: number, ingrediens?: number,  
    description?: string) {
        this.nameOfDish = nameOfDish;
        this.price = price;

        if (ingrediens) {
            this.ingrediens = ingrediens;
        } else {
            this.ingrediens = 0;
        }

        if (description) {
            this.description = description;
        } else {
            this.description = "UNDEFINED";
        }

        if (nameOfDish.length <= 2) {
            throw new Error();
        }

        if (price == 0) {
            throw new Error();
        }

        if (ingrediens == 0) {
            throw new Error();
        }

        if (description.length < 10) {
            throw new Error();
        }
    }

    abstract methodCooking(): void;

    protected getInformation(): string {
        return `Dish\nName: ${this.nameOfDish}\nPrice: ${this.price}\nDescription: ${this.description}\nIngrediens: ${this.ingrediens}`;
    }

    displayInformation(): void {
        const information = this.getInformation();
        console.log(information);
    }

    protected getOrderDish(): string {
        return `Your Dish is ${this.nameOfDish}`;
    }

    orderDish(): void {
        const dish = this.getOrderDish(); 
        console.log(dish);
    }

    changePrice(price: number): void {
        this.price = price;
    }

    changeNameOfDish(nameOfDish: string): void {
        this.nameOfDish = nameOfDish;
    }

    changeIngrediens(ingrediens: number): void {
        this.ingrediens = ingrediens;
    }

    changeDescription(description: string): void {
        this.description = description;
    }
}