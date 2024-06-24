import Team from "../Team";
import Chapter from "../Chapter";

const chapterOne = new Chapter("Timofei");
const chapterTwo = new Chapter("Dragunov")
const chapterThree = new Chapter("Bigger");
const chapters = [
    chapterOne,
    chapterTwo,
    chapterThree
];

test('Team test', () => {
    const testObj = new Team();
    const expected = {"members": new Set};
    
    expect(testObj).toEqual(expected);
});

test('Team add method test', () => {
    const testObj = new Team();
    const expected = {"members": new Set};
    const chapter = new Chapter(chapters[0].name);

    testObj.add(chapter);
    expected.members.add(chapters[0]);
    
    expect(testObj.members).toEqual(expected.members);
    expect(testObj.add(chapter)).toEqual(false);
});

test('Team addAll method test', () => {
    const testObj = new Team();
    const expected = chapters.reduce((result, chapter) => result.add(chapter), new Set);

    testObj.addAll(chapters);
   
    expect(testObj.members).toEqual(expected);
});

test('Team toArray method test', () => {
    const testObj = new Team();
    const expected = chapters.reduce((result, chapter) => result.add(chapter), new Set);

    testObj.addAll(chapters);
   
    expect(testObj.toArray()).toEqual(expected.entries());
});