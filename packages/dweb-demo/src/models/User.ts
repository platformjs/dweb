export default class User {
    name: string
    age: number
    constructor(name:string) {
        this.name = name;
    }
    set(name:string, value:any): User {
        this[name] = value;
        return this;
    }
    get(name:string): any {
        return this[name];
    }
}