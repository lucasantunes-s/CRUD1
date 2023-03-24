class Film {
    constructor (id, name, runtime) {
        this.id = id;
        this.name = name;
        this.runtime = runtime;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getRuntime() {
        return this.runtime;
    }
}

const avatar = new Film(1, "Avatar", 150);
const avengers = new Film(0, "Avangers", 200);
const penguins = new Film(2, "Penguins", 300);

filmsArray = [avatar, avengers, penguins];

module.exports = filmsArray;