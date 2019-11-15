interface JokeCategoryInterface {
    name: string;
}
export class JokeCategory implements JokeCategoryInterface {
    name: string;
    constructor(data: JokeCategoryInterface) {
        for (const key in data) {
            if (data[key]) {
                this[key] = data[key];
            }
        }
    }
}
