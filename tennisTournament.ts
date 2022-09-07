let worldTournament = [
    {
      playerName: "Novac Djokovic",
      worldRank: 1,
      noOfMatches: 127,
      playerId: "#111A",
    },
    {
      playerName: "Rafael Nadal",
      worldRank: 2,
      noOfMatches: 135,
      playerId: "#222B",
    },
    {
      playerName: "Roger Federer",
      worldRank: 3,
      noOfMatches: 140,
      playerId: "#333C",
    },
    {
      playerName: "Alexander Zverev",
      worldRank: 4,
      noOfMatches: 145,
      playerId: "#444D",
    },
    {
      playerName: "Leander Paes",
      worldRank: 5,
      noOfMatches: 150,
      playerId: "#555E",
    },
    {
      playerName: "Prathin",
      worldRank: 6,
      noOfMatches: 155,
      playerId: "#666F",
    },
    {
      playerName: "karthik",
      worldRank: 7,
      noOfMatches: 160,
      playerId: "#777G",
    },
    {
      playerName: "Suman",
      worldRank: 8,
      noOfMatches: 162,
      playerId: "#888H",
    },
    {
      playerName: "Siva",
      worldRank: 9,
      noOfMatches: 165,
      playerId: "#999H",
    },
    {
      playerName: "srini",
      worldRank: 10,
      noOfMatches: 170,
      playerId: "#111H",
    },
    {
      playerName: "tamil selvan",
      worldRank: 11,
      noOfMatches: 175,
      playerId: "#222H",
    },
    {
      playerName: "Kamal",
      worldRank: 12,
      noOfMatches: 180,
      playerId: "#333H",
    },
    {
      playerName: "kishore",
      worldRank: 13,
      noOfMatches: 185,
      playerId: "#444H",
    },
    {
      playerName: "Agith",
      worldRank: 14,
      noOfMatches: 188,
      playerId: "#555H",
    },
    {
      playerName: "surya",
      worldRank: 15,
      noOfMatches: 190,
      playerId: "#666H",
    },
    {
      playerName: "John",
      worldRank: 16,
      noOfMatches: 195,
      playerId: "#777H",
    },
  ];
  
  console.log(worldTournament);
  
  function schedulingMatches() {
    let tournamentSchedule = [];
    for (let i = 0; i < worldTournament.length / 2; i++) {
      let Schedule = {
        player: worldTournament[i].playerName,
        playerRank: worldTournament[i].worldRank,
        playerID: worldTournament[i].playerId,
        opponentPlayer:worldTournament[worldTournament.length - 1 - i].playerName,
        opponentPlayerRank:worldTournament[worldTournament.length - 1 - i].worldRank,
        opponentPlayerID:worldTournament[worldTournament.length - 1 - i].playerId,
      };
      tournamentSchedule.push(Schedule);
    }
    return tournamentSchedule;
  }
  //ROUND 1
  function roundOne() {
    let Qualifying = [];
    let tournamentMatch = schedulingMatches();
    for (let j = 0; j < tournamentMatch.length; j++) {
      if (j % 2 == 0) {
        let roundOneWinners = {
          matchWinner: tournamentMatch[j].player,
          matchWinnerRank: tournamentMatch[j].playerRank,
          matchwinnerID: tournamentMatch[j].playerID,
        };
        Qualifying.push(roundOneWinners);
      } else {
        let roundOneWinners = {
          matchWinner: tournamentMatch[j].player,
          matchWinnerRank: tournamentMatch[j].playerRank,
          matchwinnerID: tournamentMatch[j].playerID,
        };
        Qualifying.push(roundOneWinners);
      }
    }
    return Qualifying;
  }
  //RoundOneMatches
  function roundOneMatches() {
    let roundOneSchedule = [];
    let round_One = roundOne();
    for (let sum = 0; sum < round_One.length; sum += 2) {
      let round_1 = {
        player: round_One[sum].matchWinner,
        playerRank: round_One[sum].matchWinnerRank,
        playerID:round_One[sum].matchwinnerID,
        opponentPlayer: round_One[1 + sum].matchWinner,
        opponentPlayerRank: round_One[1 + sum].matchWinnerRank,
        opponentPlayerId:round_One[1+sum].matchwinnerID
      };
      roundOneSchedule.push(round_1);
    }
    return roundOneSchedule;
  }
  
  
  //round 2
  function roundTwo() {
    let roundTwoQualifying = [];
    let roundOneMatch = roundOneMatches();
    for (let k = 0; k < roundOneMatch.length; k++) {
      if (k % 2 == 0) {
        let roundTwoWinners = {
          matchWinner: roundOneMatch[k].player,
          matchWinnerRank: roundOneMatch[k].playerRank,
          matchWinnerID:roundOneMatch[k].playerID
        };
        roundTwoQualifying.push(roundTwoWinners);
      } else {
        let roundTwoWinners = {
          matchWinner: roundOneMatch[k].player,
          matchWinnerRank: roundOneMatch[k].playerRank,
          matchWinnerID : roundOneMatch[k].playerID
        };
        roundTwoQualifying.push(roundTwoWinners);
      }
    }
    return roundTwoQualifying;
  }
  
  function roundTwoMatches() {
    let roundTwoSchedule = [];
    let round_Two = roundTwo();
    for (let l = 0; l < round_Two.length; l += 2) {
      let round_2 = {
        player: round_Two[l].matchWinner,
        playerRank: round_Two[l].matchWinnerRank,
        playerID:round_Two[l].matchWinnerID,
        opponentPlayer: round_Two[1 + l].matchWinner,
        opponentPlayerRank: round_Two[1 + l].matchWinnerRank,
        opponentPlayerID:round_Two[1+l].matchWinnerID
      };
      roundTwoSchedule.push(round_2);
    }
    return roundTwoSchedule;
  }
  //Round 3
  function roundThree() {
    let roundThreeQualifying:any = [];
    let roundTwoMatch = roundTwoMatches();
    for (let m = 0; m < roundTwoMatch.length; m++) {
      if (m % 2 == 0) {
        let roundTwoWinners = {
          matchWinner: roundTwoMatch[m].player,
          matchWinnerRank: roundTwoMatch[m].playerRank,
          matchWinnerID:roundTwoMatch[m].playerID
        };
        roundThreeQualifying.push(roundTwoWinners);
      } else {
        let roundTwoWinners = {
          matchWinner: roundTwoMatch[m].player,
          matchWinnerRank: roundTwoMatch[m].playerRank,
          matchWinnerID:roundTwoMatch[m].playerID
        };
        roundThreeQualifying.push(roundTwoWinners);
      }
    }
    return roundThreeQualifying;
  }
  roundThree();
  
  function roundThreeMatches() {
    let roundThreeSchedule:any = [];
    let round_Three = roundThree();
    for (let n = 0; n < round_Three.length; n += 2) {
      let round_3 = {
        player: round_Three[n].matchWinner,
        playerRank: round_Three[n].matchWinnerRank,
        playerId:round_Three[n].matchWinnerID,
        opponentPlayer: round_Three[1 + n].matchWinner,
        opponentPlayerRank: round_Three[1 + n].matchWinnerRank,
        opponentPlayerID:round_Three[1+n].matchWinnerID
      };
      roundThreeSchedule.push(round_3);
    }
    return roundThreeSchedule;
  }
  //----TOTALMATCHES
  function wholeTournamentSchedule(worldTournament:any) {
    if (worldTournament.length == 16) {
      let totalMatches = {
        "TOURNAMENT": schedulingMatches(),
        "ROUND ~ 1  -----> QUALIFIERS": roundOneMatches(),
        "ROUND ~ 2  -----> SEMIFINALS": roundTwoMatches(),
        "ROUND ~ 3  -----> FINALS": roundThreeMatches(),
      };
      console.log(
        "---------------------------------------------------------------------------");
      console.log(totalMatches);
    } else if (worldTournament.length == 8) {
      let totalMatches = {
        "TOURNAMENT": schedulingMatches(),
        "ROUND ~ 2  ----> SEMIFINALS" : roundOneMatches(),
        "ROUND ~ 3  ----> FINALS": roundTwoMatches(),
      };
      console.log(totalMatches);
    } else if (worldTournament.length == 4) {
      let totalMatches = {
        "TOURNAMENT  ---->": schedulingMatches(),
        "ROUND ~ 3   ---->": roundOneMatches(),
      };
      console.log(totalMatches);
    }
  }
  wholeTournamentSchedule(worldTournament);