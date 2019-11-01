interface UserInterface{
    id: number
    name: string
}
export class User implements UserInterface{
    id: number
    name: string
    constructor(user: UserInterface){
        this.id = user.id;
        this.name = user.name
    }
}
