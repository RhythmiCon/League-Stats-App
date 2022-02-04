import { useEffect, useState } from "react";

function MatchItem({ matchID }) {
  console.log(matchID);
  const [matchData, setMatchData] = useState({});

  useEffect(() => {
    async function getMatch() {
      const req = await fetch(`./api/fetchMatchByMatchID`, {
        method: "GET",
        headers: {
          match: matchID,
        },
      });

      const response = await req.json();
      setMatchData(response);
    }

    getMatch();
    console.log(matchData);
  }, []);

  return (
    <div>
      <h1>Individual match ID {matchID}</h1>
      {matchData.info ? (
        <div>
          <h1>{matchData.info.gameMode}</h1>
        </div>
      ) : null}
    </div>
  );
}

export default MatchItem;
