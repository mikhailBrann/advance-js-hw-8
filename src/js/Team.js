export default class Team {
    constructor() {
        this.members = new Set();
    }
    
    add(obj) {
        if(this.members.has(obj)) {
            return false;
        }

        this.members.add(obj);
    }

    addAll(objectsArr) {
        objectsArr.forEach(elem => this.add(elem));
    }

    toArray() {
        return this.members.entries();
    }
}