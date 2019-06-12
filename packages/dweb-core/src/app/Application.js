import Router from "../router/Router";
export default class Application {
    constructor(router) {
        this.router = router;
    }
    start() {
        this.__processRoute();
        window["hashchange"] = () => {
            this.__processRoute();
        }
    }
    
    __processRoute() {
        let hash = window["location"]["href"] || "";
        console.log(hash);
        if (hash) {
            hash = hash.substring(1)
        }
        this.router.apply(hash);
    }
}