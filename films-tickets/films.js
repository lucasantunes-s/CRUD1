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

filmsArray = [avatar];

module.exports = filmsArray;