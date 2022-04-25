const MissionCommander = require('./app/missionCommander');

const carlo = new MissionCommander("Carlo")
const ely = new MissionCommander("Ely")
const zoe = new MissionCommander("Zoe")

console.log(carlo.name);
console.log(ely.name);
console.log(zoe.name);