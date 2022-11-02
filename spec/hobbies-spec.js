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
    describe("getHobbies/from/2", () => {
        const list = hobbies.getHobbies().slice(2);
        it("returns 3 hobbies", () => {
            expect(list.length).toEqual(3);
        });
    })
    describe("getHobbies/to/3", () => {
        const list = hobbies.getHobbies().slice(0, 3);
        it("returns 2 hobbies", () => {
            expect(list.length).toEqual(3);
        });
    })
})