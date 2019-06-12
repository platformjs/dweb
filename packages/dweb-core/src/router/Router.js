export default class Router {
    constructor(pattern, controller, routers) {
        this.pattern = pattern;
        this.controller = controller;
        this.routers = routers
    }
    apply(hash) {
        
    }
}