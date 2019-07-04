const express = require('express');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let smurfs = [
  {
    name: 'Matt Locklin',
    age: 37,
    leaguePosition: 14,
    prevResults: [
    {
      result: 'Beat Ricky Leese 13-6',
      pot: 60,
      challenged: true,
      ruleset: 'World Rules',
      venue: 'WWFC',
      date: '28/05/2019'
    },
    {
      result: 'Lost to Simon Yeats 10-7',
      pot: 20,
      challenged: false,
      ruleset: 'BlackBall',
      venue: 'WWFC',
      date: '09/06/2019'
    },
    {
      result: 'Beat Tom Edwards 13-11',
      pot: 0,
      challenged: true,
      ruleset: 'BlackBall',
      venue: 'WWFC',
      date: '18/06/2019'
    },
    {
      result: 'Beat Damien Currier 13-5',
      pot: 60,
      challenged: true,
      ruleset: 'BlackBall',
      venue: 'WWFC',
      date: '25/06/2019'
    },

      
    ],
    form: ['W', 'L', 'W', 'W'],
    nickname: 'none',
    cue: 'Some piece of wood',
    prizeMoneyWon: 100,
    gamesWon: 3,
    gamesLost: 1,
    highestPosition: 13,
    lowestPosition: 14,
    timesChallenged: 3,
    challengesIssued: 1,
    id: 0
  },
  {
    name: 'Danny Evans',
    age: 37,
    nickname: 'Ginger',
    leaguePosition: 2,
    prevResults: [],
    form: ['w','w'],
    cue: 'MasterCraft',
    prizeMoneyWon: 50,
    gamesWon: 99,
    gamesLost: 1,
    highestPosition: 2,
    lowestPosition: 1,
    id: 1
  },
  {
    name: 'Lewis Turner',
    age: 37,
    nickname: 'Baldy',
    leaguePosition: 3,
    prevResults: [],
    form: [],
    cue: 'MasterCraft',
    prizeMoneyWon: -10400,
    gamesWon: 50,
    gamesLost: 50,
    highestPosition: 10,
    id: 2
  },
  {
    name: 'Andreas Hadjilouca',
    age: 37,
    nickname: 'Baldy',
    leaguePosition: 3,
    prevResults: [],
    form: [],
    cue: 'MasterCraft',
    prizeMoneyWon: -10400,
    gamesWon: 50,
    gamesLost: 50,
    highestPosition: 10,
    id: 3
  },
  {
    name: 'James Brennan',
    age: 37,
    nickname: 'Baldy',
    leaguePosition: 3,
    prevResults: [],
    form: [],
    cue: 'MasterCraft',
    prizeMoneyWon: -10400,
    gamesWon: 50,
    gamesLost: 50,
    highestPosition: 10,
    id: 4
  },
  {
    name: 'Craig Reynolds',
    age: 37,
    nickname: 'Baldy',
    leaguePosition: 3,
    prevResults: [],
    form: [],
    cue: 'MasterCraft',
    prizeMoneyWon: -10400,
    gamesWon: 50,
    gamesLost: 50,
    highestPosition: 10,
    id: 5
  },
  {
    name: 'Ian Eldridge',
    age: 37,
    nickname: 'Baldy',
    leaguePosition: 3,
    prevResults: [],
    form: [],
    cue: 'MasterCraft',
    prizeMoneyWon: -10400,
    gamesWon: 50,
    gamesLost: 50,
    highestPosition: 10,
    id: 6
  },
  {
    name: 'Mark Ash',
    age: 37,
    nickname: 'Baldy',
    leaguePosition: 3,
    prevResults: [],
    form: [],
    cue: 'MasterCraft',
    prizeMoneyWon: -10400,
    gamesWon: 50,
    gamesLost: 50,
    highestPosition: 10,
    id: 7
  },
  {
    name: 'Pete Williams',
    age: 37,
    nickname: 'Baldy',
    leaguePosition: 3,
    prevResults: [],
    form: [],
    cue: 'MasterCraft',
    prizeMoneyWon: -10400,
    gamesWon: 50,
    gamesLost: 50,
    highestPosition: 10,
    id: 8
  },
  {
    name: 'Neil Pugh',
    age: 37,
    nickname: 'Baldy',
    leaguePosition: 3,
    prevResults: [],
    form: [],
    cue: 'MasterCraft',
    prizeMoneyWon: -10400,
    gamesWon: 50,
    gamesLost: 50,
    highestPosition: 10,
    id: 9
  },
  {
    name: 'Darren Poutney',
    age: 37,
    nickname: 'Baldy',
    leaguePosition: 3,
    prevResults: [],
    form: [],
    cue: 'MasterCraft',
    prizeMoneyWon: -10400,
    gamesWon: 50,
    gamesLost: 50,
    highestPosition: 10,
    id: 10
  },
  {
    name: 'Simon Yeats',
    age: 37,
    nickname: 'Baldy',
    leaguePosition: 3,
    prevResults: [],
    form: [],
    cue: 'MasterCraft',
    prizeMoneyWon: -10400,
    gamesWon: 50,
    gamesLost: 50,
    highestPosition: 10,
    id: 11
  },
  {
    name: 'George Allen',
    age: 37,
    nickname: 'Baldy',
    leaguePosition: 3,
    prevResults: [],
    form: [],
    cue: 'MasterCraft',
    prizeMoneyWon: -10400,
    gamesWon: 50,
    gamesLost: 50,
    highestPosition: 10,
    id: 12
  },
  {
    name: 'Damien Currier',
    age: 37,
    nickname: 'Baldy',
    leaguePosition: 3,
    prevResults: [],
    form: [],
    cue: 'MasterCraft',
    prizeMoneyWon: -10400,
    gamesWon: 50,
    gamesLost: 50,
    highestPosition: 10,
    id: 13
  },
  {
    name: 'Damien Currier',
    age: 37,
    nickname: 'Baldy',
    leaguePosition: 3,
    prevResults: [],
    form: [],
    cue: 'MasterCraft',
    prizeMoneyWon: -10400,
    gamesWon: 50,
    gamesLost: 50,
    highestPosition: 10,
    id: 14
  },
  {
    name: 'Damien Currier',
    age: 37,
    nickname: 'Baldy',
    leaguePosition: 3,
    prevResults: [],
    form: [],
    cue: 'MasterCraft',
    prizeMoneyWon: -10400,
    gamesWon: 50,
    gamesLost: 50,
    highestPosition: 10,
    id: 15
  },
  {
    name: 'Damien Currier',
    age: 37,
    nickname: 'Baldy',
    leaguePosition: 3,
    prevResults: [],
    form: [],
    cue: 'MasterCraft',
    prizeMoneyWon: -10400,
    gamesWon: 50,
    gamesLost: 50,
    highestPosition: 10,
    id: 16
  },
  {
    name: 'Damien Currier',
    age: 37,
    nickname: 'Baldy',
    leaguePosition: 3,
    prevResults: [],
    form: [],
    cue: 'MasterCraft',
    prizeMoneyWon: -10400,
    gamesWon: 50,
    gamesLost: 50,
    highestPosition: 10,
    id: 17
  },
  {
    name: 'Damien Currier',
    age: 37,
    nickname: 'Baldy',
    leaguePosition: 3,
    prevResults: [],
    form: [],
    cue: 'MasterCraft',
    prizeMoneyWon: -10400,
    gamesWon: 50,
    gamesLost: 50,
    highestPosition: 10,
    id: 18
  },
  {
    name: 'Damien Currier',
    age: 37,
    nickname: 'Baldy',
    leaguePosition: 3,
    prevResults: [],
    form: [],
    cue: 'MasterCraft',
    prizeMoneyWon: -10400,
    gamesWon: 50,
    gamesLost: 50,
    highestPosition: 10,
    id: 19
  },
  {
    name: 'Damien Currier',
    age: 37,
    nickname: 'Baldy',
    leaguePosition: 3,
    prevResults: [],
    form: [],
    cue: 'MasterCraft',
    prizeMoneyWon: -10400,
    gamesWon: 50,
    gamesLost: 50,
    highestPosition: 10,
    id: 20
  },
  {
    name: 'Damien Currier',
    age: 37,
    nickname: 'Baldy',
    leaguePosition: 3,
    prevResults: [],
    form: [],
    cue: 'MasterCraft',
    prizeMoneyWon: -10400,
    gamesWon: 50,
    gamesLost: 50,
    highestPosition: 10,
    id: 21
  },
  {
    name: 'Damien Currier',
    age: 37,
    nickname: 'Baldy',
    leaguePosition: 3,
    prevResults: [],
    form: [],
    cue: 'MasterCraft',
    prizeMoneyWon: -10400,
    gamesWon: 50,
    gamesLost: 50,
    highestPosition: 10,
    id: 22
  },
  {
    name: 'Damien Currier',
    age: 37,
    nickname: 'Baldy',
    leaguePosition: 3,
    prevResults: [{
      result: 'won 10-0',
      pot: 50
    }],
    form: [],
    cue: 'MasterCraft',
    prizeMoneyWon: -10400,
    gamesWon: 50,
    gamesLost: 50,
    highestPosition: 10,
    id: 23
  },


];
server.get('/players', (req, res) => {
  res.json(smurfs);
});
let smurfId = smurfs.length;

server.post('/players', (req, res) => {
  const { name, age, leaguePosition } = req.body;
  const newSmurf = {
    name, age, leaguePosition, id: smurfId, gamesWon: 0, prizeMoneyWon: 0,
    gamesWon: 0,
    prevResults: [],
    form: [],
    gamesLost: 0,
    highestPosition: 0 , };
  if (!name || !age || !leaguePosition ) {
    return sendUserError(
      'Ya gone did smurfed! Name/Age/League Position are all required to create a smurf in the smurf DB.',
      res
    );
  }
  const findSmurfByName = smurf => {
    return smurf.name === name;
  };
  if (smurfs.find(findSmurfByName)) {
    return sendUserError(
      `Ya gone did smurfed! ${name} already exists in the smurf DB.`,
      res
    );
  }

  smurfs.push(newSmurf);
  smurfId++;
  res.json(smurfs);
});

server.put('/players/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, height } = req.body;
  const findSmurfById = smurf => {
    return smurf.id == id;
  };
  const foundSmurf = smurfs.find(findSmurfById);
  if (!foundSmurf) {
    return sendUserError('No Smurf found by that ID', res);
  } else {
    if (name) foundSmurf.name = name;
    if (age) foundSmurf.age = age;
    if (height) foundSmurf.height = height;
    res.json(smurfs);
  }
});

server.delete('/players/:id', (req, res) => {
  const { id } = req.params;
  const foundSmurf = smurfs.find(smurf => smurf.id == id);

  if (foundSmurf) {
    const SmurfRemoved = { ...foundSmurf };
    smurfs = smurfs.filter(smurf => smurf.id != id);
    res.status(200).json(smurfs);
  } else {
    sendUserError('No smurf by that ID exists in the smurf DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
