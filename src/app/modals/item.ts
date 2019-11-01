interface ItemInterface{
    id: number,
    title: string,
    image: string,  
    date: string,
    description: string
}
export class Item implements ItemInterface{
    id: number
    title: string
    image: string  
    date: string
    description: string
    constructor(data: ItemInterface){
        for(let value in data){
            this[value] = data[value];
        }
    }
}
