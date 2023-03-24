// Models
export interface Cart {
    name: string,
    address: string,
    delivery: string,
    itemOrders: ItemOrder[]
}

export interface ItemOrder {
    item: string,
    unitPrice: number,
    quantity: number
}
// Const = Variable
export const itemPrice = new Map ([
    ["acorn_squash", 1],
    ["apple", 2],
    ["bell_pepper", 3],
    ["blueberries", 1],
    ["broccoli", 2],
    ["carrot", 3],
    ["celery", 1],
    ["chili_pepper", 2],
    ["corn", 3],
    ["eggplant", 1],
    ["harold", 2],
    ["lettuce", 3],
    ["mushroom", 1],
    ["onion", 2],
    ["potato", 3],
    ["pumpkin", 1],
    ["radish", 2],
    ["squash", 3],
    ["strawberry", 1],
    ["sugar_snap", 2],
    ["tomato", 3],
    ["zucchini", 1]
])

export interface Item {
    name: string
}
// Class
export class List {
    private list: Item[] = []

    constructor() {
    for(let key of itemPrice.keys()){
        this.list.push({
            name: key
    })
    } 
    
    }
    // method to return list for because calling the class doesnt give u the list (Type mismatch AND HJ say must do)
    show(): Item[] {
        return this.list
        }
}

