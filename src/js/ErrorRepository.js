export default class ErrorRepository {
    constructor() {
        const mapErrorArr = [
            [10, "Value error"],
            [20, "App error"],
            [30, "API error"],
            [50, "Server error"],
            [60, "People error"]
        ];

        this.errorMap = new Map(mapErrorArr);
    }

    translate(code) {
        if(this.errorMap.has(code)) {
            return this.errorMap.get(code);
        }

        return "Unknown error";
    }
}