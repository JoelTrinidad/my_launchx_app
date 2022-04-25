const MissionCommander = require('./../app/missionCommander');

describe("Unit Test for Mission Commander Class", () => {
    test('1) Create a mission commander objet', () => {
        const myMissionCommander = new MissionCommander("Woppa")
        expect(myMissionCommander.name).toBe("Hola"); 
    })
})