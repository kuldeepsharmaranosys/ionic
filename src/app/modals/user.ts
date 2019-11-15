interface UserInterface {
    id: number;
    name: string;
    email: string;
}
export class User implements UserInterface {
    id: number = 10;
    name: string = 'Kuldeep';
    email: string;
    constructor(data: UserInterface) {
        for (const value in data) {
            if (data[value]) {
                this[value] = data[value];
            }
        }
    }
}
