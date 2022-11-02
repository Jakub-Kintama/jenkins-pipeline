const hobbies = require('../hobbies');
describe("API unit test suite", () => {
    describe("getHobbies", () => {
        const list = hobbies.getHobbies();
        it("returns 5 hobbies", () => {
            expect(list.length).toEqual(5);
        });
        it("returns 'jogging' as first hobby", () => {
            expect(list[0]).toBe("jogging");
        });
    })
    describe("getHobbies/1/3", () => {
        const list = hobbies.getHobbies();
        it("returns 3 hobbies", () => {
            expect(list.length).toEqual(1);
        });
    })
    describe("getHobbies/not/1", () => {
        const list = hobbies.getHobbies();
        it("returns 4 hobbies", () => {
            expect(list.length).toEqual(4);
        });
    })
})