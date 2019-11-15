interface JokeInterface {
    id: number;
    joke: string;
    categories: string[];
}
export class Joke implements JokeInterface {
    id: number;
    joke: string;
    categories: string[];
    constructor(data?: JokeInterface) {
        for (const key in data) {
            if (data[key]) {
                this[key] = data[key];
            }
        }
    }
}
