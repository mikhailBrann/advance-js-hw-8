import Chapter from "../Chapter";

test('Chapter test', () => {
    const testObj = new Chapter("Stanislav");
    const expected = {"name": "Stanislav"};
    
    expect(testObj).toEqual(expected);
});