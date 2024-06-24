import ErrorRepository from "../ErrorRepository";
const mapErrorArr = [
    [10, "Value error"],
    [20, "App error"],
    [30, "API error"],
    [50, "Server error"],
    [60, "People error"]
];


test('ErrorRepository test', () => {
    const testObj = new ErrorRepository();
    const expected = new Map(mapErrorArr);
    
    expect(testObj.errorMap).toEqual(expected);
});

test('translate method test', () => {
    const testObj = new ErrorRepository();
    const expected = "People error";
    
    expect(testObj.translate(60)).toEqual(expected);
    expect(testObj.translate(90)).toEqual("Unknown error");
});