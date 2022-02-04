import { useEffect, useState } from "react";
import Result from "../Result/Result";

async function MatchItem({ matchID }) {
   const [matchData, setMatchData] = useState({});

   useEffect(() => {
      async function getMatch() {
         const req = await fetch(`./api/fetchMatchByMatchID`, {
            method: "GET",
            headers: {
               matchID: matchID,
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
         {matchData.info ? (
            <div>
               <h1>{matchData.metadata}</h1>
            </div>
         ) : null}
      </div>
   );
}

export default MatchItem;
