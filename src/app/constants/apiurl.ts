export const isdummyData = true;
export const APIURL = {
    perPage: isdummyData ? '' : '/10' ,
    categories: isdummyData ? './assets/dummydata/jokecategory.json' : 'categories' ,
    jokes: isdummyData ? './assets/dummydata/joke.json' : 'jokes/random/',
    joke: 'jokes/'
};
